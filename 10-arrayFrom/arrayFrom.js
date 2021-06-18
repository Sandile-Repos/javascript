//Array.from - NOT ON PROTOTYPE

//from - returns Array Object from an object
//with a length property or an iterable object
//from - turns array-like/ish into array - string, nodeList, Set

const udemy = "udemy";
console.log(Array.from(udemy)); //[ 'u', 'd', 'e', 'm', 'y' ]

const text = document.querySelectorAll(".text");
console.log(text); //NodeList(3) [h2.text, h2.text, h2.text]

const newText = Array.from(text).find((item) => item.textContent === "person");
console.log(newText); //<h2 class="text">person</h2>

// const items = Array.from({ length: 12 }, (_, index) => {
//   return index;
// });
// console.log(items); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

// const items = Array.from({ length: 90 }, (_, index) => {
//   return index;
// });
// const itemPerPage = 14;
// const pages = Math.ceil(items.length / itemPerPage);
// console.log(pages); //7

const items = Array.from({ length: 90 }, (_, index) => {
  return index;
});
const itemsPerPage = 14;
console.log(items); //[list with numbers 0 to 89 ]
const pages = Math.ceil(items.length / itemsPerPage);

const newItems = Array.from({ length: pages }, (_, index) => {
  const start = index * itemsPerPage;
  const tempItems = items.slice(start, start + itemsPerPage);
  return tempItems;
});
console.log(newItems);
// (7) [Array(14), Array(14), Array(14), Array(14), Array(14), Array(14), Array(6)]
// 0: (14) [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// 1: (14) [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]
// 2: (14) [28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41]
// 3: (14) [42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55]
// 4: (14) [56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69]
// 5: (14) [70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83]
// 6: (6) [84, 85, 86, 87, 88, 89]
