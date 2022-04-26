let ar = [2, 3, 4, 5,9,10, 40, 50, 70, 100, 170];
let x = 100;
let left = 0;
let right = ar.length - 1;
let mid;

function doBinary(arr, val, left, right) {
    let foundAt = -1;
    while (left < right) {
        mid = Math.floor((left + right) / 2);
        if (arr[mid] === val) {
          foundAt = mid;
          break;
        } else if (val > arr[mid]) {
          left = mid+1;
        } else if (val < arr[mid]) {
          right = mid - 1;
        }
      }
      return foundAt;
}


function ternarySearch(arr, val) {
  let partitionSum = Math.floor(left + right /3);
  let mid1 = left + partitionSum;
  let mid2 = right  - partitionSum;
  if(val === arr[mid1]) return mid1;
   else if(val === arr[mid2]) return mid2;
   else if(val < arr[mid1]) {
       return doBinary(arr, val, 0, mid1 -1);
   } else if(val > arr[mid1] && val < arr[mid2]) {
    return doBinary(arr, val, mid1 + 1, mid2 -1);
   } else if(val > arr[mid2]) {
       return doBinary(arr, val, mid2 +1, arr.length - 1);
   }
  


}

let t = ternarySearch(ar, x);
console.log(t);
