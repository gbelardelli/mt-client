import { Component } from '@angular/core';

@Component({
  selector: 'mt-practice-header',
  template: `
  <mat-card>
    <mat-card-header>
      <mat-card-title>{{nowDate}}</mat-card-title>
      <mat-card-subtitle>
        <div class="valign-center">
          &nbsp;&nbsp;
          <i class="material-icons">access_time</i>  
          <span>&nbsp;&nbsp;TOTALE:&nbsp;{{total}}&nbsp;MINUTI</span>
        </div>
      </mat-card-subtitle>
    </mat-card-header>
  </mat-card>
  `,
  styles: [`.valign-center {
    display: inline-flex;
    vertical-align: middle;
    align-items: center;
  }`]
})
export class PracticeHeaderComponent {
  nowDate: string;
  total: number;
  days = ['Domenica','Lunedì','Martedì','Mercoledì','Giovedì','Venerdì','Sabato'];
  months = ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];

  constructor()
  {
    let tmp = new Date();
    this.nowDate = this.days[tmp.getDay()] + ',  ' + ('0' + tmp.getDate()).slice(-2) + this.months[tmp.getMonth()] + '  ' + tmp.getFullYear();
    this.total = 35;
  }
}
