import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsModule as DashboardViewsModule } from './views/views.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DashboardViewsModule
  ]
})
export class DashboardModule { }
