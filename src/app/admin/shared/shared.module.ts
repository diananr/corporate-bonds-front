import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule as AppSharedModule } from 'src/app/shared/shared.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BondFormComponent } from './components/bond-form/bond-form.component';

@NgModule({
  declarations: [
    SidebarComponent,
    BondFormComponent,
  ],
  imports: [
    CommonModule,
    AppSharedModule
  ],
  exports:[
    AppSharedModule,
    SidebarComponent,
    BondFormComponent
  ]
})
export class SharedModule { }
