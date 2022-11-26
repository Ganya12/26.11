class User {
	setName(name) {
		this._name = name;
	}
	getName() {
		return this._name;
	}
}

class Employee extends User {

}

class Programmer extends Employee {

}

class Designer extends Employee {

}