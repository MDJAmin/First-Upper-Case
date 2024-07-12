"use strict";
function capitalizeFirstLetterOfEachWord(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

const sentence = prompt("Enter your word");
const capitalizedSentence = capitalizeFirstLetterOfEachWord(sentence);
console.log(capitalizedSentence);
