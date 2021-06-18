const people = [
  {
    name: "bob",
    location: { street: "123 main street", timezone: { offset: "+7:00" } },
  },
  {
    name: "peter",
    location: { street: "123 Pine street" },
  },
  {
    name: "susan",
    location: { street: "123 Apple street", timezone: { offset: "+9:00" } },
  },
];

//https://randomuser.me/

console.log(true && "hello world"); // hellow world
console.log(false && "hello people"); // false

people.forEach((person) => {
  // console.log(person.name); // bob peter
  // console.log(person.location.timezone.offset); //+7:00 error
  // console.log(
  //   person.location &&
  //     person.location.timezone &&
  //     person.location.timezone.offset
  // ); //+7:00, undefined, +9:00
  console.log(person?.location?.timezone?.offset); //+7:00, undefined, +9:00
  console.log(person?.location?.timezone?.offset || "hello world"); //+7:00, hello world, +9:00
});
