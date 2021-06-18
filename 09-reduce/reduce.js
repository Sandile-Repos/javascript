//Reduce
//iterates, callback function
//reduces to single value - number, array, object
//1st parameter ('acc') - total of all calculations
//2nd parameter ('curr') - current iterations/ value

const staff = [
  {
    name: "bob",
    age: 20,
    position: "developer",
    salary: 100,
  },
  {
    name: "anna",
    age: 25,
    position: "inter",
    salary: 10,
  },
  {
    name: "susy",
    age: 30,
    position: "the boss",
    salary: 400,
  },
  {
    name: "peter",
    age: 26,
    position: "designer",
    salary: 300,
  },
];

// const dailyTotal = staff.reduce((total, person) => {
// //   console.log(total); // 0 0 0 0;
//   console.log(total); // 0, 100, 110 510;
//   console.log(person.salary); // 100 10 400 300;
//   total += person.salary
//   return total;
// }, 0);
// console.log(dailyTotal); //810

const dailyTotal = staff.reduce((total, person) => {
  console.log(total); // 1000, 1100, 1110, 1510;
  console.log(person.salary); // 100, 10, 400, 300;
  total += person.salary;
  return total;
}, 1000);
console.log(dailyTotal); //1810

//Reduce - Objects

// cart example
const cart = [
  {
    title: "Samsung Galaxy S7",
    price: 599.99,
    amount: 1,
  },
  {
    title: "google pixel ",
    price: 499.99,
    amount: 2,
  },
  {
    title: "Xiaomi Redmi Note 2",
    price: 699.99,
    amount: 4,
  },
  {
    title: "Xiaomi Redmi Note 5",
    price: 399.99,
    amount: 3,
  },
];

let { totalItems, cartTotal } = cart.reduce(
  (total, cartItem) => {
    const { amount, price } = cartItem;
    //count items
    total.totalItems += amount;
    total.cartTotal += amount * price;

    return total;
  },
  {
    totalItems: 0,
    cartTotal: 0,
  }
);

cartTotal = parseFloat(cartTotal.toFixed(2));
console.log(totalItems, cartTotal); //10 5599.9

//github repos example
//  const url = `https://api.github.com/users/${username}/repos`;
const url = "https://api.github.com/users/Sandile-Repos/repos";
const fetchRepos = async () => {
  const response = await fetch(url);
  const data = await response.json();
  //   console.log(data);
  const newData = data.reduce((total, repo) => {
    const { language } = repo;
    // if (total[language]) {
    //   total[language] = total[language] + 1;
    // } else {
    //   total[language] = 1;
    // }
    if (language) {
      total[language] = total[language] + 1 || 1;
    }
    // console.log(total);
    return total;
  }, {});
  console.log(newData); //{JavaScript: 11, HTML: 1}
};

fetchRepos();
