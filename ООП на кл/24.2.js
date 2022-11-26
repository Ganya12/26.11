class Employee {
	#name;
	#salary;
	
	constructor(name, salary) {
		this.#name = name;
		this.#salary = salary;
	}
	getName() {
		return this.#name;
	}
	getSalary(){
	  return this.#salary
	}
}

let employees = [
  new Employee('Anya', 15000),
  new Employee('Milana', 14500),
  new Employee('Tanya', 13500),
  new Employee('Andrushka', 6600)
  ]
  
for (let employee of employees) {
	console.log(employee.getName() + " " + employee.getSalary());
}