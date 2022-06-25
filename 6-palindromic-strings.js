function countPalindromes(str, left, right) {
    let count = 0;
    while(left >=0 && right<str.length) {
        console.log(left, right);
        if(str.charAt(left)== str.charAt(right)) {
            count++;
            left--;
            right++;
        } else {
            break;
        }
    }
    return count;
}

function palindromicStrings(str) {
    let tot = 0;
    for (let index = 0; index < str.length; index++) {
        tot +=  countPalindromes(str,index, index);// odd
        tot += countPalindromes(str, index, index+1); // even
    }
    console.log('tot', tot);
}


palindromicStrings('aaab');

// palindromicStrings('aaa') 