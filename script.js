// Question - 1.Date Object:  

// a. Create a function that takes a date in the format "YYYY-MM-DD" as a parameter and returns
//  the day of the week for that date. The function should use the Date object.
// b. Implement the function to display the day of the week for the current date.


// Ans to Q1-(a)
// function newDate (){
//   const x = new Date('2020-03-25');
//   return x;
// }
// console.log(newDate());

// Answer to Q1- (b)
// function newDate (){
//   let day;
//    switch (new Date().getDay()) {
//     case 0:
//       day = "Sunday";
//       break;
//     case 1:
//       day = "Monday";
//       break;
//     case 2:
//        day = "Tuesday";
//       break;
//     case 3:
//       day = "Wednesday";
//       break;
//     case 4:
//       day = "Thursday";
//       break;
//     case 5:
//       day = "Friday";
//       break;
//     case 6:
//       day = "Saturday";
//   }
//   return day;
// }
// console.log(newDate());








//Question - 2.Math Object:

// a. Write a JavaScript function that takes an array of numbers as input and returns the square root 
// of the sum of squares of all the numbers. Use the Math object to perform the necessary calculations.
// b. Implement the function to display the square root of the sum of squares for an array of numbers.


//Answer to Q2-(a)
// const numbers = [2,3,4,5,6,7,8];
// numbers.forEach(function(element, index, array){
//     array[index] = element* element; 
// });
//   let ab = numbers;
//   let txt = "";
//   ab.reduce(function(total, value, index, array){
//      txt = total + value;
//      return txt;
//   });
// let ac = txt;
//   let bc = Math.sqrt(ac)
//   console.log(bc);

// Answer to Q2-(b)
// const number = [3, 6, 9, 12, 15];
// let num = "";
// number.reduce(function(total, value, index, array){
//   num = total + value;
//   return num;
// });
// let numb = Math.sqrt(num);
// console.log(numb);








// Question -3. Numbers:
// a. Write a JavaScript function that takes a positive integer as input and returns 
// true if it is a prime number, otherwise returns false.
// b. Implement the function to check if a given positive integer is a prime number.


//Answer to the question no 3-(a)+(b)
// program to check if a number is prime or not

// take input from the user
// const number = parseInt(prompt("Enter a positive number: "));
// let isPrime = true;

// // check if number is equal to 1
// if (number === 1) {
//     console.log("1 is neither prime nor composite number.");
// }

// // check if number is greater than 1
// else if (number > 1) {

//     // looping through 2 to number-1
//     for (let i = 2; i < number; i++) {
//         if (number % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }

//     if (isPrime) {
//         console.log(`${number} is a prime number`);
//     } else {
//         console.log(`${number} is a not prime number`);
//     }
// }

// // check if number is less than 1
// else {
//     console.log("The number is not a prime number.");
// }








// Question -4.  Window Object:
// a. Create a function that opens a new window with a specified URL and dimensions (width and height).
// b. Implement the function to open a new window with the URL "https://www.example.com" and dimensions 800x600.

//Answer to question 4-(a)
/* <a href="../html-link.htm" target="popup" onclick="window.open('../html-link.htm','name','width=600,height=400')">Open page in new window</a> */

//Answer to question 4-(b)
//  document.getElementById('btn-open');
// function myFunction() {
//   let link = document.createElement("a")
//   link.href = "https://example.com"
//   link.target = "_blank"
//   link.click()
// } 





// Question - 5.Navigator Object:
// a. Write a JavaScript function that detects the user's browser name and 
// version using the navigator object.
// b. Implement the function to display the user's browser name and version.


//Answer to the question -5-(a)+(b)
// navigator.saysWho = (() => {
//     const { userAgent } = navigator
//     let match = userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []
//     let temp
  
//     if (/trident/i.test(match[1])) {
//       temp = /\brv[ :]+(\d+)/g.exec(userAgent) || []
  
//       return `IE ${temp[1] || ''}`
//     }
  
//     if (match[1] === 'Chrome') {
//       temp = userAgent.match(/\b(OPR|Edge)\/(\d+)/)
  
//       if (temp !== null) {
//         return temp.slice(1).join(' ').replace('OPR', 'Opera')
//       }
  
//       temp = userAgent.match(/\b(Edg)\/(\d+)/)
  
//       if (temp !== null) {
//         return temp.slice(1).join(' ').replace('Edg', 'Edge (Chromium)')
//       }
//     }
  
