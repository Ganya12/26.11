class Employee {
    age;
    name;
    salary;
    check(name, salary) {
		  return name + ', salary: ' + salary;
	  }
}

let employee = new Employee;
employee.age = 18;
employee.name = 'Anya';
employee.salary = 100000;


console.log(employee.check(employee.name, employee.salary));