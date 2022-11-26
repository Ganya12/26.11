class Employee {
age;
name;
salary;
}

let employee1 = new Employee;
let employee2 = new Employee;
let employee3 = new Employee;
let sum = 0;

employee1.age = 20;
employee1.name = 'Anya';
employee1.salary = 100000;

employee2.age = 22;
employee2.name = 'Milana';
employee2.salary = 100000;

employee3.age = 18;
employee3.name = 'Bob';
employee3.salary = 18000;

sum += employee1.salary + employee2.salary + employee3.salary;