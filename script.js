"use strict";

const capitalizeFirstLetterOfEachWord = (str) =>
  str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

function capitalize() {
  const input = document.getElementById("userInput").value.trim();
  const outputDiv = document.getElementById("output");

  if (input) {
    outputDiv.textContent = capitalizeFirstLetterOfEachWord(input);
  } else {
    outputDiv.textContent = "Please enter some text!";
  }
}
