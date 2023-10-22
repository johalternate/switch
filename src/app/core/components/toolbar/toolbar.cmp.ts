import { Component, inject } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import { PauseCmp } from '../pause/pause.cmp';
import { PauseResult } from '../../interfaces/pause-result';
import { PauseData } from '../../interfaces/pause-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [],
  template: `
    <button (click)="pause()">
      <span class="material-symbols-outlined icon"> menu </span>
    </button>
  `,
  styles: [
    `
      :host {
        display: flex;
        width: 100%;
        justify-content: flex-end;
        margin-top: 1em;
      }
      button {
        display: flex;
        background-color: transparent;
        color: var(--accent);
      }
    `,
  ],
})
export class ToolbarCmp {
  readonly dialog = inject(Dialog);
  readonly router = inject(Router);

  pause() {
    const pause = this.dialog.open<PauseResult, PauseData>(PauseCmp);
    pause.closed.subscribe((result) => {
      if (result?.navigateTo) this.router.navigate([result.navigateTo]);
    });
  }
}
