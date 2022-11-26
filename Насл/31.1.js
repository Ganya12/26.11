class User {
	setName(name) {
		this.name = name;
	}
	getName() {
		return this.name;
	}
}

class Employe extends User {
	setSalary(salary) {
		this.salary = salary;
	}
	getSalary() {
		return this.salary;
	}
	setYear(year) {
		this.year = year;
	}
	getYear() {
		return this.year;
	}
}

let employe = new Employe;

employe.setName('anya');
employe.setSalary(15000);
employe.setYear(18);

let name = employe.getName();
let salary = employe.getSalary();
let year = employe.getYear();

console.log(name);
console.log(salary);
console.log(year);