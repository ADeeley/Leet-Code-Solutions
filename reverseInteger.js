function reverse(x) {
    let isMinus = false,
        maxInt = Math.pow(2, 32) -1;
        minInt = -1 * Math.pow(2, 32);
        stringNum = String(x);

    if (x < 0) {
        isMinus = true;
        stringNum = stringNum.slice(1);
    }

    let result = +stringNum.split('').reverse().join('');
    
    if (isMinus) {
        result *= -1;
    }

    if (result > maxInt || result < minInt) {
        return 0;
    } else {
        return result
    }
}

console.log(reverse(123))
console.log(reverse(-123))
console.log(reverse(120))
console.log(reverse(1))
console.log(reverse(0))
console.log(reverse(494967296))
console.log(reverse(-4294967296))
console.log(reverse(42949000067296))
