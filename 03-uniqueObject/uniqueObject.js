//dot notation
const person = {
  name: "john",
};
console.log(person.name);
person.age = 25;
console.log(person); //{ name: 'john', age: 25 }

//sqaure bracket notation
const items = {
  "feature-items": ["item1", "item2"],
};
console.log(items["feature-items"]); //[ 'item1', 'item2' ]
console.log(person["name"]); // john

let appState = "loading";
appState = "error";
const keyName = "computer";
const app = {
  [appState]: true,
};

//console.log(app); //{ loading: true }
console.log(app); //{ error: true }
app[keyName] = "apple";
console.log(app); //{ error: true, computer: 'apple' }

const state = {
  loading: true,
  name: "",
  job: "",
};

function updateState(key, value) {
  state[key] = value;
}
updateState("name", "john");
updateState("job", "developer");
updateState("loading", false);
updateState("product", []);

console.log(state); //{ loading: false, name: 'john', job: 'developer', product: [] }
