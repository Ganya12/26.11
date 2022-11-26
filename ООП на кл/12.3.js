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
}

let employee = new Employee('Anya', 50000);

console.log(employee.show_name());
console.log(employee.show_salary());