/* Code for WATS 3020 FizzBuzz Assignment */
/* Create a program that takes a maximum number and makes sure it is an integer greater than zero. Design logic that finds if the numbers between 1 and the maximum number are divisible by 3, 5, and 15. If divisible by 3, store Fizz, if divisible by 5, store Buzz, and if both, store FizzBuzz.
 */

let isInteger,
    maxNumber,
    fbResults,
    fbText;

isInteger = false;
// take input
while (!isInteger) {
    let input = window.prompt ("Please enter a number 1 or greater. ");
    if (input === null) break;
    if (input.indexOf ('.') < 0) {
        maxNumber = Number.parseInt(input);
        isInteger = Number.isSafeInteger(maxNumber) && maxNumber > 0;
    }
}
// find results
fbResults = [];
for (let i = 1; i <= maxNumber; i++) {

   let tempString = "";
   if (i % 3 === 0) {
       tempString += "Fizz";
   }
   if (i % 5 === 0){
       tempString += "Buzz";
   }

   if (tempString === "") {
       fbResults.push(i);
   }   else {
       fbResults.push(tempString);
   }
}
// combine results for output
fbText = "";
for (i = 0; i < fbResults.length; i++){
    fbText = fbText + fbResults[i] + "\n";
}
// display results
///////////////////////////////////////////////////////////////////////
// Do not edit below this line unless you are doing something fancy!
//////////////////////////////////////////////////////////////////////
let numDisplay = document.querySelector("#max-number");
numDisplay.innerHTML = maxNumber;
let output = document.querySelector("#output");
output.innerHTML = fbText;
