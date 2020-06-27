import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SaleListViewComponent } from './sale-list-view/sale-list-view.component';
import { EditSaleViewComponent } from './edit-sale-view/edit-sale-view.component';

const routes: Routes = [
  {
    path: '',
    component: SaleListViewComponent
  },
  {
    path: 'edit',
    component: EditSaleViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
