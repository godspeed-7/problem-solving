let arr = [3, 5, 6, 9, 11, 18, 20, 21, 24, 30];
let target = 21;

function jumpSearch() {
  let blockSize = Math.floor(Math.sqrt(arr.length));
  let foundAt = -1;
  let start = 0;
  let next = blockSize;
  while (start <= (arr.length - 1)) {
    console.log({ start, next });
    if (next > arr.length) {
      next = arr.length;
    }
    if (target > arr[next-1 ]) {
      start = next;
      next += blockSize;
    }
  }
  for (i = start; i <= next; i++) {
    if (arr[i] === target) {
      foundAt = i;
      break;
    }
  }
}

jumpSearch();
