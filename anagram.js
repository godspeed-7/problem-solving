// solution 1 with util function

function isAnagram(string1, string2) {
if(!(string1 && string2)) return false;
const upperstr1 = string1.split('').sort().join('').toUpperCase();
const upperstr2 = string2.split('').sort().join('').toUpperCase();
return upperstr1 === upperstr2;
}

// solution 2 (without any util methods)

function isAnagram(str1, str2) {
    if(str1.length !== str2.length) return false;
    for (let i= 0;  i < str1.length; i++) {
        let isFound = false;
        for (let j = 0; j < str2.length; j++) {
            if(str1[i] === str2[j]) {
        isFound = true;
            }
        }
        if(!isFound) return false;
    }
    return true;
}

// solution 3  with O(n)

function isAnagram(str1, str2) {
    if(str1.length !== str2.length) return false;
const ar = new Array(255).fill(0);
for (let i = 0; i < str1.length; i++) {
    const v1 = str1[i].charCodeAt();
    const v2 = str2[i].charCodeAt();
    ar[v1]+=1;
    ar[v2]-=1;
}
let t = ar.filter(v => Boolean(v));
return t.length ? false : true;

}

console.log(isAnagram('racecar', 'carrace'))
console.log(isAnagram('silent', 'listen'))