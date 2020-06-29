import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule as AdminSharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AdminSharedModule
  ],
  exports: [
    AdminSharedModule,
  ]
})
export class CoreModule { }
