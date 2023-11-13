import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:"", loadChildren: ()=> import('./home/home-routing.module').then(m=> m.HomeRoutingModule)},
  {path:"about", loadChildren: ()=> import('./about/about-routing.module').then(m=> m.AboutRoutingModule)},
  {path:"profile", loadChildren: ()=> import('./profile/profile-routing.module').then(m=> m.ProfileRoutingModule), canActivate: [AuthGuard]},
  {path:"products", loadChildren: ()=> import('./products/products-routing.module').then(m=> m.ProductsRoutingModule), canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }