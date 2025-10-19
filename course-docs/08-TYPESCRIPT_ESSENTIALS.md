# TypeScript Essentials for Angular

Angular is built with **TypeScript**, so understanding its essentials is crucial for writing effective Angular applications. This tutorial covers the basics.

---

## 1. TypeScript Basics

### Variables and Types

TypeScript is strongly typed, meaning variables can have a specific type.

```ts
let username: string = 'Vednexgen';
let age: number = 25;
let isLoggedIn: boolean = true;
let hobbies: string[] = ['Reading', 'Gaming'];

// Any type (avoid overusing)
let data: any = 'Hello';
data = 100;
```

---

### 2. Interfaces

Interfaces define the **shape of objects** and help with type checking.

```ts
interface Task {
  name: string;
  completed: boolean;
}

let task1: Task = {
  name: 'Learn Angular',
  completed: false
};
```

Interfaces are heavily used in Angular, for example:

* Defining `@Input()` or `@Output()` data types
* Typing HTTP response objects

---

### 3. Classes

TypeScript supports classes, constructors, and methods.

```ts
class User {
  constructor(public name: string, private age: number) {}

  greet(): string {
    return `Hello, my name is ${this.name}`;
  }
}

let user1 = new User('Vednexgen', 25);
console.log(user1.greet());
```

In Angular, **components, services, and directives** are all classes.

---

### 4. Arrow Functions

Arrow functions provide a concise way to define functions and automatically bind `this`.

```ts
let add = (a: number, b: number): number => a + b;
console.log(add(5, 3)); // 8

// Example in a component
const tasks = [
  { name: 'Read', completed: true },
  { name: 'Write', completed: false }
];

const completedTasks = tasks.filter(task => task.completed);
console.log(completedTasks);
```

---

## 5. How Angular Uses TypeScript

* **Components**: Class-based with typed properties and decorators.
* **Directives**: Use `@Input()`, `@Output()` with typed values.
* **Services**: Classes with typed methods for HTTP calls or logic.
* **Strong typing**: Helps prevent runtime errors and improves IntelliSense in IDEs.

Example Component:

```ts
import { Component, Input } from '@angular/core';

interface Task {
  name: string;
  completed: boolean;
}

@Component({
  selector: 'app-task',
  template: `
    <p>{{ task.name }} - {{ task.completed ? 'Done' : 'Pending' }}</p>
  `
})
export class TaskComponent {
  @Input() task!: Task; // Strongly typed input
}
```

Angular heavily relies on TypeScript for:

* Type safety
* IDE auto-completion
* Modern JavaScript features like classes, modules, and arrow functions

---

**Summary:**

* Use TypeScript types (`string`, `number`, `boolean`, etc.)
* Define object shapes using interfaces
* Create reusable classes for components/services
* Use arrow functions for concise code
* Angular uses TypeScript everywhere, making strong typing and modern JavaScript features essential
