class Validator {
	isString(str) {
		return(typeof str === 'string');
	}
	isEmail(str) {
		return ((str.indexOf('@') !== -1) && (str.indexOf('.') !== -1))
	}
}

let validator = new Validator();

let res = validator.isString('')
console.log(res)
res = validator.isEmail('ann@a.a')
console.log(res)