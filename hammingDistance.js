function hammingDistance(x, y) {
    let diff = (x ^ y).toString(2);
    let sum = 0;
    for (let i = 0; i < diff.length; i++) {
        if (diff[i] === '1') {
            sum++;
        }
    }
    return sum;
}

console.log(hammingDistance(1,4) === 2);
console.log(hammingDistance(25,12) === 3);
console.log(hammingDistance(128, 512) === 2);
console.log(hammingDistance(256, 512) === 2);
console.log(hammingDistance(1024, 2048) === 2);
console.log(hammingDistance(31, 0) === 5);
console.log(hammingDistance(31, 31) === 0);