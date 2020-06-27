import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('src/app/landing/landing.module').then(m => m.LandingModule),
  },
  {
    path: 'auth',
    loadChildren:() => import('src/app/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'admin',
    loadChildren:() => import('src/app/admin/admin.module').then(m => m.AdminModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
