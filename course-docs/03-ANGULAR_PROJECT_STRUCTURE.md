# Project Structure & Angular CLI Commands


## 📁 Angular Project Structure

When you create a new Angular project using:

```bash
ng new angular-course
```

Angular CLI generates a complete folder structure for you. Let’s understand it step by step:

### 🗂️ Root Folder Structure

```
angular-course/
│
├── node_modules/          # Installed dependencies
├── public/                # Public assets (served as-is without processing)
├── src/                   # Application source code
│   ├── app/               # Contains all components, services, modules
│   ├── assets/            # Static files (images, icons, etc.)
│   ├── environments/      # Environment-specific settings (dev/prod)
│   └── index.html         # Root HTML file
│
├── angular.json           # CLI configuration file
├── package.json           # Project metadata and dependencies
├── package-lock.json      # Exact dependency versions for reproducible builds
├── tsconfig.json          # Base TypeScript configuration
├── tsconfig.app.json      # TypeScript configuration for the main app
├── tsconfig.spec.json     # TypeScript configuration for unit testing
├── .browserslistrc        # Browser compatibility list
└── README.md              # Auto-generated documentation
```

---

## ⚙️ Important Files Explained

### 🧩 `angular.json`

* Controls how Angular CLI builds your app.
* Defines build targets (dev/prod), output paths, styles, and scripts.
* Example:

```json
"projects": {
  "angular-course": {
    "architect": {
      "build": {
        "options": {
          "outputPath": "dist/angular-course",
          "index": "src/index.html",
          "main": "src/main.ts"
        }
      }
    }
  }
}
```

### 📦 `package.json`

* Lists dependencies and scripts.
* Example:

```json
"scripts": {
  "start": "ng serve",
  "build": "ng build",
  "test": "ng test"
}
```

💡 *When you run `npm start`, it actually runs `ng serve`.*

### 🔒 `package-lock.json`

* Records the **exact versions** of all installed packages.
* Ensures consistent installs across different systems.

### 🧠 `main.ts`

* Entry point of the Angular app.
* Bootstraps the root component using Angular’s **standalone bootstrap API** (introduced in Angular 15+).

```typescript
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
```

💬 **Explanation:**

* `bootstrapApplication()` replaces the older `platformBrowserDynamic().bootstrapModule()` syntax.
* It directly bootstraps the root component (`App`) instead of a root module (`AppModule`).
* `app.config.ts` contains providers, routing, and other configurations.

### 📘 TypeScript Config Files

| File                 | Purpose                                     |
| -------------------- | ------------------------------------------- |
| `tsconfig.json`      | Base configuration shared by app and tests. |
| `tsconfig.app.json`  | Specific config for the application build.  |
| `tsconfig.spec.json` | Specific config for unit testing setup.     |

### 🚀 Bootstrap Flow

1. `index.html` → Loads `main.ts`
2. `main.ts` → Bootstraps `App` component via `bootstrapApplication()`
3. `App` → Renders first visible HTML (`app-root`)

---

## 🧑‍💻 CLI Commands Overview

| Command                        | Description                         |
| ------------------------------ | ----------------------------------- |
| `ng new <app-name>`            | Create a new Angular project        |
| `ng serve`                     | Run the app locally                 |
| `ng build`                     | Build the app for production        |
| `ng generate component <name>` | Create a new component              |
| `ng generate service <name>`   | Create a new service                |
| `ng test`                      | Run unit tests                      |
| `ng add <package>`             | Add library (like Angular Material) |

---

## 💻 Demo: Modify App Title

1. Open `src/app/app.html`.
2. Change the default text:

```html
<h1>Welcome to Angular Course App 🚀</h1>
```

3. Save the file — Angular’s live reload (via `ng serve`) will automatically update the browser.

