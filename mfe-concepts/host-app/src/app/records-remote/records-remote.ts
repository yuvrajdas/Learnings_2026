import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';

@Component({
  selector: 'app-records-remote',
  imports: [],
  template: '<div #recordsHost class="records-remote-host"></div>',
  styles: [
    `
      :host {
        display: block;
        width: 100%;
        max-width: 40rem;
      }
      .records-remote-host {
        min-height: 8rem;
      }
    `,
  ],
})
export class RecordsRemoteComponent implements AfterViewInit, OnDestroy {
  @ViewChild('recordsHost', { read: ElementRef })
  private hostRef!: ElementRef<HTMLElement>;

  private unmount?: () => void;

  async ngAfterViewInit(): Promise<void> {
    const mod = await loadRemoteModule<{
      mount: (el: HTMLElement) => void;
      unmount?: () => void;
    }>('records', './Records');
    mod.mount(this.hostRef.nativeElement);
    this.unmount = mod.unmount;
  }

  ngOnDestroy(): void {
    this.unmount?.();
  }
}
