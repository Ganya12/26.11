class Employee {
    age;
    name;
    salary;
    check() {
		  return "stop working" ;
	  }
}

let employee = new Employee;
employee.age = 18;
employee.name = 'Anya';
employee.salary = 100000;

console.log(employee.check());