import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasklistComponent } from './tasklist/tasklist.component';

@NgModule({
  imports: [CommonModule],
  exports: [TasklistComponent],
  declarations: [TasklistComponent],
  providers: [],
})
export class TaskListModule { }
