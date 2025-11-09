# Task 1 - Let's Build a Teacher Interface

## 🧩 Description
In this task, we define a **TypeScript interface** for a `Teacher` object with both fixed and flexible properties.

The goal is to ensure:
- Certain fields are **readonly** (cannot be modified after initialization)
- Some fields are **required**
- Some fields are **optional**
- Additional attributes can be added without explicitly defining them

---

## 📁 Project Structure

0x04-TypeScript/
└── task_1/
├── js/
│ └── main.ts
├── package.json
├── tsconfig.json
└── webpack.config.js


---

## 🧠 Interface Specification

| Property             | Type      | Requirement           | Description |
|----------------------|-----------|-----------------------|-------------|
| `firstName`          | `string`  | readonly, required    | Only modifiable when initialized |
| `lastName`           | `string`  | readonly, required    | Only modifiable when initialized |
| `fullTimeEmployee`   | `boolean` | required              | Always defined |
| `yearsOfExperience`  | `number`  | optional              | Optional field |
| `location`           | `string`  | required              | Always defined |
| `[key: string]: any` | `any`     | optional (index type) | Allows extra attributes like `contract` |

---

## 🧑‍💻 Example Code

```typescript
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

## 🧾 Repository

GitHub repository: alx-frontend-javascript
Directory: 0x04-TypeScript
File path: task_1/js/main.ts