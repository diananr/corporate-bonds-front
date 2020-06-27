import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ServiceModule } from './services/service.module';
import { GuardsModule } from './guards/guards.module';
import { UtilsModule } from './utils/utils.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    ServiceModule,
    GuardsModule,
    UtilsModule
  ]
})
export class CoreModule { }
