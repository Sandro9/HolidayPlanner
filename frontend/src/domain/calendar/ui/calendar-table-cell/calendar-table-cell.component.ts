import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calendar-table-cell',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar-table-cell.component.html',
  styleUrls: ['./calendar-table-cell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarTableCellComponent {
  @Output()
  onClick = new EventEmitter();

  @HostListener('click')
  click() {
    this.onClick.next(true);
  }
}
