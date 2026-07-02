import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

let root;

export function mount(container) {
  if (!container) {
    return;
  }
  root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}

export function unmount() {
  root?.unmount();
  root = undefined;
}
