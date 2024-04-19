function fibonacci(num) {
	let a = 0;
	let b = 1;
	for (let i = 2; i <= num; i++) {
	    let sum = a + b;
	    a = b;
	    b = sum;
	}
	if (num==1 || num==2){
		return num-1;
	}else{
		return b;
	}
}

module.exports = fibonacci;
