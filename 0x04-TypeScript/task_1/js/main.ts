// Define the Teacher interface
interface Teacher {
  readonly firstName: string; // read-only
  readonly lastName: string;  // read-only
  fullTimeEmployee: boolean;  // required
  yearsOfExperience?: number; // optional
  location: string;           // required
  [key: string]: any;         // allows additional attributes
}

// Example usage
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);
