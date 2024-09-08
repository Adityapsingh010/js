"use strict";

function categorizeNumber(num) {
  switch (num) {
    case 0:
      console.log("One");
      break;

    case 1:
      console.log("Two");
      break;

    case 2:
      console.log("Three");
      break;

    case 3:
      console.log("Three");
      break;

    default:
      console.log("Unknown number");
      break;
  }
}

categorizeNumber(1); // Output: One.

categorizeNumber(2); // Output: Two.

categorizeNumber(3); // Output: Three.

categorizeNumber(5); // Output: Unknown Number.