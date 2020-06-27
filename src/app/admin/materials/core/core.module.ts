import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule as AdminSharedModule } from '../../shared/shared.module';
import { MaterialFormComponent } from './components/material-form/material-form.component';
import { MaterialTableComponent } from './components/material-table/material-table.component';

@NgModule({
  declarations: [
    MaterialFormComponent,
    MaterialTableComponent
  ],
  imports: [
    CommonModule,
    AdminSharedModule
  ],
  exports: [
    MaterialFormComponent,
    MaterialTableComponent
  ]
})
export class CoreModule { }
