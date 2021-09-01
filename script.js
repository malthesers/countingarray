"use strict";

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded");

  init();
});

const array = [];
let counter = 0;

function init() {
  //Initialise loop
  loop();
}

function loop() {
  //Increment counter by 1
  counter++;

  if (counter < 10) {
    array.unshift(counter);
  } else {
    array.unshift(counter);
    array.pop();
  }

  //Log array
  console.log(array);

  //Recur loop
  setTimeout(loop, 1000);
}
