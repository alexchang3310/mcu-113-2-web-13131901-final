import { Routes } from '@angular/router';
import { ShoppingCarComponent } from './shopping-car/shopping-car.component';
import { ProductDetailPageComponent } from './product-detail-page/product-detail-page.component';
import { ProductFormPageComponent } from './product-form-page/product-form-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { productResolver } from './resolver/product.resolver';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'products' },
  { path: 'products', component: ProductPageComponent },
  { path: 'product/new', component: ProductFormPageComponent },
  { path: 'product/view/:id', component: ProductDetailPageComponent, resolve: { product: productResolver } },
  { path: 'product/form/:id', component: ProductFormPageComponent, resolve: { product: productResolver } },
  { path: 'login', component: ShoppingCarComponent },
];
