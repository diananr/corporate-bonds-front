import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent,
    children: [
      {
        path: '', redirectTo: 'calculator', pathMatch: 'full'
      },
      {
        path: 'calculator',
        loadChildren:() => import('src/app/admin/materials/materials.module').then(m => m.MaterialsModule)
      },
      {
        path: 'bonds',
        loadChildren:() => import('src/app/admin/sales/sales.module').then(m => m.SalesModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
