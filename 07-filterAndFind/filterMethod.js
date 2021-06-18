const people = [
  {
    name: "bob",
    age: 20,
    position: "developer",
  },
  {
    name: "ana",
    age: 25,
    position: "designer",
  },
  {
    name: "susy",
    age: 30,
    position: "the boss",
  },
  {
    name: "peter",
    age: 40,
    position: "ceo",
  },
];

const fruits = ["orange", "pear", "lemon"];
//Filter - returns new array can manipulate the size of new array, (unlike map) based condition
//Find - returns single instance  (object), returns first match, if no match - undefined

//filter
const youngPeople = people.filter((person) => {
  //return true; //the array of all the  objects n the array
  // return false; []
  return person.age < 30;
});
console.log(youngPeople); //[ { name: 'bob', age: 20, position: 'developer' }, { name: 'ana', age: 25, position: 'designer' } ]
const developers = people.filter((person) => person.position === "developer");
console.log(developers); //[ { name: 'bob', age: 20, position: 'developer' } ]

//no match
const seniorDevs = people.filter((dev) => dev.position === "senior dev");
console.log(seniorDevs); //[]

//find
const peter = people.find((person) => person.name === "peter");
console.log(peter); //{ name: 'peter', age: 40, position: 'ceo' }
console.log(peter.position); //ceo
const fruit = fruits.find((fruit) => fruit === "lemon");
console.log(fruit); //lemon
//no match
const oldPerson = people.find((person) => person.age > 40);
console.log(oldPerson); // undefined, it will be [] if method was filter

//multiple matches - first match
const randomPerson = people.find((person) => person.age < 35);
console.log(randomPerson); //{ name: 'bob', age: 20, position: 'developer' }

const anna = people.filter((person) => person.name == "susy");
console.log(anna); //[ { name: 'susy', age: 30, position: 'the boss' } ]
console.log(anna[0].position); //the boss
