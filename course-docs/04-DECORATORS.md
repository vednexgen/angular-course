# Angular Decorators Tutorial

Decorators in Angular are **special TypeScript functions** that allow you to **attach metadata to classes, properties, methods, or parameters**. They tell Angular how to process and use those classes or properties. Decorators are a key part of how Angular works with components, directives, services, and data binding.

---

## 1. Why Use Decorators?

* To define a class as a **component**, **directive**, or **service**.
* To mark **properties** for data binding (`@Input`) or events (`@Output`).
* To provide metadata that Angular can read at runtime.

---

## 2. Common Angular Decorators

| Decorator     | Usage                                                                   |
| ------------- | ----------------------------------------------------------------------- |
| `@Component`  | Defines a class as a component with template, styles, and selector      |
| `@Directive`  | Defines a class as a directive                                          |
| `@Injectable` | Marks a class as injectable for dependency injection                    |
| `@Input`      | Marks a property to receive data from a parent component                |
| `@Output`     | Marks a property as an event emitter to send data to a parent component |

---

## 3. Example: Component with Decorators

```ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

interface Task {
  id: number;
  name: string;
  completed: boolean;
}

@Component({
  selector: 'app-task',
  template: `
    <p>{{ task.name }} - {{ task.completed ? 'Done' : 'Pending' }}</p>
    <button (click)="toggleStatus()">Toggle Status</button>
  `
})
export class TaskComponent {
  @Input() task!: Task; // receives data from parent
  @Output() statusChanged = new EventEmitter<Task>(); // emits event to parent

  toggleStatus() {
    this.task.completed = !this.task.completed;
    this.statusChanged.emit(this.task);
  }
}
```

### Explanation:

* `@Component` – defines the class as a component with a template.
* `@Input` – allows `task` to receive data from a parent component.
* `@Output` – allows the component to emit events to the parent component.

---

## 4. Other Decorator Uses

* `@Directive` – attach behavior to elements.
* `@Injectable` – make services injectable across the app.
* `@HostListener` – listen to events on host elements.
* `@HostBinding` – bind properties on the host element.

---

**Summary:**

* Decorators attach metadata to Angular classes and properties.
* They define components, directives, services, inputs, outputs, and host behavior.
* Understanding decorators is essential to mastering Angular's reactive and component-based architecture.
