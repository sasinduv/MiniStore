import { Routes } from '@angular/router';
import {ProductList} from './product-list/product-list';
import {Cart} from './cart/cart';
import {ProductDetails} from './product-details/product-details';

export const routes: Routes = [
  {path:'',redirectTo:'products',pathMatch:'full'},
  {path:'products',component:ProductList},
  {path:'products/:id',component:ProductDetails},
  {path:'cart',component:Cart}
];
