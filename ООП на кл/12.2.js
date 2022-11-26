class Employee {
	constructor(name, salary) {
		this.name = name;
		this.salary = salary;
	}
	show_name() {
		return this.name;
	}
}

let employee = new Employee('Anya', 50000);

console.log(employee.show_name());