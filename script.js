function fibonacci(num) {
	let mult=1;
	if(num==0){
		return 1;
	}else{
		for(i=num; i>=1; i--){
			mult=mult*i;
		}
	}
	return mult;
}

module.exports = fibonacci;
