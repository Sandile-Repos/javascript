// Rest Operator...
// gathers/collects items
// destructuring, functions
// placement important, careful with the same name
// rest when declare function, spread when invoke the function

//arrays
const fruits = ["apple", "orange", "lemon", "banana"];
const [first, second, ...rest] = fruits;
console.log(first, rest); //apple [ 'lemon', 'banana' ]
const specificFruit = rest.find((fruit) => fruit === "lemon");
console.log(specificFruit); //lemon

//Objects
const person = { name: "john", job: "developer", last: "smith" };
const { job, ...restObject } = person;
console.log(job, restObject); //developer { name: 'john', last: 'smith'

//functions
// const getAverage = (name, ...scores) => {
//   console.log(name); //john
//   console.log(scores); //[]
// };
// getAverage(person.name);

// const getAverage = (name, ...scores) => {
//   console.log(name); //john
//   console.log(scores); //[ 89, 76, 81, 100 ]
//   const average =
//     scores.reduce((total, item) => {
//       return (total += item);
//     }, 0) / scores.length;
//   console.log(average); //86.5
// };
// getAverage(person.name, 89, 76, 81, 100);

const getAverage = (name, ...scores) => {
  console.log(name); //john
  console.log(scores); //[23, 45, 67, 89]
  const average =
    scores.reduce((total, item) => {
      return (total += item);
    }, 0) / scores.length;
  console.log(average); //56
};
const testScores = [23, 45, 67, 89];
getAverage(person.name, ...testScores);
