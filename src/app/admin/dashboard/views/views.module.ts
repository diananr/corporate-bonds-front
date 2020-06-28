import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../../core/core.module';

import { ViewsRoutingModule } from './views-routing.module';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';


@NgModule({
  declarations: [
    DashboardViewComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    CoreModule
  ]
})
export class ViewsModule { }
