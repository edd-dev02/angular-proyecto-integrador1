import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatsComponent } from './stats/stats.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    StatsComponent
  ],
  declarations: [StatsComponent],
  providers: [

  ],
})
export class StatsModule { }
