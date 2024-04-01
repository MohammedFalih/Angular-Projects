import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrl: './todo-app.component.css'
})
export class TodoAppComponent implements OnInit {
  ngOnInit() {
    
    const storedTasks = localStorage.getItem('myTasks');
    if (storedTasks) {
      this.taskList = JSON.parse(storedTasks);
    }
  }
  title: string = 'To-Do List';
  taskList: string[] = [];
}
