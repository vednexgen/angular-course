# Angular Directives

## What are Directives?

Directives in Angular are special instructions in the DOM that tell Angular to modify the structure or behavior of HTML elements. There are three main types:

1. **Structural Directives:** Change the DOM structure (e.g., `@if`, `@for`, `@switchCase`).
2. **Attribute Directives:** Change the appearance or behavior of an element (e.g., `[ngClass]`, `[ngStyle]`).
3. **Custom Directives:** User-defined behavior to extend HTML functionality.

---

## 1. Structural Directives

### @for Directive

Used to loop through arrays.

```html
<ul>
  @for (task of tasks; track task.name) {
  <li> 
    <img [src]="taskImageUrl" alt="Task Image" class="task-icon" /> 
    <span> {{ task.name }} :: </span> 
  </li>
  }
```

```ts
tasks = [
    { name: 'Learn Angular', completed: true },
    { name: 'Build Task App', completed: true },
    { name: 'Review Code', completed: false },
  ];
```

Additional Changes:

```html
<input [(ngModel)]="newTask.name" placeholder="Enter new task" />
```

```typescript
newTask = { name: '', completed: false }; 

onAddTask() {
console.log('Add Task button clicked!');
if (this.newTask) {
    console.log('Adding Task to list!');
    this.tasks.push(this.newTask);
    this.newTask =  { name: '', completed: false };
}
}
```

### @if Directive

Used to conditionally render elements.

```html
@if (task.completed) {
    <span> Completed..</span>
} @else {
    <span> Pending..</span>
}
```

### @switchCase Directive

Used for multiple conditional rendering (like `switch-case`).

```html
<div @switch="status">
  <div @case="'loading'">Loading...</div>
  <div @case="'success'">Data loaded successfully!</div>
  <div @case="'error'">An error occurred.</div>
  <div @default>Unknown status.</div>
</div>
```

```ts
status = 'loading';
```

---

## 2. Attribute Directives

### [ngClass]

Dynamically apply CSS classes.

```html
<span [ngClass]="{ completed: task.completed, pending: !task.completed }">
  {{ task.name }}
</span>
```

### [ngStyle]

Dynamically apply inline styles.

```html
<span [ngStyle]="{ color: task.completed ? 'green' : 'red' }">
  {{ task.name }}
</span>
```

```css
// CSS classes
.completed {
  text-decoration: line-through;
}

.pending {
  font-weight: bold;
}
```

---

## 3. Creating a Custom Directive

Custom directives allow us to encapsulate behavior.

```ts
import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class Highlight {
  color: string | undefined;
  @Input('appHighlight') appHighlightFlag!: string | 'false';

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    if(this.appHighlightFlag === 'true') {
      this.color = "lightgreen"
    } else {
      this.color = "yellow"
    }
    this.renderer.setStyle(this.el.nativeElement, 'background-color', this.color);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeStyle(this.el.nativeElement, 'background-color');
  }
}

```

```html
<ul>
  @for (task of tasks; track task.name) {
  <li > 
    <img [src]="taskImageUrl" alt="Task Image" class="task-icon" /> 
    <span appHighlight="{{task.completed}}" 
      [ngClass]="{ completed: task.completed, pending: !task.completed }" 
      [ngStyle]="{ color: task.completed ? 'green' : 'red' }" > 
      {{ task.name }} :: 
    </span> 
    @if (task.completed) {
      <span> Completed..</span>
    } @else {
      <span> Pending..</span>
    }
    <button (click)="task.completed = true"> Mark Completed</button>
    <button (click)="task.completed = false"> Mark Pending</button>
  </li>
  }
</ul>
```

---

**Summary:**

* Use `@if`, `@for`, `@switchCase` for DOM manipulation.
* Use `[ngClass]` and `[ngStyle]` for styling based on conditions.
* Custom directives allow reusable DOM behavior.
* Combine these to make interactive applications like task lists.

---
