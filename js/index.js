function display(result) {
    let content = document.createElement('div'),
        para = document.createElement('p'),
        body = document.getElementsByTagName('body')[0];

    para.innerHTML = result,
    body.appendChild(content.appendChild(para));
}

var convert = function(s, numRows) {
    const odd = (() =>{
            if (numRows > 2) {
                return numRows - 2;
            } else {
                return numRows;
            }
        } )(),
        splitArr = [];

    let result = '';
        
    array.forEach(letter => {
        splitArr.push(letter);
    });


    return result;
};

try {
    // TEST 1 ============================================
    let result = convert('DODECHAHEDRON', 3),
        target = 'DDOERDHOEANC';

    if (result !== target) {
        throw '**Test 1** Expected: ' + target + ' Returned: ' + result;
    }
    // TEST 2 ============================================
    result = convert('PAYPALISHIRING', 3),
    target = 'PAHNAPLSIIGYIR';

    if (result !== target) {
        throw '**Test 2** Expected: ' + target + ' Returned: ' + result;
    }
    // TEST 3 ============================================
    result = convert('TELEVISIONS', 4),
    target = 'TSEIILVOSEN';

    if (result !== target) {
        throw '**Test 3** Expected: ' + target + ' Returned: ' + result;
    }
    // TEST 4 ============================================
    result = convert('ILLUSTRIOUS', 7),
    target = 'ILLSLUSTOTIR';

    if (result !== target) {
        throw '**Test 4** Expected: ' + target + ' Returned: ' + result;
    }
    // TEST 5 ============================================
    result = convert('MUCILAGINOUS', 1),
    target = 'MUCILAGINOUS';

    if (result !== target) {
        throw '**Test 5** Expected: ' + target + ' Returned: ' + result;
    }
    // TEST 6 ============================================
    result = convert('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 3),
    target = 'AEIMQUYBDFHJLNPRTVXCGKOSW';

    if (result !== target) {
        throw '**Test 6** Expected: ' + target + ' Returned: ' + result;
    }
    // TEST 7 ============================================
    result = convert('A', 4),
    target = 'A';

    if (result !== target) {
        throw '**Test 7** Expected: ' + target + ' Returned: ' + result;
    }
} catch (error) {
    display(error);
}