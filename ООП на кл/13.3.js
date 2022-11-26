class Employee {
	#name;
	#age;
	#salary;
	
	  constructor(name, age, salary) {
		  this.#name = name;
		  this.#age = age;
		  this.#salary = salary;
	  }
	  show() {
		  return this.#name + ', ' + this.#age + ' years old, salary: ' + this.#salary;
	  }
  }
  
  let employee = new Employee('Anya', 18, 50000);
  
  console.log(employee.show());