import { Component, inject } from '@angular/core';
import {} from '@angular/common';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { GameOverResult } from '../../interfaces/game-over-result';
import { GameOverData } from '../../interfaces/game-over-data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-game-over',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div style="text-align: center;">
      @if (data?.titleIcon) {
      <span class="material-symbols-outlined icon">{{ data?.titleIcon }}</span>
      }
      <h2 class="title">
        {{ data?.title || 'Game Over' }}
      </h2>
      <!-- TODO: Remove javascript:void(0) as use a properly styled button -->
      <a
        role="button"
        (click)="dialog.close({ playAgain: true })"
        href="javascript:void(0);"
      >
        <h4>Play Again?</h4>
      </a>
      <a role="button" routerLink="/main-menu" (click)="dialog.close()">
        <h4>Main Menu</h4>
      </a>
    </div>
  `,
  styles: [
    `
      .title {
        margin-top: 0;
      }
      .icon {
        font-size: 5em;
      }
    `,
  ],
})
export class GameOverCmp {
  data = inject<GameOverData>(DIALOG_DATA, { optional: true });
  dialog = inject(DialogRef<GameOverResult>);
}
