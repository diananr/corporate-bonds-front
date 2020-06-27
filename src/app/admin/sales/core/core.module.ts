import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule as AdminSharedModule } from '../../shared/shared.module';
import { SaleFormComponent } from './components/sale-form/sale-form.component';
import { SaleTableComponent } from './components/sale-table/sale-table.component';

@NgModule({
  declarations: [
    SaleFormComponent,
    SaleTableComponent
  ],
  imports: [
    CommonModule,
    AdminSharedModule
  ],
  exports: [
    SaleFormComponent,
    SaleTableComponent
  ]
})
export class CoreModule { }
