// task_1/js/main.ts

// Teacher interface from Task 1
interface Teacher {
  readonly firstName: string;      // read-only after initialization
  readonly lastName: string;       // read-only after initialization
  fullTimeEmployee: boolean;       // mandatory
  yearsOfExperience?: number;      // optional
  location: string;                // mandatory
  [key: string]: any;              // allows additional attributes
}

// Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;         // mandatory property for Directors
}

// Example usage
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);
