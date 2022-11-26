class Employee {
	#name;
	salary;
	
	constructor(name, salary) {
		this.#name = name;
		this.salary = salary;
	}
	getName() {
		return this.#name;
	}
	getSalary() {
	  return this.salary;
	}
}

class EmployeesCollection {
	#users;
	#salaries;
	
	constructor() {
		this.#users = [];
		this.#salaries = [];
	}
	add(user, salary) {
		this.#users.push(user);
		this.#salaries.push(salary);
	}
}

let ec = new EmployeesCollection;

ec.add(new Employee('Anya', 15000));
ec.add(new Employee('Milana', 14500));
ec.add(new Employee('Tanya', 13500));
ec.add(new Employee('Andrushka', 6600));