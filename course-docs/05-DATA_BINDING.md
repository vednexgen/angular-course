# Data Binding in Angular

In this topic, we'll explore **Data Binding** in Angular, which connects the application's data and the user interface. Angular offers several ways to bind data between the component class (TypeScript) and the template (HTML).

---

## 🔍 Types of Data Binding

### 1. **Interpolation (One-Way: Component → Template)**

Used to display component data in the view.

```html
<h1>Welcome to {{ title }} 🚀</h1>
```

```typescript
export class App {
  title = "Task Management Applicaiton"
}
```

✅ Anything inside `{{ }}` is evaluated as an expression — the component’s property value is rendered in the DOM.

---

### 2. **Property Binding (One-Way: Component → DOM Property)**

Used when you want to bind a component property to an HTML element’s property.

```html
<img [src]="taskImageUrl" alt="Task Image" />
```

```typescript
export class TaskListComponent {
  taskImageUrl = 'assets/task-icon.png';
}
```

✅ The value of `taskImageUrl` updates the `src` attribute dynamically.

---

### 3. **Event Binding (One-Way: Template → Component)**

Used when you want to listen to user actions (like button clicks) and call component methods.

```html
<button (click)="onAddTask()">Add Task</button>
```

```typescript
export class TaskListComponent {
  onAddTask() {
    console.log('Add Task button clicked!');
  }
}
```

✅ `(click)` binds the button’s click event to the `onAddTask()` method in the component.

---

### 4. **Two-Way Data Binding (Template ↔ Component)**

Two-way binding allows synchronization between the component and the template. When the user updates the input, the component data updates too.

#### 👉 Using `[(ngModel)]`

Angular provides `ngModel` from the **FormsModule**.

#### Step 1️⃣: Import `FormsModule` in your component

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [FormsModule], // 👈 Import FormsModule
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  
  tasks = ['Learn Angular', 'Build Task Manager App'];
  taskImageUrl = "assets/task-icon.png";
  newTask = '';

  onAddTask() {
    console.log('Add Task button clicked!');
    if (this.newTask.trim()) {
      console.log('Adding Task to list!');
      this.tasks.push(this.newTask);
      this.newTask = '';
    }
  }
}
```

#### Step 2️⃣: Use `[(ngModel)]` in the template

```html
<h2>Task List</h2>

<input [(ngModel)]="newTask" placeholder="Enter new task" />
<button (click)="addTask()">Add Task</button>

<ul>
  @for (task of tasks; track task) {
    <li>{{ task }}</li>
  }
</ul>
```

✅ The `[(ngModel)]` directive binds `newTask` both ways — typing updates the property, and property changes update the input field.

---

## 🧠 Concept Summary

| Binding Type     | Direction            | Syntax                   | Example               |
| ---------------- | -------------------- | ------------------------ | --------------------- |
| Interpolation    | Component → Template | `{{ property }}`         | `{{ title }}`         |
| Property Binding | Component → Element  | `[property]="value"`     | `[src]="imgUrl"`      |
| Event Binding    | Template → Component | `(event)="handler()"`    | `(click)="onClick()"` |
| Two-Way Binding  | Both                 | `[(ngModel)]="property"` | `[(ngModel)]="task"`  |

---

## 🧩 Demo: Data Binding in Action

**Objective:** Display a task list and add new tasks interactively.

### task-list-component.html

```html
<h2>📝 Task List</h2>

<div>
  <input [(ngModel)]="newTask" placeholder="Enter new task" />
  <button (click)="onAddTask()"> Add New Task</button>
</div>

<ul>
  @for (task of tasks; track task) {
  <li><img [src]="taskImageUrl" alt="Task Image" class="task-icon" /> 
    <span> {{ task }} </span> 
  </li>
  }
  <button (click)="task.completed = true"> Mark Completed</button>
  <button (click)="task.completed = false"> Mark Pending</button>
</ul>
```

### task-list-component.ts

```typescript
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
```
---

