import { Component } from '@angular/core';


@Component({
  selector:'display-vote-component',
  template: `
  <voter-component 
    [question]="question" 
    [yesAnswer]="yesAnswer" 
    [noAnswer]="noAnswer"
    (output)="displayReponse($event)">
  </voter-component>

  <ng-container *ngIf="hasResponse">
    <div id="lastVote" *ngIf="response">{{yesAnswer}}</div>
    <div id="lastVote" *ngIf="!response">{{noAnswer}}</div>
  </ng-container>
  `
})
export class DisplayerComponent {
  public question = "Too easy?"
  public yesAnswer = "Yes";
  public noAnswer = "No";
  hasResponse: undefined | boolean;
  response: undefined | boolean;

  displayReponse($event: boolean): void {
    console.log('DisplayerComponent ~ displayReponse ~ $event', $event);
    this.hasResponse = true;
    this.response = $event;
  }
}
