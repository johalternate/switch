import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Light } from '../../models/light';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [],
  template: `
    <div class="grid">
      @for (light of lights; track 0) {
      <button (click)="toggle.emit(light)" [class.on]="light.on()"></button>
      }
    </div>
  `,
  styles: [
    `
      .grid {
        display: grid;
        grid-template-columns: repeat(5, 3em);
        grid-template-rows: repeat(5, 3em);
        gap: 0.25em;
      }

      button {
        width: 100%;
        height: 100%;
        background-color: transparent;
      }

      .on {
        background-color: var(--accent);
      }
    `,
  ],
})
export class BoardCmp {
  @Input({ required: true }) lights!: Light[];
  @Output() toggle = new EventEmitter<Light>();
}
