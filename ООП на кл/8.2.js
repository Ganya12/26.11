class Student {
    name;
    surn;
	  
	cape(str) {
		let x = str[0].toUpperCase() + str.slice(1);
		return x[0];
	}
}

let student = new Student;
student.name = 'Anya';
student.surn = 'Milana';

console.log(student.check());