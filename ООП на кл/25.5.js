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
	show() {
		for (let user of this.#users) {
			console.log(user.getName());
		}
	}
	summ(){
	  let sum = 0;
	  let sum2 = 0;
	  for (let salary of this.#salaries) {
			sum2 = salary.getSalary();
			sum += sum2;
			console.log(sum2);
		}
	}
}

let ec = new EmployeesCollection;

ec.add(new Employee('Anya', 15000));
ec.add(new Employee('Milana', 14500));
ec.add(new Employee('Tanya', 13500));
ec.add(new Employee('Andrushka', 6600));

ec.show();
ec.summ();
