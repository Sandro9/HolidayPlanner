import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, HostListener, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalComponent implements OnInit, OnDestroy {
  @Output()
  onPreCloseModal: EventEmitter<void> = new EventEmitter();

  @Output()
  oncloseModal: EventEmitter<void> = new EventEmitter();

  @ViewChild('bg') bg !: ElementRef;
  @ViewChild('container') container !: ElementRef;

  public ngOnInit(): void {
    document.body.style.top = `-${window.scrollY}px`;
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
  }

  public onBackdropClick(event: Event) {
    if(event.target !== this.bg.nativeElement) return;
    this.closeModal();
  }

  public closeModal() {  
    this.onPreCloseModal.next();
    this.container.nativeElement.classList.add('scaleOut');
    setTimeout(() => {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
      this.oncloseModal.next();
    }, 380)
  }

  public ngOnDestroy(): void {
  }

  
}
