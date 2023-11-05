import { Injectable } from '@angular/core';
import { CallendarCell } from '../models/calendar-cell.model';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor() { }

  /**
   * 
   * @param month starting at zero!!!
   * @param year 
   * @returns 
   */
  public generateCalendarCells(month: number, year: number): any {
    let cells = [];

    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);

    // Calculate the starting day (Monday) of the calendar view
    let startDate = new Date(firstDayOfMonth);
    startDate.setDate(1 - firstDayOfMonth.getDay() + 1);

    // Calculate the ending day (Sunday) of the calendar view
    let endDate = new Date(lastDayOfMonth);

    // Generate calendar cells
    while (startDate <= endDate) {
      cells.push({
        monthNumber: startDate.getMonth(),
        dayNumber: startDate.getDate()
      });
      startDate.setDate(startDate.getDate() + 1);
    }

    // Fill in days from the next month if the last day is not Sunday
    while (this._convertWeekdayIndex(startDate.getDay()) !== 0) {
      cells.push({
        monthNumber: startDate.getMonth(),
        dayNumber: startDate.getDate()
      });
      startDate.setDate(startDate.getDate() + 1);
    }
    return cells;
  }

  /**
   * javascript weekDay starts at monday=1;... saturday=6;sunday = 0;
   * result monday = 0;... saturday=5;sunday = 6
   * @param weekdayNumber 
   */
  private _convertWeekdayIndex(weekdayNumber: number) {
    let convertedIndex = (weekdayNumber - 1) % 7;
    if (convertedIndex < 0) {
      convertedIndex = 6;
    }

    return convertedIndex;
  }

  /**
   * returns an array of Month-Name Strings
   */
  public getMonthNameArray() {
    return ['january', 'february', 'march', 'april', 'may', 'june',' july','august', 'september', 'october', 'november','december']
  }
}
