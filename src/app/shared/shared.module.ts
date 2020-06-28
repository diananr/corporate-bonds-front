import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from './ng-zorro/ng-zorro.module';
import { LoadingComponent } from './components/loading/loading.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    LoadingComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroModule
  ],
  exports:[
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroModule,
    LoadingComponent,
    HeaderComponent,
  ]
})
export class SharedModule { }
