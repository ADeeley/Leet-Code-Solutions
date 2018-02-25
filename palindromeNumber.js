function isPalindrome(x) {
    x = String(x);

    for (let i = 0; i < Math.floor(x.length / 2); i++) {
        if (x[i] !== x[x.length - (i + 1)]) {
            return false;
        }
    }
    return true;
}

function equal(name, x, y) {
    if(x !== y) {
        console.log('TEST ' + name + ' FAILED');
    } else {
        console.log('TEST ' + name + ' OK');
    }
}

equal('1', isPalindrome(1221), true)
equal('2', isPalindrome(343), true)
equal('3', isPalindrome(1), true)
equal('4', isPalindrome(0), true)
equal('5', isPalindrome(90909090909), true)
equal('6', isPalindrome(111111111111111), true)
equal('7', isPalindrome(221), false)
equal('8', isPalindrome(0912403152015238057), false)
equal('9', isPalindrome(12), false)
equal('10', isPalindrome(-43), false)
equal('11', isPalindrome(-12221), true)
