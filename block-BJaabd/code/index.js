// Condition
// Write your code below each problems:

/*
Write a program that asks the user his/her age and check for the following conditions :

- `if` the age is between 12-55 then print the message "You can participate in the marathon".
- `if` the age is between 4-11 then print the message " You are too young to participate in the marathon".
- `if` the age is less than 4 then print the message " Hey Kiddo! Can You Walk ?"
- `if` the age is greater than 55 then print the message " You are too old to participate in the marthon".
👇
*/
let userAge = +prompt("How old you are?");

if (userAge >= 12 && userAge <= 55 ) {
  alert("You can participate in the marathon");

} else if (userAge >= 4 && userAge <= 11) {
  alert("You are too young to participate in the marathon");

} else if (userAge < 4) {
  alert(" Hey Kiddo! Can You Walk ?")
  
} else {
  alert(" You are too old to participate in the marthon");
}


// Loops
/*
Given a positive integer `n`. Print the word (hello) in format of heeeello (letter 'e' must be repeated `n` times). Take input from prompt and print the result in alert.

Example:
n = 1 => output: hello
n = 7 => output: heeeeeeello
👇
*/
// [Your code goes here]

let n = +prompt("Please enter a number!");

let finalString = "";

for (let i = 1; i <= n ; i++) {
  finalString = finalString + "e";

}
alert(`h${finalString}llo`);

/*
Program to calculate the sum of first n natural numbers(1,2,3...n are known as natural numbers). Prompt user to enter n (using `prompt`) then based on input provided calculate and show result in `alert`.
👇
*/
// [Your code goes here]

let naturalNumber = +prompt("Please enter a Natural Number!");
let sumOfNumbers = 0;
for (let s = 1; s <= naturalNumber; s++) {
  sumOfNumbers += s ; 
}
alert (`The sum of first ${naturalNumber} natural numbers is ${sumOfNumbers}`);

/* Switch Statement

 🎖Using switch statement do the following

Take a number value from user and alert the message if it matches the conditions.
* [ ] ONE, if `number` is equal to 1.
* [ ] TWO, if `number` is equal to 2.
* [ ] THREE, if `number` is equal to 3.
* [ ] FOUR, if `number` is equal to 4.
* [ ] FIVE, if `number` is equal to 5.
* [ ] SIX, if `number` is equal to 6.
* [ ] SEVEN, if `number` is equal to 7.
* [ ] EIGHT, if `number` is equal to 8.
* [ ] NINE, if `number` is equal to 9.
* [ ] PLEASE TRY AGAIN, if  is none of the above.

*/
// [Your code goes here]
let enteredNumber = +prompt("Enter a number from 1-9!");
switch(enteredNumber) {
  case 1 :
    alert(`ONE`);
    break;
  case 2 :
    alert(`TWO`);
    break;
  case 3 :
    alert(`THREE`);
    break;
  case 4 :
    alert(`FOUR`);
    break;
  case 5 :
    alert(`FIVE`);
    break;
  case 6 :
    alert(`SIX`);
    break;
  case 7 :
    alert(`SEVEN`);
    break;
  case 8 :
    alert(`EIGHT`);
    break;
  case 9 :
    alert(`NINE`);
    break;
  default : 
    alert(`PLEASE TRY AGAIN!`)  
}

/*
🎖Using switch statement do the following

Take the value of `marks` (0-100) from user using `prompt` and `alert` the message (Your Grade is AA) as giver below.
* [ ] `AA` if `marks` is greater than 90.
* [ ] `AB` if `marks` is greater than 80 and less than or equal to 90
* [ ] `BB` if `marks` is greater than 70 and less than or equal to 80
* [ ] `BC` if `marks` is greater than 60 and less than or equal to 70
* [ ] `CC` if `marks` is greater than 50 and less than or equal to 60
* [ ] `CD` if `marks` is greater than 40 and less than or equal to 50
* [ ] `DD` if `marks` is greater than 30 and less than or equal to 40
* [ ] `FF` if `marks` is less than or equal to 30
*/

// [Your code goes here]
let marksScored = +prompt(`Marks you scored out of 100 is-`);

switch (true) {
  case marksScored >= 90 && marksScored <= 100 :
    alert(`Your Grade is AA`);
    break;
    case marksScored >= 80 && marksScored < 90 :
      alert(`Your Grade is AB`);
      break;
    case marksScored >= 70 && marksScored < 80 :
      alert(`Your Grade is BB`);
      break;
    case marksScored >= 60 && marksScored < 70 :
      alert(`Your Grade is BC`);
      break;
    case marksScored >= 50 && marksScored < 60 :
      alert(`Your Grade is CC`);
      break;
    case marksScored >= 40 && marksScored < 50 :
      alert(`Your Grade is CD`);
      break;
    case marksScored >= 30 && marksScored < 40 :
      alert(`Your Grade is CC`);
      break;
    case marksScored <= 30 && marksScored >= 0 :
      alert(`Your Grade is FF`);
      break;
  default: 
    alert (`Check again! You couldn't possibly have scored that!`)
    break;
}

/*
 🎖Write a JavaScript program that takes two `integers` from user (using prompt) and alerts the larger number.
*/
// [your code goes here]

let integer1 = +prompt(`Enter integer1!`);
let integer2 = +prompt(`Enter integer2!`);

switch (true) {
  case integer1 > integer2 :
    alert(integer1)
    break;
  case integer1 < integer2 :
    alert(integer2);     
    break;
  case integer1 = integer2 :
      alert(`both are equal`);     
      break;
  default:
      alert(`Enter valid input`)
    break;
}
/*
🎖Write a JavaScript conditional statement to find the sign (+, -) of product of three numbers. Take those three numbers from user using `prompt`. Display an alert box with the specified sign.
*/
// [Your code goes here]
let num1 = +prompt('Enter num1');
let num2 = +prompt('Enter num2');
let num3 = +prompt('Enter num3');

let product = num1 * num2 * num3;
if (product > 0) {
  alert(`The final value is positive`)
} else {
  alert(`The final value is negative`)
}


/* Calculator
 🎖Make a simple calculator with these functions. Using prompt, type conversion, if else statement. Use prompt to take the input from user i.e two numbers and an operation (Add, Sub, Mul, Div).

  ⛑ Rule
    * [ ] While substracting and dividing keep in mind the number one should be greater then number two. If not show alert saying `Number Two is larger then Number one`.
  ⚡️ Operations
    * [ ] Add
    * [ ] Sub
    * [ ] Mul
    * [ ] Div
*/

// [Your code goes here]

let number1 = +prompt("Enter  Number1");
let number2 = +prompt("Enter  Number2");
let operation = prompt(`What Mathemetical operation you want to perform? 
                        add, sub, multiply or divide ?`  )

// SWITCH STATEMENT

switch (true) {
  case operation == "add" :
    alert(number1 + number2);
    break;
  case operation == "sub" && number1 > number2 :
    alert(number1 - number2);
    break;
  case operation == "sub" && number1 < number2 :
    alert(`Number two is larger than Number one!`);
    break;
  case operation == "multiply" :
    alert(number1 * number2);
    break;
    case operation == "divide" && number1 > number2 :
    alert(number1 / number2);
    break;
    case operation == "divide" && number1 < number2 :
    alert(`Number two is larger than Number one!`);
    break;
  default:
    alert(`Enter a valid value`);
    break;
}

