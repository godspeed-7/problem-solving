

function sum(args) {
    let sum = 0;
    for (let i = Math.min(...args); i <= Math.max(...args); i++){
        console.log(i);
        sum+=i;
    }
}

sum([1,4])