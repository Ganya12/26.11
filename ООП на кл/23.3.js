class Employee {
	constructor(name, position, department) {
		this.name = name;
		this.position = position;
		this.department = department;
	}
}

class Position {
	constructor(name) {
		this.name = name;
	}
}

class Department {
	constructor(name) {
		this.name = name;
	}
}

let position = new Position('Vol');
let department = new Department('it');
let employee = new Employee('ann', position, department);

console.log(employee.name);
console.log(employee.position.name);
console.log(employee.department.name);