import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialListViewComponent } from './material-list-view/material-list-view.component';

const routes: Routes = [
  {
    path: '',
    component: MaterialListViewComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
