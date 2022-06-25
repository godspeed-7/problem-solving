function palindrome(str) {
    let temp = '';
for(let i=0; i<str.length; i++) {
temp = str[i] + temp;
}
if(str === temp) return true;
else return false;
}

console.log(palindrome('aka'));