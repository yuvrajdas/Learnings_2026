"""
Compatibility wrapper around `pyautogui`.

On Linux, importing `pyautogui` may indirectly import `mouseinfo`, which can terminate
the process via `SystemExit` when `tkinter` is not installed (common on minimal Python
installs). This module provides a safe fallback so the rest of the project can run in
CLI/headless environments.
"""

from __future__ import annotations

import sys
from typing import Any, Iterable


class _PyAutoGuiFallback:
    FAILSAFE = False

    @staticmethod
    def alert(text: str = "", title: str = "", button: str = "OK") -> str:
        if title:
            print(f"[ALERT] {title}")
        if text:
            print(text)
        return button

    @staticmethod
    def confirm(
        text: str = "",
        title: str = "",
        buttons: Iterable[str] | None = None,
    ) -> str:
        if title:
            print(f"[CONFIRM] {title}")
        if text:
            print(text)

        opts = list(buttons) if buttons is not None else ["OK"]
        for i, opt in enumerate(opts, start=1):
            print(f"{i}. {opt}")

        # Non-interactive run (e.g., CI / logs): don't block waiting for input.
        if not sys.stdin.isatty():
            for opt in opts:
                if "continue" in opt.lower():
                    print(f"[AUTO] Selected: {opt}")
                    return opt
            print(f"[AUTO] Selected: {opts[0]}")
            return opts[0]

        try:
            raw = input("Select option number (default 1): ").strip()
            idx = int(raw) if raw else 1
        except Exception:
            idx = 1

        if idx < 1 or idx > len(opts):
            idx = 1
        return opts[idx - 1]

    @staticmethod
    def press(key: str) -> None:
        print(f"[PRESS] {key} (no-op; pyautogui unavailable)")


HAVE_PYAUTOGUI = False
_unavailable_reason: BaseException | None = None

# Avoid importing `pyautogui` unless tkinter is present, because on Linux the dependency
# chain can call `SystemExit` when tkinter is missing.
try:
    import tkinter  # noqa: F401

    _tkinter_available = True
except Exception as e:
    _tkinter_available = False
    _unavailable_reason = e

if _tkinter_available:
    try:
        import pyautogui as _pyautogui  # type: ignore

        pyautogui = _pyautogui
        HAVE_PYAUTOGUI = True
    except BaseException as e:  # noqa: BLE001
        _unavailable_reason = e
        pyautogui = _PyAutoGuiFallback()
else:
    pyautogui = _PyAutoGuiFallback()

# Convenience re-exports used throughout the codebase.
alert = pyautogui.alert  # type: ignore[attr-defined]
confirm = pyautogui.confirm  # type: ignore[attr-defined]
press = pyautogui.press  # type: ignore[attr-defined]

if not HAVE_PYAUTOGUI and _unavailable_reason is not None:
    print(
        "WARNING: `pyautogui` is unavailable; using terminal fallback. Reason: "
        f"{type(_unavailable_reason).__name__}: {_unavailable_reason}"
    )

