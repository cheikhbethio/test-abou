import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'counter-component',
  template: `
     <input id="intervalInput" [(ngModel)]="intervalInput" />
     <button id="intervalSetButton" (click)="tiggerTick()">Déclencher</button>
  `,
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit, OnDestroy {
  @Input() message: string = '';
  @Output() tick: EventEmitter<string> = new EventEmitter();

  intervalId!: unknown;

  intervalInput: number = 0;

  constructor() { }
  ngOnDestroy(): void {
    this.clearInterval();
  }

  ngOnInit(): void {
  }

  tiggerTick() {
    this.clearInterval();
    this.intervalId = setInterval(() => {
      this.tick.emit(this.message);
    }, this.intervalInput) as unknown;
  }

  clearInterval() {
    if (this.intervalId) {
      clearInterval(this.intervalId as number);
    }
  }

}
