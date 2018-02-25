'use strict'
function switchEls(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function removeElement(arr, val) {
    if (arr.length === 0) {
        return 0;
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            let j = i + 1;
            while (j < arr.length) {
                if (arr[j] !== val) {
                    switchEls(arr, i, j);
                    break;
                }
                j++
            }
            if (j === arr.length) {
                return i;
            }
        }
    }
}

function test(arr, val) {
    console.log('===========================')
    console.log('before: ' + arr)
    console.log('Array Len: ' + removeElement(arr, val));
    console.log('after:  ' + arr)
}

test([1,8,5,2,3,8,34,6,8,8,2,5], 8);
test([8,8,8,8,8,8,8,2,3,4,5,6,6], 8);
test([], 9);
test([1], 1);
test([1,1,1,1], 1);
test([2,1], 2);