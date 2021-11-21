import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'display-component',
  template: `
    <counter-component 
      [message]="'Hello world'" 
      (tick)=counterTick($event)>
    </counter-component>
    <div>{{message}} {{counter}}</div>
  `
})
export class DisplayComponent {
  public counter: number = 0;
  public message: string = '';

  public counterTick(message: string): void {
    this.message = message;
    this.counter++;
  }
}