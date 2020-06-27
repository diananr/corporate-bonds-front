import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsModule as AuthViewsModule } from './views/views.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthViewsModule
  ]
})
export class AuthModule { }
