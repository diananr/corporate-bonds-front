import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { SaleListViewComponent } from './sale-list-view/sale-list-view.component';
import { EditSaleViewComponent } from './edit-sale-view/edit-sale-view.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    SaleListViewComponent,
    EditSaleViewComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    ViewsRoutingModule
  ]
})
export class ViewsModule { }
