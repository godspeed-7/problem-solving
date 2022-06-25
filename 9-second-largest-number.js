let numbers = [ 12, 80, 25,20, 1, 10];

function secondLargest(numbers) {
  let max = 0;
  let secondmax = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
        secondmax = max;
      max = numbers[i];
    }
    if(numbers[i] > secondmax && numbers[i] != max ) {
        secondmax = numbers[i];
    }
    console.log('max is ', max);
    console.log('secondmax is ', secondmax);
  }

}

secondLargest(numbers);
