import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoAppComponent } from './to-do/components/todo-app/todo-app.component';
import { ShoppingAppComponent } from './shopping-app/shopping-app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { WeatherAppComponent } from './weather-app/weather-app.component';
import { AuthFormComponent } from './authentication/auth-form.component';
import { CartComponent } from './shopping-app/components/cart/cart.component';
import { RegisterComponent } from './authentication/register/register.component';
import { ProductsComponent } from './shopping-app/components/products/products.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'todo', component: TodoAppComponent },
  {
    path: 'shopping', component: ShoppingAppComponent,
    children: [
      { path: 'cart', component: CartComponent },
      { path: 'product', component: ProductsComponent }
    ]
  },
  { path: 'weather', component: WeatherAppComponent },
  {
    path: 'auth', component: AuthFormComponent, children: [
      { path: 'register', component: RegisterComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
