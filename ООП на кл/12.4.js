class Employee {
	constructor(name, salary) {
		this.name = name;
		this.salary = salary;
	}
	show_name() {
		return this.name;
	}
	show_salary() {
		return this.salary;
	}
	increase_salary() {
	  this.salary = this.salary + (this.salary/10);
	  return this.salary;
	}
}

let employee = new Employee('Anya', 50000);

console.log(employee.show_name());
console.log(employee.show_salary());
console.log(employee.increase_salary());