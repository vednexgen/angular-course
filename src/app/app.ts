import { Component } from '@angular/core';
import { TaskListComponent } from './task-list-component/task-list-component';

@Component({
  selector: 'app-root',
  imports: [TaskListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
