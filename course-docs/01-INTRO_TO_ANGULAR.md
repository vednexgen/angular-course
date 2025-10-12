# Introduction to Angular

## 🎯 Objective

Students will understand what Angular is, why it is used, and how to set up their first Angular project.

---

## 🧠 What is Angular?

Angular is a **TypeScript-based framework** for building **single-page web applications (SPAs)**. It helps developers create dynamic and interactive web pages efficiently.

### 🧩 Key Features:

* **Component-based architecture** – everything is a component.
* **Two-way data binding** – keeps the UI and data in sync.
* **Dependency Injection (DI)** – promotes reusable and testable code.
* **Routing** – allows navigation between pages without reloading.
* **Reactive Programming (RxJS)** – handles async data streams.

---

## 🧭 Why Angular?

Explain to students using a small comparison:

| Concept           | Traditional JS          | Angular                                 |
| ----------------- | ----------------------- | --------------------------------------- |
| UI Updates        | Manual DOM manipulation | Automatic through data binding          |
| Code Organization | Script files            | Modular (Components, Modules, Services) |
| Reusability       | Limited                 | High (reusable components)              |
| Maintainability   | Hard                    | Easy with clear structure               |

💡 **Example Explanation:**

> Imagine your website as a car. Angular gives you the entire framework — engine (core), dashboard (components), and routes (navigation). You just assemble and drive.

---

## ⚙️ Prerequisites

Before starting Angular, ensure the following are installed:

1. **Node.js** (includes npm)
2. **Angular CLI** (Command Line Interface)

```bash
node -v
npm -v
npm install -g @angular/cli
```

💡 Explain: *Angular CLI helps you create, build, and run Angular applications quickly without manual configuration.*

---

## 🏗️ Creating Your First Angular App

Run the following commands:

```bash
ng new hello-angular
cd hello-angular
ng serve
```

🌐 Open browser → [http://localhost:4200](http://localhost:4200)

🎉 You’ll see “Welcome to hello-angular!” – your first Angular app is running!

---

## 📂 Project Structure Overview

| Folder/File    | Description                              |
| -------------- | ---------------------------------------- |
| `src/app`      | Contains all your components and modules |
| `angular.json` | Angular project configuration            |
| `package.json` | Project dependencies                     |
| `main.ts`      | Application entry point                  |

💡 Tip: Use a visual diagram to show how files relate. Emphasize that `AppComponent` is the **root component**.

---

## 💻 Hands-On Exercise

1. Change the title text inside `app.component.html`.
2. Edit the `app.component.ts` file and log a message in the console.
3. Restart the server (`Ctrl + C`, then `ng serve`) and observe changes.

---

## 🧩 Recap

* Angular is a framework for building SPAs.
* It uses TypeScript, components, and data binding.
* CLI simplifies app creation.
* The default Angular app structure is modular and organized.

---

## 🧠 Homework / Practice

* Research: What is the difference between AngularJS and Angular?
* Try creating another app named `my-first-app` and modify its template.
* Explore what happens if you delete or rename `app.component.ts`.

---

## 🧑‍🏫 Teaching Tip

End the session by showing how changing a small piece of code in `app.component.html` instantly updates the page. This gives students an immediate sense of accomplishment.
