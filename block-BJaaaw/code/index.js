// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/
let num = Number(prompt("Please Enter A number"));
if (num % 2 == 0 ) {
  alert ("The Number is even");
} else {
  alert ("The Number is odd");
}


// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.

let numA = Number(prompt("Please Enter A number"));

let numB = Number(prompt("Please Enter another number"));

if (numA > numB) {
  alert(numA);
} else if (numA < numB ) {
  alert(numB);
} else {
  alert('Both are equal!');
}

// 3. Convert the above code using`?` terniary operator

numA >= numB ? alert(numA) : alert(numB);

/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/
let houseName = prompt("Which House You Belong to?");
if (houseName === "stark" || houseName === "Stark" || houseName === "STARK") {
  alert ("Winter is coming!");
} else if (houseName === "lannister" || houseName === "Lannister" || houseName === "LANNISTER") {
  alert ("A lannister always pays his debt")
} else {
  alert ("All men must die");
}

// 5. Convert the above code using`?` terniary operator

let houseName = prompt("Which House from GOT you relate to?");
houseName === "stark" ? alert("Winter is coming") 
              : houseName === "lannister" ? 
                alert("lannister always pays his debt") 
              : alert ("All men must die"); 

// Switch

switch (true) {
  case houseName === "stark" : 
        alert("Winter is coming");
  break;
  case houseName === "lannister" : 
       alert("lannister always pays his debt");
       break;
  default : 
      alert ("All men must die");
}

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.
let monthNumber = Number(prompt("Enter the month Number"))
switch (true) {
  case monthNumber === 1 || monthNumber === 3 || monthNumber === 5 || monthNumber === 7 || 
      monthNumber === 8 || monthNumber === 10 || monthNumber === 12 : 
       alert("This  month has 31 days");
       break;
  case monthNumber === 2 : 
       alert("This  month has 28/29 days");
       break;    
  case monthNumber === 4 || monthNumber === 6 || monthNumber === 9 || monthNumber === 11 : 
       alert("This  month has 30 days");
       break;   
  default : 
       alert("There are only twelve months in a year!");
}

/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.
  You will find out the in -hand amount by deducting the tax amount from salery.
  Conditions are given below.

  - `Salary <= 20000` tax is 10 %
  - `Salary <= 50000` tax is 20 %
  - `Salary > 50000` tax is 30 %
*/
let salary = Number(prompt("Please enter your salery!"));
if (salary <= 20000) {
  alert(`Your in-hand salary is ${salary - (salary * 10 / 100)}`);
} else if (salary <= 50000) {
  alert(`Your in-hand salary is ${salary - (salary * 20 / 100)}`);
} else if (salary > 50000) {
  alert(`Your in-hand salary is ${salary - (salary * 30 / 100)}`);
}


//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/

let marks = Number(prompt("How many marks you scored in Mathematics?"));
if (marks > 100) {
      alert("Marks can't be greater than 100");
} else if (marks >= 80 && marks <= 100) {
      alert("Grade A");
} else if (marks >= 50 && marks < 80) {
      alert("Grade B");
} else if (marks >= 30 && marks < 50) {
      alert("Grade C");
} else if ( marks > 0 && marks < 30 ) {
      alert("Grade D");
} else {
  alert("Fail!")
}

// SWITCH
switch (true) {
  case marks > 100 : 
    alert("Marks can't be greater than 100");
    break;
  case marks >= 80 && marks <= 100 : 
    alert("Grade A");
    break;
  case marks >= 50 && marks < 80 : 
    alert("Grade B");
    break;
    case marks >= 30 && marks <= 50 : 
    alert("Grade C");
    break;
    case marks > 0 && marks < 30 : 
    alert("Grade D");
    break;
    default : 
    alert("Fail!")
}


/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/
let weather = prompt("What is the weather like Outside?");

if (weather == "sunny") {
  alert ("Wear a T-Shirt!");
} else if (weather == "rainy") {
  alert(`Don't forget to take your raincoat!`);
} else if (weather == "hot") {
  alert(`Get a hanky!`);
} else if (weather == "freezing") {
  alert(`Get your sweater on!`);
} else {
  alert ("Not a valid input");
}
