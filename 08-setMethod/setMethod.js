const menu = [
  {
    name: "pancakes",
    category: "breakfast",
  },
  {
    name: "burger",
    category: "lunch",
  },
  {
    name: "steak",
    category: "dinner",
  },
  {
    name: "bacon",
    category: "breakfast",
  },
  {
    name: "eags",
    category: "breakfast",
  },
  {
    name: "pasta",
    category: "dinner",
  },
];
//map - get all instances
//new Set - narrow down
//['all'...] - turn it back to array

// const categories = menu.map((item) => item.category);
// console.log(categories);

// const categories = new Set(menu.map((item) => item.category));
// console.log(categories); //Set { 'breakfast', 'lunch', 'dinner' }

// const categories = [...new Set(menu.map((item) => item.category))];
// console.log(categories); //[ 'breakfast', 'lunch', 'dinner' ]

const categories = ["all", ...new Set(menu.map((item) => item.category))];
console.log(categories); //['all', breakfast', 'lunch', 'dinner' ]
const result = document.querySelector(".result");
result.innerHTML = categories
  .map((category) => {
    return `<button>${category}</button>`;
  })
  .join("");
