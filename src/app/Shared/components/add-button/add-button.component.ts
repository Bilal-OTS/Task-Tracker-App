import { Component, OnInit, Input, Output, EventEmitter, ElementRef, HostListener  } from '@angular/core';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.css'],
})
export class AddButtonComponent implements OnInit {
  @Input()
  text: string | undefined;
  @Input() color: string | undefined;
  @Output() btnClick = new EventEmitter();

  constructor(
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {}

  isPressed: boolean = false;

  onClick() {
    this.btnClick.emit();
  }

  @HostListener('mousedown', ['$event.target'])
  onMouseDown(target: HTMLElement) {
    if (target.classList.contains('btn')) {
      target.classList.add('pressed');
    }
  }

  @HostListener('mouseup', ['$event.target'])
  onMouseUp(target: HTMLElement) {
    if (target.classList.contains('btn')) {
      target.classList.remove('pressed');
    }
  }

}
