import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [RouterLink],
  template: `
    <a routerLink="select-mode"><h1>Play</h1></a>
    <a routerLink="select-mode"><h1>Settings</h1></a>
  `,
  styles: [
    `
      :host {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    `,
  ],
})
export class MainMenuCmp {}
