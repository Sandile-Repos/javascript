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
    name: "john",
    age: 26,
    position: "intern",
  },
];
//map - returns new array from values of original array(does not change size of original array, unlike filter)
const arg = people.map((person) => {
  return person.age;
});
console.log(arg);

const args = people.map((person) => person.age * 2);
console.log(args);

const getAges = (person) => person.age;
const age = people.map(getAges);
console.log(age);

const newPeople = people.map((item) => {
  return {
    firstName: item.name.toUpperCase(),
    oldAge: item.age + 20,
  };
});
console.log(newPeople);

const names = people.map((person) => `<h2>${person.name}</h2>`);
const result = document.querySelector("#result");

result.innerHTML = names.join("");
