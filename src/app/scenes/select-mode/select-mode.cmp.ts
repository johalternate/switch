import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GameModeInfo } from 'src/app/core/interfaces/game-mode-info';

@Component({
  selector: 'app-select-mode',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="options">
      @for (mode of modes(); track mode.url) {
      <a [routerLink]="mode.url">
        <h1>
          <span>{{ mode.label }}</span>
          @if (mode.flags?.['experimental']) {
          <span class="material-symbols-outlined">science</span>
          } @if (mode.flags?.['locked']) {
          <span class="material-symbols-outlined">lock</span>
          }
        </h1>
      </a>
      }
    </div>
  `,
})
export class SelectModeCmp {
  modes = signal<GameModeInfo[]>([{ label: 'Classic', url: '/classic' }]);
}
