import { Component, inject } from '@angular/core';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { PauseResult } from '../../interfaces/pause-result';
import { PauseData } from '../../interfaces/pause-data';

@Component({
  selector: 'app-pause',
  standalone: true,
  imports: [],
  template: `
    <div style="text-align: center;">
      <a role="button" (click)="dialog.close()"><h4>Resume</h4></a>
      <a role="button" (click)="dialog.close({ navigateTo: '/main-menu' })"
        ><h4>Main Menu</h4></a
      >
    </div>
  `,
  styles: [],
})
export class PauseCmp {
  readonly data = inject<PauseData>(DIALOG_DATA);
  readonly dialog = inject(DialogRef<PauseResult>);
}
