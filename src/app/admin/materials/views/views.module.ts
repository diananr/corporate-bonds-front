import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { MaterialListViewComponent } from './material-list-view/material-list-view.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    MaterialListViewComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    CoreModule
  ]
})
export class ViewsModule { }
