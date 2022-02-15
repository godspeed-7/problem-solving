function isAnagram(string1, string2) {
if(!(string1 && string2)) return false;
const upperstr1 = string1.split('').sort().join('').toUpperCase();
const upperstr2 = string2.split('').sort().join('').toUpperCase();
return upperstr1 === upperstr2;
}

 console.log(isAnagram('racecar', 'carrace'))

console.log(isAnagram('racecar', 'carracr'))