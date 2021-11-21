import { Component, Input } from '@angular/core';

@Component({
  selector:'test-component',
  template: `
  <div id="noData" *ngIf="!false"> {{messageNoData}}</div>
  <div id="dataList">
    <div *ngFor="let inp of inputDatas">
      <div [ngStyle]="{'color': getColor()}">
        {{inp}}
      </div>
    </div>

  </div>
  `,
})
export class TestComponent {
  messageNoData = 'No data';

  hasData = false;
  isPaire = false;
  inputDatas: string[] | undefined;
  @Input() set inputData (data: string[] | undefined) {
    if(data?.length) {
      this.inputDatas = data;
      this.hasData = Boolean(data.length);
      this.isPaire = data.length % 2 === 0;
    }else {
      this.inputDatas = undefined;
      this.hasData = false;
    }
    // this.class = this.isPaire ? 'green' : 'red';
  };


  constructor() {
  }

  getColor() {
    if (!this.inputDatas?.length) {
      return 'red';
    }
    return this.inputDatas.length % 2 === 0 ? 'green' : 'red';
  }

}
