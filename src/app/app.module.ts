import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TaskListModule } from './tasklist/tasklist.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SessionCounterModule } from './sessioncounter/sessioncounter.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SessionCounterModule,
    TaskListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
