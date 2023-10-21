import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="options">
      <a routerLink="/select-mode"><h1>Play</h1></a>
      <a routerLink="/settings"><h1>Settings</h1></a>
    </div>
  `,
})
export class MainMenuCmp {}
