// fast/easier way to acces/unpack variables from arrays, objects

const fruits = ["orange", "banana", "lemon"];
const friends = ["john", "peter", "bob", "anna", "kelly"];

const fruit0 = fruits[0];
const fruit1 = fruits[1];
const fruit2 = fruits[2];

console.log(fruit0, fruit1, fruit2); //orange banna lemon

const [enemy, peter, , anna, kelly, susan] = friends;

console.log(enemy, peter, anna, kelly, susan); //john peter anna kelly undefined

let first = "bob";
let second = "john";

[second, first] = [first, second];
console.log(first, second); //john bob;
