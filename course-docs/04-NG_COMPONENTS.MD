# Components Deep Dive

## 🧩 What is a Component?

A **Component** is the building block of any Angular application. It controls a section of the user interface and contains three main parts:

1. **TypeScript File (`.ts`)** – contains logic and data.
2. **HTML File (`.html`)** – defines the structure and view.
3. **CSS File (`.css` or `.scss`)** – defines the styling.

Example structure:

```
task-list/
│
├── task-list.component.ts      # Component logic
├── task-list.component.html    # Template (UI)
├── task-list.component.css     # Styles
└── task-list.component.spec.ts # Unit test file
```

---

## 🏗️ Create Your First Custom Component

Use the Angular CLI command to generate a component:

```bash
ng generate component task-list
# or short form
ng g c task-list
```

This will automatically:

* Create the above 4 files.
* Declare the component inside the app configuration.
* Register the selector in the app.

---

## 🧠 Understanding Component Parts

### 1. **TypeScript (Logic)**

```typescript
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
```

### 2. **HTML (Template)**

```html
<h2>📝 Task List</h2>
<ul>
  @for (task of tasks; track task) {
    <li>{{ task }}</li>
  }
</ul>
```

### 3. **CSS (Styling)**

```css
h2 {
  color: #3f51b5;
}

li {
  list-style: none;
  background: #f2f2f2;
  margin: 6px 0;
  padding: 8px;
  border-radius: 6px;
}
```

---

## 🧩 Add Task List Component to App Template and App Component

Now display this new component inside `app.html`:

```html
<h1>Welcome to Angular Course App 🚀</h1>
<app-task-list-component></app-task-list-component>
```

Import the Component in App Component  
Open your app/app.ts file and make sure it looks like this:

```typescript
import { Component } from '@angular/core';
import { TaskListComponent } from './task-list/task-list';

@Component({
  selector: 'app-root',
  imports: [TaskListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = 'angular-course';
}
```

Run the app:

```bash
ng serve
```

You should now see your task list displayed below the title.

---

## 💡 Instructor Notes

* Explain how Angular’s **selector** acts like a custom HTML tag.
* Show students that the component automatically updates when modifying its `tasks` array.
* Demonstrate how Angular’s live reload works with `ng serve`.
