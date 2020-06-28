import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent,
    children: [
      {
        path: '', redirectTo: 'dashboard', pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren:() => import('src/app/admin/dashboard/dashboard.module').then(m => m.DashboardModule)
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
