import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingAppComponent } from './shopping-app.component';
import { HeaderComponent } from './components/header/header.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ShoppingAppComponent,
    HeaderComponent,
    CartComponent,
    ProductsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      // { path: 'shopping', component: ShoppingAppComponent },
      { path: 'cart', component: CartComponent }
    ])
  ],
  exports: [
    HeaderComponent,
    ShoppingAppComponent,
    CartComponent,
    ProductsComponent
  ]
})
export class ShoppingAppModule { }
