/*function newFunction(name, age, country) {
  var name = name || 'Alberto';
  var age = age || 27;
  var country = country || 'MX';
  console.log(name, age, country);
};

// es6
function newFunction2(name = 'Alberto', age = 27, country = 'MX') {
  console.log(name, age, country);
};

newFunction2();
newFunction2('Sofia', 22, 'MX');

let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

let lorem = 'Qui consequatur. Commodi. Ipsum vel duis yet minima \n'
+ 'other ephical phrase that we need';

// es6
let lorem2 = `Another ephical phrase that we need
and now this is other ephical phrase
`;

console.log(lorem);
console.log(lorem2);

let person = {
  'name': 'Alberto',
  'age': 27,
  'country': 'MX'
};

console.log(person.name, person.age);

let { name, age } = person;
console.log(name, age);

let team1 = ['Alberto', 'Sofi', 'Daniela'];
let team2 = ['Alejandra', 'Andrea', 'Lorena'];

let education = ['Mariza', ...team1, ...team2];

console.log(education);

{
  var globalVar = 'Global var';
}

{
  let globalLet = 'Global let';
  console.log(globalLet)
}

console.log(globalVar);

const a = 'b';
console.log(a);

let name = 'Alberto';
let age = 32;

// es5
obj = { name: name, age: age };
// es6
obj2 = { name, age };
console.log(obj2);

const names = [
  { name: 'Alberto', age: 27 },
  { name: 'Sofia', age: 22 }
]

let listOfNames = names.map(function (item) {
  console.log(item.name);
});

let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
  console.info(`${name}, ${age}, ${country}`);
}

const listOfNames4 = name => {
  console.info(name);
}

const square = num => num * num;*/

const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('Hey!');
    } else {
      reject('Ups!!');
    }
  });
}

helloPromise()
  .then(response => console.log(response))
  .catch(error => console.log(`This is the error: ${error}`));

class calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }
  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}

const calc = new calculator();
console.log(calc.sum(2,2));

import { hello } from './module.js';

hello();

console.info(hello());

// Generators
function* helloWorld() {
  if (true) {
    yield 'Hello, ';
  }
  if (true) {
    yield 'World';
  }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);