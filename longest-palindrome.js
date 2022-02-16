function countPalindromes(str, left, right) {
    let temp = [];
    while(left >=0 && right<str.length) {
        console.log(left, right);
        if(str.charAt(left)== str.charAt(right)) {
            temp.push(right);
            left--;
            right++;
        } else {
            break;
        }
    }
    return Math.max(...temp);
}

function palindromicStrings(str) {
    let val = 0;
    const set = new Set();
    for (let index = 0; index < str.length; index++) {
        val =  countPalindromes(str,index, index);// odd
        set.add(val);
        val = countPalindromes(str, index, index+1); // even
        set.add(val);
    }
    console.log('tot', Math.max(...Array.from(set)));
}


palindromicStrings('abccccdd');