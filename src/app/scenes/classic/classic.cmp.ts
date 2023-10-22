import { Component, computed, effect, inject, signal } from '@angular/core';
import { board } from 'src/app/core/models/board';
import { BoardCmp } from 'src/app/core/components/board/board.cmp';
import { Light } from 'src/app/core/models/light';
import { Dialog } from '@angular/cdk/dialog';
import { GameOverCmp } from 'src/app/core/components/game-over/game-over.cmp';
import { GameOverData } from 'src/app/core/interfaces/game-over-data';
import { GameOverResult } from 'src/app/core/interfaces/game-over-result';
import { ToolbarCmp } from 'src/app/core/components/toolbar/toolbar.cmp';
import { Router } from '@angular/router';

const rounds = 50;

@Component({
  selector: 'app-classic',
  standalone: true,
  imports: [BoardCmp, ToolbarCmp],
  template: `
    <div class="container">
      <app-toolbar />
      <app-board [lights]="lights()" (toggle)="toggle($event)" />
    </div>
  `,
  styles: [
    `
      .container {
        height: 100%;
        padding: 1em;
        display: grid;
        grid-template-rows: 3em 1fr 3em;
        align-items: center;
        justify-items: center;
      }
    `,
  ],
})
export class ClassicCmp {
  readonly dialog = inject(Dialog);
  readonly router = inject(Router);
  readonly grid = signal(board(5, rounds));
  readonly lights = computed(() => this.grid().lights.flat());

  gameOver = effect(() => {
    const finished = this.lights().every((light) => !light.on());
    if (!finished) return;

    const dialog = this.dialog.open<GameOverResult, GameOverData>(GameOverCmp, {
      data: { title: 'Victory!', titleIcon: 'trophy' },
      disableClose: true,
    });

    dialog.closed.subscribe((result) => {
      if (result?.playAgain) this.grid.set(board(5, rounds));
      if (result?.navigateTo) this.router.navigate([result.navigateTo]);
    });
  });

  toggle(light: Light) {
    light.toggle();
  }
}
