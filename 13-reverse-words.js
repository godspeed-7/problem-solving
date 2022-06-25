
function reverseWords (str) {
const words = str.split(' ');
let newWord = '';
words.forEach((word) => {
    if(!word.trim()) return ;
    newWord  = word + ' ' + newWord;
})
console.log('words is', newWord);
}

reverseWords('Hello World');
// 'World Hello'

reverseWords(' This is  a  test string ');