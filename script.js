// function fibonacci(num) {
// 	let a = 0;
// 	let b = 1;
// 	for (let i = 2; i <= num; i++) {
// 	    let sum = a + b;
// 	    a = b;
// 	    b = sum;
// 	}
// 	if (num==1 || num==2){
// 		return num-1;
// 	}else{
// 		return b;
// 	}
// }

// module.exports = fibonacci;

function fibonacci(num) {
    if (num <= 0) {
        return "Input should be a positive integer";
    } else if (num == 1) {
        return 0;
    } else if (num == 2) {
        return 1;
    }
    let a = 0;
    let b = 1;
    for (let i = 2; i < num; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

module.exports = fibonacci;
