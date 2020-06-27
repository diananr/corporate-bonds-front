import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule as AppSharedModule } from 'src/app/shared/shared.module';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';

@NgModule({
  declarations: [
    LoginFormComponent,
    SignupFormComponent
  ],
  imports: [
    CommonModule,
    AppSharedModule
  ],
  exports: [
    LoginFormComponent,
    SignupFormComponent
  ]
})
export class CoreModule { }
