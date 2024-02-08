// function deleteInvalids(arr) {
//     // Checking if the input is an array
//     if (!Array.isArray(arr)) {
//         return "Error: Input is not an array";
//     }

//     // Filter out non-numeric values from the array
//     return arr.filter(item => typeof item === 'number' && !isNaN(item));
// }

// // স্যাম্পল ইনপুট
// const inputArray = [NaN, 1, 12, 0, -1, undefined];
// const outputArray = deleteInvalids(inputArray);
// console.log(outputArray); // [1, 12, 0, -1]

// // একটা অবৈধ ইনপুট দিয়ে চেক করা
// const invalidInput = "not an array";
// const errorOutput = deleteInvalids(invalidInput);
// console.log(errorOutput); // Error: Input is not an array





function deleteInvalids(arr) {
    if (!Array.isArray(arr)) {
      throw new Error("Input must be an array");
    }
    
    const validNumbers = arr.filter(element => typeof element === "number");
    return validNumbers;
  }
  const inputArray = [NaN, 'nahid', 1, 12, 0, -1, undefined];
const outputArray = deleteInvalids(inputArray);
console.log(outputArray); // [1, 12, 0, -1]
