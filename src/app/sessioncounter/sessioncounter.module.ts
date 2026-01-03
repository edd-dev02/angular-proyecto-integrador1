import { NgModule } from '@angular/core';

import { SessioncounterComponent } from './sessioncounter/sessioncounter.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    SessioncounterComponent
  ],
  declarations: [
    SessioncounterComponent
  ],
  providers: [],
})
export class SessionCounterModule { }
