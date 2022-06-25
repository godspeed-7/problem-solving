let arr = [3,6,8,0,0,4,0,12,5,9];

function moveToEnd(arr) {
let copy = new Array(arr.length);
let tmp=[];
for (let i = 0; i < arr.length; i++) {
    if(arr[i] == 0) {
    tmp.push(0);
    }
}
copy = arr.filter(v => Boolean(v));
    return [...copy, ...tmp];
}

let t = moveToEnd(arr);
console.log(t);