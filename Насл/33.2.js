class User {
	constructor(name, salary) {
		this.name = name;
		this.salary = salary;
	}
}
  
class Employe extends User {
	constructor(name, salary) {
		super(name, salary);
	}
}
  
let employe = new Employe('anya', 15000);
  
console.log(name);
console.log(salary);