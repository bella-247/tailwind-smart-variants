# tailwind-smart-variants

A utility for writing clean, responsive, theme-aware, and conditional Tailwind CSS classes with ease.

---

## 🚀 Overview

**tailwind-smart-variants** simplifies how developers manage Tailwind CSS classes by providing:

* **Conditional class management** – apply classes based on runtime conditions.
* **Responsive breakpoints** – cleanly define classes for `sm`, `md`, `lg`, `xl`, `2xl`.
* **Theme-aware styling** – easily handle dark or light mode classes.
* **Pseudo-classes support** – `hover`, `focus`, `active`, etc.
* **TypeScript support** – fully typed for better developer experience.

Instead of writing long and messy class strings, you define classes structurally, improving readability and maintainability.

---

## 🔥 Problems It Solves

Developers often struggle with:

* **Messy class strings**

```jsx
<div className={`px-4 py-2 rounded font-medium ${
  isActive ? 'bg-green-500' : 'bg-gray-300'
} sm:text-sm lg:text-lg dark:text-white hover:bg-blue-500`}></div>
```

* **Hard-to-read responsive and conditional classes**
  Combining breakpoints, pseudo-classes, theme logic, and dynamic conditions is error-prone.

* **Duplicated or conflicting classes**
  Maintaining classes across multiple components or conditions leads to bugs and time wasted.

**tailwind-smart-variants** solves these issues by allowing developers to define classes in an organized object instead of long strings.

---

## 💡 Installation

```bash
npm install tailwind-smart-variants
# or
yarn add tailwind-smart-variants
```

---

## ⚙️ Usage

### Basic Example

```jsx
import { twSmart } from 'tailwind-smart-variants';

<div className={twSmart({
  base: 'px-4 py-2 rounded font-medium',
  hover: 'bg-blue-500 text-white',
  dark: 'text-white hover:bg-blue-700'
})}>
  Click Me
</div>
```

* `base`: default classes applied always.
* `hover`: pseudo-class styling.
* `dark`: classes applied in dark mode.

### Conditional Classes

```jsx
<div className={twSmart({
  base: 'px-4 py-2 rounded',
  condition: isActive ? 'bg-green-500' : 'bg-gray-300'
})}>
  Conditional Button
</div>
```

* `condition`: dynamically applied classes based on runtime variables.

### Responsive Classes

```jsx
<div className={twSmart({
  base: 'px-4 py-2 rounded',
  sm: 'text-sm',
  md: 'text-md',
  lg: 'text-lg'
})}>
  Responsive Button
</div>
```

Supports all Tailwind breakpoints: `sm`, `md`, `lg`, `xl`, `2xl`.

### Pseudo-classes + Theme + Condition

```jsx
<div className={twSmart({
  base: 'px-4 py-2 rounded font-medium',
  hover: 'bg-blue-500 text-white',
  focus: 'ring-2 ring-blue-300',
  dark: 'text-white hover:bg-blue-700',
  sm: { base: 'text-sm', hover: 'bg-blue-600' },
  condition: isActive ? 'bg-green-500' : 'bg-gray-300'
})}>
  Full Featured Button
</div>
```

Combines pseudo-classes, responsive breakpoints, dark mode, and dynamic conditions.

---

## 🛠 Features

* ✅ Conditional classes
* ✅ Responsive breakpoints support
* ✅ Theme-aware (dark / light) support
* ✅ Pseudo-classes (`hover`, `focus`, `active`) support
* ✅ TypeScript ready
* ✅ Lightweight and dependency-free
* ✅ Works in React, Next.js, or plain HTML projects

---

## 📁 Recommended Project Structure

```
tailwind-smart-variants/
├─ src/
│  ├─ index.ts          # Main twSmart export
│  └─ utils.ts          # Helper functions
├─ test/
│  └─ twSmart.test.ts   # Unit tests
├─ package.json
├─ tsconfig.json
├─ README.md
└─ LICENSE
```

---

## 🔧 Requirements to Build

* Node.js >= 18
* npm or yarn
* TypeScript (optional, recommended)

**Dev dependencies:**

* jest or vitest (unit testing)
* eslint + prettier (code quality)
* tsup or rollup (bundling)
* tailwindcss (for testing integration)

---

## 📝 Next Steps

1. Define API design for `twSmart`.
2. Implement core logic (base, conditional, responsive, theme, pseudo-classes).
3. Add TypeScript types for IntelliSense.
4. Write unit tests to ensure correctness.
5. Bundle and publish to npm.
6. Provide example projects for React and Next.js integration.

---

## 💡 Tips for Developers

* Keep `base` classes minimal and let `twSmart` handle variants.
* Use `condition` for dynamic runtime classes instead of inline ternaries.
* Combine responsive and pseudo-classes in nested objects for readability.
* Fully compatible with Tailwind's JIT mode.

---

## 📜 License

MIT License © 2025 Abel Mekonnen
