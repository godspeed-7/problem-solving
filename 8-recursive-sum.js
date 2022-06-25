// let sum = 0;
// function calculateSum(...numbers) {
//     console.log(numbers);
// if(numbers.length ==0) {
//     return sum;
// } else {
// sum+=numbers[0];
// console.log('sum here', sum);
// numbers.shift()
// return calculateSum(...numbers);
// }
// }

// const num = calculateSum(1,2,3,4,5)
// console.log('sum is ', num);


function calculateSum(...nums) {
    console.log(nums);
    let sum = 0;
if(nums.length > 0 ){
    sum+=nums[0];
    nums.shift();
    return sum + calculateSum(...nums);
} return sum;
}


const num = calculateSum(1,2,3,4,5)
console.log('sum is ', num);