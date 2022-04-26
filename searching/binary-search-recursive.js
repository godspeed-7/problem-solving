
let ar = [2, 3, 4, 5,9,10, 40];
let x = 10;
let l = 0;
let r = ar.length - 1;

function binarySearch(arr, val, left, right) {
    // if()
    if(left > right ) return null;
let mid = Math.floor((left + right) / 2);
console.log({left, right, mid});
if(val === arr[mid]) return mid;
if(val > arr[mid]) {
    return binarySearch(arr, val, mid+ 1, right );
} 
if (val < arr[mid]) {
    return binarySearch(arr, val, left, mid-1 );
}
}

let t = binarySearch(ar, x, l, r);
console.log(t);