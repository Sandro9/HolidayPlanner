import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, ComponentRef, DestroyRef, HostListener, Injector, OnInit, ViewChild, ViewContainerRef, ViewRef, WritableSignal, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CallendarCell } from 'src/domain/calendar/domain/models/calendar-cell.model';
import { CalendarService } from 'src/domain/calendar/domain/services/calendar.service';
import { CalendarTableCellComponent } from 'src/domain/calendar/ui/calendar-table-cell/calendar-table-cell.component';
import { CalendarHeadCellComponent } from 'src/domain/calendar/ui/calendar-head-cell/calendar-head-cell.component';
import { CalendarTableComponent } from 'src/domain/calendar/ui/calendar-table/calendar-table.component';
import { ModalComponent } from 'src/domain/modal/ui/modal/modal.component';
import { take } from 'rxjs';
import { EventDialogComponent } from 'src/domain/calendar/feature/event-dialog/event-dialog.component';
import { ModalInjectorService } from 'src/domain/modal/services/modal-injector.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    CalendarTableCellComponent,
    CalendarHeadCellComponent,
    CalendarTableComponent,
    ReactiveFormsModule,
    NgFor,
    ModalComponent,
    EventDialogComponent
  ],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  private formBuilder = inject(FormBuilder);
  private calendarService = inject(CalendarService);
  private modalInjector = inject(ModalInjectorService);

  private currentDate = new Date();

  public form = this.formBuilder.group({
    year: this.formBuilder.control(""),
    month: this.formBuilder.control("")
  });

  public monthNames = this.calendarService.getMonthNameArray();
  public calendarCells: WritableSignal<CallendarCell[]> = signal([]);

  private ref: ViewContainerRef = inject(ViewContainerRef);
  
  public ngOnInit(): void {
    this.form.valueChanges.pipe(
    ).subscribe((formData) => {
      this.calendarCells.set(this.calendarService.generateCalendarCells(parseInt(formData.month ?? "0"), parseInt(formData.year ?? "2023")));
    });
    
    this.form.setValue({
      year: `${this.currentDate.getFullYear()}`,
      month: `${this.currentDate.getMonth()}`
    })
  }

  public onCallendarCellClick(cell: CallendarCell) {
    console.log("wow", cell);
    this.modalInjector.createEmbeddedView(this.ref,EventDialogComponent)
  }
}
