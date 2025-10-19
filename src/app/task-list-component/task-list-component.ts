import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-list-component.html',
  styleUrl: './task-list-component.css'
})
export class TaskListComponent {
  
  tasks = ['Learn Angular', 'Build Task App', 'Review Code'];
  taskImageUrl = "assets/task-icon.png";
  newTask = ''; // initialize property

  onAddTask() {
    console.log('Add Task button clicked!');
    if (this.newTask.trim()) {
      console.log('Adding Task to list!');
      this.tasks.push(this.newTask);
      this.newTask = '';
    }
  }

}
