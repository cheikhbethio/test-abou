import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DisplayComponent } from './display-counter/display/display.component';
import { CounterComponent } from './display-counter/counter/counter.component';
import { VoterComponent } from './vote-display/vote/vote.component';
import { DisplayerComponent } from './vote-display/displayer/displayer.component';
import { TestComponent } from './display-message/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    CounterComponent,
    VoterComponent,
    DisplayerComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
