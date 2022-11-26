class User {
	#name;
	#surn;
	
	setName(name) {
		this.#name = name;
	}
	getName() {
		return this.#name;
	}
	
	setSurn(surn) {
		this.#surn = surn;
	}
	getSurn() {
		return this.#surn;
	}
}

class Employe extends User {

}

let employe = new Employe();

employe.setName('anya');
employe.setSurn('milana');

let name = employe.getName();
let surn = employe.getSurn();
let full = employe.getFull();

console.log(name);
console.log(surn);
console.log(full);