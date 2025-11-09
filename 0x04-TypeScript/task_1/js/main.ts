// ----------------------
// Task 1: Teacher Interface
// ----------------------
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // allows additional attributes
}

// Example usage
const teacher1: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  location: 'New York',
  contract: true,
};

console.log(teacher1);

// ----------------------
// Task 2: Director Interface
// ----------------------
interface Director extends Teacher {
  numberOfReports: number;
}

// Example usage
const director1: Director = {
  firstName: 'Jane',
  lastName: 'Smith',
  fullTimeEmployee: true,
  location: 'London',
  numberOfReports: 17,
};

console.log(director1);

// ----------------------
// Task 3: printTeacher function
// ----------------------
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(printTeacher("John", "Doe"));   // J. Doe
console.log(printTeacher("Alice", "Smith")); // A. Smith

// ----------------------
// Task 4: StudentClass
// ----------------------
interface StudentConstructor {
  firstName: string;
  lastName: string;
}

interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentInterface {
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student = new StudentClass({ firstName: 'Alice', lastName: 'Johnson' });
console.log(student.displayName());       // Alice
console.log(student.workOnHomework());    // Currently working
