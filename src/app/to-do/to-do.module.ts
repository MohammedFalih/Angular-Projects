import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './components/todo/todo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';
import { TodoAppComponent } from './components/todo-app/todo-app.component';

@NgModule({
  declarations: [
    TodoComponent,
    TodoListComponent,
    TodoAppComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ], 
  exports: [
    TodoComponent, 
    TodoListComponent,
    TodoAppComponent
  ]
})
export class ToDoModule { }
