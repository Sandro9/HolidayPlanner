import { ChangeDetectionStrategy, Component, TemplateRef, ViewContainerRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-dialog.component.html',
  styleUrls: ['./event-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventDialogComponent {
  public templateRef = inject(ViewContainerRef);
}
