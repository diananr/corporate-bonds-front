import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule as AppSharedModule } from 'src/app/shared/shared.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    AppSharedModule
  ],
  exports:[
    AppSharedModule,
    SidebarComponent,
  ]
})
export class SharedModule { }
