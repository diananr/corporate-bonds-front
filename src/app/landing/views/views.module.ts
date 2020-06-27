import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsComponent } from './views.component';
import { ViewsRoutingModule } from './views-routing.module';
import { LandingViewComponent } from './landing-view/landing-view.component';
import { CoreModule as LandingCoreModule } from '../core/core.module';
import { SharedModule as LandingSharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ViewsComponent,
    LandingViewComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    LandingCoreModule,
    LandingSharedModule
  ]
})
export class ViewsModule { }
