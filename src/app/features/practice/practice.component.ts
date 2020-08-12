import { Component } from '@angular/core';
import { mtCalendar, PracticeSession } from '../../shared/mt-interfaces';

@Component({
  selector: 'mt-practice',
  template: `
  <mt-practice-header></mt-practice-header>
  <mt-practice-list></mt-practice-list>
  `
})
export class PracticeComponent
{
  todayDate: string;
  totalMinutes: number;

  todayDateNum: number;
  startOfWeek: number;
  endOfWeek: number;

  practiceSession: PracticeSession;
  
  constructor()
  {
    let tmp = new Date();
    let dayAsNum = tmp.getFullYear() + ('0' + (tmp.getMonth()+1)).slice(-2) + ('0' + tmp.getDate()).slice(-2);

    this.todayDateNum = Number.parseInt(dayAsNum);
    this.todayDate = mtCalendar.daysOfWeek[tmp.getDay()] + ',  ' + ('0' + tmp.getDate()).slice(-2) + mtCalendar.monthsOfYear[tmp.getMonth()] + '  ' + tmp.getFullYear();

    let cal = new mtCalendar();

    let start = cal.getStartOfWeek();
    console.log("startweek: ", start);
    let next = new Date(start.setDate(start.getDate() + 1) );
    console.log("next: ", next);

    console.log("getThisWeekArray: ", cal.getThisWeekArray());
  }
}
