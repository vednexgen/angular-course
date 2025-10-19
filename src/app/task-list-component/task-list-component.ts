import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Highlight } from '../directive/highlight';

@Component({
  selector: 'app-task-list-component',
  standalone: true,
  imports: [FormsModule, NgClass, NgStyle, Highlight],
  templateUrl: './task-list-component.html',
  styleUrl: './task-list-component.css'
})
export class TaskListComponent {
  
  // tasks = ['Learn Angular', 'Build Task App', 'Review Code'];
  tasks = [
    { name: 'Learn Angular', completed: true },
    { name: 'Build Task App', completed: true },
    { name: 'Review Code', completed: false },
  ];
  taskImageUrl = "assets/task-icon.png";
  newTask = { name: '', completed: false };

  onAddTask() {
    console.log('Add Task button clicked!');
    if (this.newTask.name.trim()) {
      console.log('Adding Task to list!');
      this.tasks.push(this.newTask);
      this.newTask =  { name: '', completed: false };
    }
  }

}
