import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsComponent } from './views.component';
import { ViewsRoutingModule } from './views-routing.module';
import { SignupViewComponent } from './signup-view/signup-view.component';
import { LoginViewComponent } from './login-view/login-view.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    SignupViewComponent,
    LoginViewComponent,
    ViewsComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    CoreModule
  ]
})
export class ViewsModule { }
