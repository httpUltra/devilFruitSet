const userList = document.getElementById("list");
const licontainer = document.getElementById("list-container");
const userForm = document.querySelector("#textform");
const userInput = document.querySelector('input[name="textInput"]');
const newUser = userInput.value
const devilFruits = {
  logais: ["goro-goro", "pika-pika", "hie-hie"],
  paramecias: ["gomu-gomu", "mochi-mochi", "gura-gura"],
  zoans: [
    "tori-tori: model phoenix",
    "hito-hito: model Human",
    "Uo-uo: model dragon",
  ],
};

userForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const newList = document.createElement("li");
  newList.classList.add('newli');

  if (userInput.value) {
    newList.innerHTML = userInput.value + " eater of the " + randomFruit();
    userList.insertBefore(newList, userList.firstChild);
  } else {
    alert("need text");
  }
});

const allFruit = Object.values(devilFruits).flat();

function randomFruit() {
  if (allFruit.length === 0) {
    alert("No more fruits")
  }
  const index = Math.floor(Math.random() * allFruit.length); // get random index
  const fruitPull = allFruit.splice(index, 1)[0]; // remove the fruit at that index and get it
  return fruitPull;
}









//function randomFruit() {
  //fruitPull = allFruit[Math.floor(Math.random() * allFruit.length)];
  //return fruitPull;
//}
//
//console.log(randomFruit());

