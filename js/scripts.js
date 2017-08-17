//Business Logic
var romanNumeral;
function numbersToRoman(userNumber) {
  var result = [];

  console.log('this is roman numeral:', romanNumeral);

  if (userNumber > 4000) {
    return alert("Please enter a number smaller than 4,000.");
  } else {
    while (userNumber > 0) {
      if (userNumber - 1000 >= 0) {
        result.push("M");
        userNumber -= 1000;
      } else if (userNumber - 900 >= 0) {
        result.push("CM");
        userNumber -= 900;
      } else if (userNumber - 500 >= 0) {
        result.push("D");
        userNumber -= 500;
      } else if (userNumber - 400 >= 0) {
        result.push("CD");
        userNumber -= 400;
      } else if (userNumber - 100 >= 0) {
        result.push("C");
        userNumber -= 100;
      } else if (userNumber - 90 >= 0) {
        result.push("XC");
        userNumber -= 90;
      } else if (userNumber - 50 >= 0) {
        result.push("L");
        userNumber -= 50;
      } else if (userNumber - 40 >= 0) {
        result.push("XL");
        userNumber -= 40;
      } else if (userNumber - 10 >= 0) {
        result.push("X");
        userNumber -= 10;
      } else if (userNumber - 9 >= 0) {
        result.push("IX");
        userNumber -= 9;
      } else if (userNumber - 5 >= 0) {
        result.push("V");
        userNumber -= 5;
      } else if (userNumber - 4 >= 0) {
        result.push("IV");
        userNumber -= 4;
      } else if (userNumber - 1 >= 0) {
        result.push("I");
        userNumber -= 1;
      }
    }
    romanNumeral = result.join("");
    return result;
  }


}



// function test(number){
//   var array = [];
//   var m = 1000;
//   var c = 100;
//   var x = 10;
//   if(number / m){
//     array.push("M");
//     number = number % m;
//   } else if(number / c) {
//     array.push("c");
//     number = number % c;
//   } else {
//     array.push("x");
//     number = number % x;
//   }
//   return array;
// }


//Interface Logic
$(document).ready(function(){
  $("form.form").submit(function(e){
    e.preventDefault();
    var userNumber = Number($("input#inputNumber").val());
    console.log(numbersToRoman(userNumber));
    console.log(romanNumeral);
  });
});
