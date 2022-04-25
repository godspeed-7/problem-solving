function armstrong(x) {
    let n = x;
    let sum = 0;
while(n>0) {
    let temp = n %10;
    sum+= Math.pow(temp, 3);
    n = Math.floor(n/10);
}
console.log(sum);
if(sum === x) {
    console.log('its armstring');
} else {
    console.log('not armstring');
}
}


armstrong(154);