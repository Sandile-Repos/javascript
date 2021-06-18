// Spread Operator...
// Allows and iterable to spread/expand individually inside receiver
//Split into single items and COPY them

const udemy = "udemy";
const letters = [...udemy];
console.log(letters); //["u", "d", "e", "m", "y"];

const boys = ["john", "peter", "bob"];
const girls = ["susan", "anna"];

const bestfriend = "arnold";

// const friends = [boys, girls, bestfriend];
// console.log(friends); //[ [ 'john', 'peter', 'bob' ], [ 'susan', 'anna' ], 'arnold' ]

const friends = [...boys, bestfriend, ...girls];
console.log(friends); //[ 'john', 'peter', 'bob', 'arnold', 'susan', 'anna' ]

//reference
const newFriends = friends;
newFriends[0] = "nancy";
console.log(friends); //[ 'nancy', 'peter', 'bob', 'arnold', 'susan', 'anna' ]
console.log(newFriends); //[ 'nancy', 'peter', 'bob', 'arnold', 'susan', 'anna' ]

//copy
const newFriendsCopy = [...friends];
newFriendsCopy[0] = "marry";
console.log(friends); //[ 'nancy', 'peter', 'bob', 'arnold', 'susan', 'anna' ]
console.log(newFriendsCopy); //[ 'marry', 'peter', 'bob', 'arnold', 'susan', 'anna' ]

//E2018 = ES8 Objects

const person = { name: "john", job: "developer" };
const newPerson = { ...person, city: "chicago", name: "peter" };
console.log(person); //{ name: 'john', job: 'developer' }
console.log(newPerson); //{ name: 'peter', job: 'developer', city: 'chicago' }
