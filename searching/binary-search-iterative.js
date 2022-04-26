let ar = [2, 3, 4, 10, 40];
let x = 10;

function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  let mid;
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

let t = binarySearch(ar, x);
console.log(t);
