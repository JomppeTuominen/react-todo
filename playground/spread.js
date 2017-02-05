// function add (a, b) {
//   return a + b;
// }
//
// console.log(add(3, 1));
//
// var toAdd = [9, 5];
// console.log(add(...toAdd));
//

// var groupA = ['Sanna', 'Mila'];
// var groupB = ['Jussi', 'Ninni'];
// var final = [...groupA, 3, ...groupB];
//
// console.log('final', final);
function greet (name, age) {
  console.log('Hi ' + name + ', you are ' + age);
}
var person = ['Ben', 30];
var person2 = ['Jennifer', 31];

greet(...person);
greet(...person2);

var names = ['Michael', 'Anna'];
var final = [...names, 'Jomppe'];

function simpleGreet (names) {
  names.forEach((name) => {
    console.log('Hi ' + name)
  });
};
simpleGreet(final);
