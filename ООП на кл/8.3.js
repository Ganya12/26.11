class Student {
    name;
    surn;
    check() {
		  let a = this.cape(this.name);
		  let b = this.cape(this.surn);
		  let c = a + "." + b + ".";
		  return c;
	  }
	  
	cape(str) {
		let x = str[0].toUpperCase() + str.slice(1);
		return x[0];
	}
}

let student = new Student;
student.name = 'john';
student.surn = 'smith';

console.log(student.check());