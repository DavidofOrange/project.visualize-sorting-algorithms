/* Example Code
      The following is just some example code for you to play around with.
      No need to keep this---it's just some code so you don't feel too lonely.
*/

// How can we use require here if it's frontend? We can thank webpack.
const Sort = require("./Sort");

// A link to our styles!
require("./index.css");

const sort = new Sort(inputArray);
let inputArray = [];

let input1 = document.querySelector("#input1").value;
let input2 = document.querySelector("#input2").value;
let input3 = document.querySelector("#input3").value;
let input4 = document.querySelector("#input4").value;
let input5 = document.querySelector("#input5").value;
let input6 = document.querySelector("#input6").value;

function createArray(inputValue) {
  if (typeof inputValue !== "number") {
    inputArray.push(parseInt(inputValue));
  }
}
createArray(input1);
createArray(input2);
createArray(input3);
createArray(input4);
createArray(input5);
createArray(input6);

function createTitle(slogan) {
  const container = document.createElement("h1");
  const textNode = document.createTextNode(slogan);
  container.appendChild(textNode);
  return container;
}

const title = createTitle(sort.returnValue("QuickSort"));
document.getElementById("title").appendChild(title);

/*
    An simple example of how you can make your project a bit more
    interactive, if you would like.

    In our `index.html` page, we have a short form.
    Here is the code that talks to it.
  */
function changeTitle(event) {
  event.preventDefault();
  // console.log('What is an event?', event);
}

const form = document.querySelector("form");
document.addEventListener("DOMContentLoaded", () => {
  form.onsubmit = changeTitle;
});
