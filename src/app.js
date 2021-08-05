const Sort = require("./Sort");

require("./index.css");

let sort = new Sort();
let inputArray = [];

document.getElementById("submit").addEventListener("click", () => {
  quicksortTest();
  displayQuickSort();
});

function quicksortTest() {
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

  return inputArray;
}

function displayQuickSort() {
  let array = document.querySelector("#array");
  array.innerHTML = `${inputArray}`;
  let sortedArray = document.querySelector("#sorted_array");
  sortedArray.innerHTML = `${sort.sort(inputArray)}`;
}

function createTitle(slogan) {
  const container = document.createElement("h1");
  const textNode = document.createTextNode(slogan);
  container.appendChild(textNode);
  return container;
}

const title = createTitle(sort.returnValue("QuickSort"));
document.getElementById("title").appendChild(title);

function changeTitle(event) {
  event.preventDefault();
  // console.log('What is an event?', event);
}

const form = document.querySelector("form");
document.addEventListener("DOMContentLoaded", () => {
  form.onsubmit = changeTitle;
});
