class Employee {
    name;
    salary;
    check() {
		  console.log(this.salary);
	  }
}

let employee = new Employee;
employee.name = 'Anya';
employee.salary = 100000;

employee.check();