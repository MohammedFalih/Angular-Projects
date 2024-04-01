import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  @Input('tasks') taskList: string[] = [];

  removeTodo(id: number) {
    this.taskList.splice(id, 1);
    localStorage.setItem('myTasks', JSON.stringify(this.taskList))
  }

  clear() {
    this.taskList = [];
    localStorage.setItem('myTasks', JSON.stringify(this.taskList))
  }
}