import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoAppComponent } from './to-do/components/todo-app/todo-app.component';
import { ShoppingAppComponent } from './shopping-app/shopping-app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CartComponent } from './shopping-app/components/cart/cart.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'todo', component: TodoAppComponent },
  { path: 'shopping', component: ShoppingAppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
