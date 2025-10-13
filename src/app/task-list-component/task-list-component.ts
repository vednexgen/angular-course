import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list-component',
  imports: [],
  templateUrl: './task-list-component.html',
  styleUrl: './task-list-component.css'
})
export class TaskListComponent {
  tasks = ['Learn Angular', 'Build Task App', 'Review Code'];
}
