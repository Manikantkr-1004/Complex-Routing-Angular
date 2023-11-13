import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductsDetailsComponent } from '../products-details/products-details.component';
import { ProductsListComponent } from '../products-list/products-list.component';
 
const routes: Routes = [
 { path: '', component: ProductsComponent, children: [
    {path:"products-details", component: ProductsDetailsComponent},
    {path:"products-list", component: ProductsListComponent}
 ] }
]; 
@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule]
}) 
export class ProductsRoutingModule { }