import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';


const routes: Routes = [
  {path: 'productManager', component: ProductManagerComponent},
  {path: 'Home', component: AppComponent},
  {path: 'ProductList', component: ProductListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
