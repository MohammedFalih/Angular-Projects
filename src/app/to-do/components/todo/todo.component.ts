import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  @Input('tasks') tasks!: string[];
  newTask: string = '';

  constructor() {
    this.tasks = []
  }
  addTodo() {
    if(this.newTask.length !== 0) {
      this.tasks.unshift(this.newTask);
      localStorage.setItem('myTasks', JSON.stringify(this.tasks))
      this.newTask = '';
    } else {
      window.alert('Enter a Task')
    }
  }
}
