import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './components/hero/hero.component';
import { SharedModule as AppSharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    HeroComponent,
  ],
  imports: [
    CommonModule,
    AppSharedModule
  ],
  exports:[
    HeroComponent,
  ]
})
export class CoreModule { }
