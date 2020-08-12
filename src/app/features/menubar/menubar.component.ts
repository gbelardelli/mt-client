import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-menubar',
  template: `
      <mat-toolbar color="primary">
        <button mat-icon-button [matMenuTriggerFor]="menu" aria-label="Example icon-button with a menu">
          <mat-icon>menu</mat-icon>
        </button>
        <mat-menu #menu="matMenu">
          <button mat-menu-item>
            <mat-icon>speaker</mat-icon>
            <span>Redial</span>
          </button>
          <button mat-menu-item disabled>
            <mat-icon>voicemail</mat-icon>
            <span>Check voice mail</span>
          </button>
          <button mat-menu-item>
            <mat-icon>notifications_off</mat-icon>
            <span>Disable alerts</span>
          </button>
        </mat-menu>

        <span>Music Trainer</span>
        <span class="example-spacer"></span>
        <button mat-icon-button class="example-icon favorite-icon" aria-label="Example icon-button with heart icon">
          <mat-icon>favorite</mat-icon>
        </button>
        <button mat-icon-button class="example-icon" aria-label="Example icon-button with share icon">
          <mat-icon>share</mat-icon>
        </button>
      </mat-toolbar>
  `,
  styles: [`.example-spacer {
    flex: 1 1 auto;
  }`]
})
export class MenubarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
