let arr = [2,4,5,5,5,5,5,7,9,9];
target = 5;

function findvalue() {
let first = null;
let last = null;
for(let i =0; i<arr.length ; i++) {
    if(arr[i] === target && !first) {
        first  = i;
        last = i; 
    } else if(arr[i]=== target && first){
        last = i
    }
}
console.log(first, last);
}

findvalue();