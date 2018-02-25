let numerals = [];
let units = {
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
}

let tens = {
    1: 'X',
    2: 'XX',
    3: 'XXX',
    4: 'XL',
    5: 'L',
    6: 'LX',
    7: 'LXX',
    8: 'LXXX',
    9: 'XC',
}

let hundreds = {
    1: 'C',
    2: 'CC',
    3: 'CCC',
    4: 'CD',
    5: 'D',
    6: 'DC',
    7: 'DCC',
    8: 'DCCC',
    9: 'CM',
}

let thousands = {
    1: 'M',
    2: 'MM',
    3: 'MMM',
    4: 'MMMM',
}

numerals.push(units);
numerals.push(tens);
numerals.push(hundreds);
numerals.push(thousands);

function convertToRoman(num) {
    let val = num,
        unit = 0,
        temp = 0,
        result = '';
        
        while (val > 0 && unit < 4) {
            temp = Math.floor(val % 10);
            if (temp !== 0) {
                result = numerals[unit][temp] + result;        }
                val = Math.floor(val / 10);
                unit++;
            }
      }
      return result;
}
