import { Component } from '@angular/core';

@Component({
  selector: 'mt-practice-list',
  template: `
  <mat-accordion >
    <mat-expansion-panel (opened)="panelOpenState = true"
                       (closed)="panelOpenState = false">
      <mat-expansion-panel-header  class="active-day">
        <mat-panel-title >
          Self aware panel
        </mat-panel-title>
        <mat-panel-description>
          Currently I am {{panelOpenState ? 'open' : 'closed'}}
        </mat-panel-description>
      </mat-expansion-panel-header>
      <p>I'm visible because I am open</p>
    </mat-expansion-panel>
  </mat-accordion>

  `,
  styles: [`
    .mat-form-field + .mat-form-field {
      margin-left: 8px;
    }
    .active-day {
      background: #FF0000 !important;
    }
    `

    
  ]
})
export class PracticeListComponent {
  panelOpenState = false;
}
