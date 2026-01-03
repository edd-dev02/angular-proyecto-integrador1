import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    SessionCounterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
