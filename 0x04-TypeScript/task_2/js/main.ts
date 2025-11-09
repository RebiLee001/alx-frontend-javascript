// ----------------------
// Task 5 – Advanced Types Part 1
// ----------------------

// DirectorInterface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// TeacherInterface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director class
class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }
  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }
  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

// Teacher class
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }
  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }
  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

// createEmployee function
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// ----------------------
// Task 6 – Functions specific to employees
// ----------------------

// Type predicate to check if employee is Director
function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

// Executes the correct work method
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// ----------------------
// Task 7 – String literal types
// ----------------------

// String literal type for subjects
type Subjects = 'Math' | 'History';

// teachClass function
function teachClass(todayClass: Subjects): string {
  return `Teaching ${todayClass}`;
}

// ----------------------
// Example usage
// ----------------------
console.log(createEmployee(200));       // Teacher instance
console.log(createEmployee(1000));      // Director instance
console.log(createEmployee('$500'));    // Director instance

const teacher = createEmployee(200);
const director = createEmployee(1000);

console.log(executeWork(teacher));      // Getting to work
console.log(executeWork(director));     // Getting to director tasks

console.log(teachClass('Math'));        // Teaching Math
console.log(teachClass('History'));     // Teaching History
