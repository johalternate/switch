import { Component, computed, effect, signal } from '@angular/core';
import { BoardCmp } from 'src/app/core/components/board/board.cmp';
import { board } from 'src/app/core/models/board';
import { Light } from 'src/app/core/models/light';

const rounds = 50;

@Component({
  selector: 'app-endless',
  standalone: true,
  imports: [BoardCmp],
  template: `
    <div class="container">
      <h4>Finished: {{ gamesFinished() }}</h4>
      <app-board [lights]="lights()" (toggle)="toggle($event)" />
    </div>
  `,
  styles: [
    `
      .container {
        height: 100%;
        padding: 1em;
        display: grid;
        grid-template-rows: 5em 1fr 5em;
        align-items: center;
        justify-items: center;
      }
    `,
  ],
})
export class EndlessCmp {
  readonly grid = signal(board(5, rounds));
  readonly lights = computed(() => this.grid().lights.flat());

  readonly gamesFinished = signal(0);

  gameOver = effect(
    () => {
      const finished = this.lights().every((light) => !light.on());
      if (!finished) return;

      this.gamesFinished.update((v) => v + 1);
      this.grid.set(board(5, rounds));
    },
    { allowSignalWrites: true }
  );

  toggle(light: Light) {
    light.toggle();
  }
}
