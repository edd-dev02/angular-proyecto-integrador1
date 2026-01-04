import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TaskListModule } from './tasklist/tasklist.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SessionCounterModule } from './sessioncounter/sessioncounter.module';
import { StatsModule } from './stats/stats.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SessionCounterModule,
    TaskListModule,
    StatsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
