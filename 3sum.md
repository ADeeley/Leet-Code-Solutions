function binarySearch(arr, pred) {
  let l = 0,
  r = arr.length -1,
  m = 0,
  result = 0,
  target = 0;
  
    arr.sort();
    
    while (l <= r) {
    m = Math.floor((l + r) / 2);
    result = pred(arr[m]);
        if (result === target) {
            return arr[m];
        } else if (result < target) {
            l = m + 1;
        } else if (result > target) {
            r = m - 1;
        }
    }    
    return undefined;
}
function BSearch3Sum(arr) {
    let sum = 0,
        results = [],
        result = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {      sum = arr[i] + arr[j];
            result = binarySearch(arr.slice(j+1), (n) => {
                return sum + n;
            }); 
     if (result) {  results.push([arr[i], arr[j], result])     }
 }
    }
    return results;
}
