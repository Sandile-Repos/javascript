// fast/easier way to acces/unpack variables from arrays, objects
const bob = {
  first: "bob",
  last: "sanders",
  city: "chicago",
  siblings: {
    sister: "jane",
  },
};

const firstName = bob.first;
const lastName = bob.last;
const sister = bob.siblings.sister;

console.log(firstName, lastName, sister); //bob sanders jane
// const { first, last, city } = bob;
// console.log(first, last, city); //bob sanders chicago
const {
  first,
  last,
  city,
  zip,
  siblings: { sister: favoriteSibling },
} = bob;
console.log(first, last, zip, favoriteSibling); //bob sanders undefined jane

function printPerson(person) {
  const {
    first,
    last,
    city,
    siblings: { sister },
  } = person;
  console.log(first, last, sister); // bob sanders jane
}
printPerson(bob);
