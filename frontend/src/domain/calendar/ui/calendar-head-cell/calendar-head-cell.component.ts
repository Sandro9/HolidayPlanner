import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calendar-head-cell',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar-head-cell.component.html',
  styleUrls: ['./calendar-head-cell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarHeadCellComponent {

}
