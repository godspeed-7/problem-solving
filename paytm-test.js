// (function() {
// var greet = 'Hello World';
// var toGreet = [].filter.call(greet, function(elem, index){
// return index > 5;
// });
// console.log(toGreet);
// }());

// let person = {
//     name: 'leonardo'
// };
// let animal = {
//     species: 'snake'
// };

// Object.freeze(person);
// person.name = "Leena";
// console.log(person);

// (function() {
// var arr = new Array(100);
// console.log(arr);
// console.log(arr.length);
// }());

// var bar = 1;
// foo ={};
// foo:{
//     bar: 2;
//     baz: ++bar;
// }
// console.log(foo.baz + foo.bar + bar);


(function() {
bar();
function bar() {
    abc();
    console.log(typeof abc);

    function abc() {
        console.log(typeof bar);
    }
}
}());