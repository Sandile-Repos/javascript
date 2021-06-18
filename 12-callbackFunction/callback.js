function makeUppercase(value) {
  console.log(value.toUpperCase());
}

function reversesString(value) {
  console.log(value.split("").reverse().join(""));
}

function handleName(name, cb) {
  const fullName = `${name} smith`;
  cb(fullName);
}

// handleName("peter", makeUppercase); //PETER SMITH
// handleName("peter", reversesString); //htims retep

// handleName("peter", function (value) {
//   //console.log(value); //peter smith
// });
handleName("peter", (value) => {
  console.log(value); //peter smith
});

const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  console.log("hello world"); //hello world
});

//array methods, setTimeout, event listeners ect
