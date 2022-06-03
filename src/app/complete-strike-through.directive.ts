import { Directive, ElementRef, Input, OnChanges, OnInit, } from '@angular/core';

@Directive({
  selector: '[appCompleteStrikeThrough]',
  standalone: true
})
export class CompleteStrikeThroughDirective implements OnInit, OnChanges {

  @Input() appCompleteStrikeThrough: boolean = false;

  constructor(private el: ElementRef<HTMLDivElement>) {}

  ngOnInit(): void {
    if (this.appCompleteStrikeThrough) {
      this.el.nativeElement.style.textDecoration = 'line-through';
    }
  }

  ngOnChanges(): void {
    if (this.appCompleteStrikeThrough) {
      this.el.nativeElement.style.textDecoration = 'line-through';
    } else {
      this.el.nativeElement.style.textDecoration = 'none';
    }
  }
}