//     match = match[2] ? [ match[1], match[2] ] : [ navigator.appName, navigator.appVersion, '-?' ]
//     temp = userAgent.match(/version\/(\d+)/i)
  
//     if (temp !== null) {
//       match.splice(1, 1, temp[1])
//     }
  
//     return match.join(' ')
//   })()
  
//   console.log(navigator.saysWho)






// Question -6.   Geolocation:
// a. Implement a JavaScript function that retrieves the user's current location
// (latitude and longitude) using the geolocation API.


//Answer to the question 6-(a)
// function Glocation(){
//     if ("geolocation" in navigator) {
//         navigator.geolocation.getCurrentPosition((position) => {
//           return navigator;// show the location on a map, perhaps using the Google Maps API
//         });
//       } else {
//         // Give the user a choice of static maps instead perhaps
//       }
// }
//  console.log(Glocation);




// Question -7.  JS Common Events:
// Implement a webpage with the following functionality:
// a. When the user clicks anywhere on the page, display an alert with the coordinates (x, y) of the click.
// b. When the user presses any key on the keyboard, display an alert with the key code of the pressed key.
// c. When the user moves the mouse over an image, change the image source to another image of your choice.


//Answer to the question 7-(a)
// document.body.addEventListener("click", function (evt) {
//     console.dir(this);
//     //note evt.target can be a nested element, not the body element, resulting in misfires
//     console.log(evt.target);
//     alert("body clicked");
// });


//Answer to the question 7-(b)
// function doCheck() {
//     var keyCode = (event.which) ? event.which : event.keyCode;
//     if ((keyCode == 8) || (keyCode == 46) || (keyCode == 32))
//         alert('The column is readonly and is non-editable');
//     event.returnValue = false;
// }


//Answer to the question 7-(c)
// var image = document.getElementById("image");

// //Now, we need to add an Event Listener to listen when the image gets mouse over.

// image.addEventListener('mouseover', function(){
//   image.src = "path/to/newimage"
// })
// image.addEventListener('mouseout', function(){
//     image.src = "path/to/otherimage"
//   })






// Question -8.  HTML DOM Document:
// a. Create a webpage with a button and a paragraph element.
// b. Implement a JavaScript function that changes the text content of the paragraph element to "Button Clicked!" when the button is clicked

//Answer to the question 8-(a)
// const btn = document.getElementById('someBtnId');
// const someHeader = document.getElementById('someHeader');

// btn.addEventListener('click', function() {
//   someHeader.textContent="Your Custom Text Here";
// });

//Answer to the question 8-(b)
// type = "button";
// function changeText(value) {
//     document.getElementById('pText').innerHTML = "You pressed " + value;
//     if(value == "Button 3")
//     {
//         document.getElementById('pText').setAttribute('style', 'color: green');}
//     }






// Question -9.  JS DOM Working with Form Input:

// Implement a webpage with a form that has the following fields:
// a. Name (text input)
// b. Email (email input)
// c. Password (password input)
// d. Confirm Password (password input)
// e. Submit (button)

// Implement JavaScript validation for the form fields:
// f. Name should not be empty and should contain only letters.
// g. Email should be a valid email address.
// h. Password should have a minimum length of 8 characters and contain at least 
// one uppercase letter, one lowercase letter, and one digit.
// i. Confirm Password should match the Password field.
// j. Display appropriate error messages for invalid fields.


//Answer to the question 9-(a)+(b)+(c)+(d)+(e)
// Please see the index.html page

//Form validation 9-(f)
// function validateForm(form) {

//     var nameField = form.name;
//     var addressLine01 = form.addressLine01;

//     if (isNotEmpty(nameField)) {
//         if(isNotEmpty(addressLine01)) {
//             return true;
//         {
//     {
//     return false;
// }

// function isNotEmpty(field) {

//     var fieldData = field.value;

//     if (fieldData.length == 0 || fieldData == "" || fieldData == fieldData) {

//         field.className = "FieldError"; //Classs to highlight error
//         alert("Please correct the errors in order to continue.");
//         return false;
//     } else {

//         field.className = "FieldOk"; //Resets field back to default
//         return true; //Submits form
//     }
// }




// Question -10.  DOM Manipulate CSS Class:

// a. Create a webpage with a button and a paragraph element.
// b. Implement a JavaScript function that adds a CSS class named "highlight" 
// to the paragraph element when the button is clicked. The "highlight" class 
// should change the background color of the paragraph to yellow.