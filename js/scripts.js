//Business Logic
var numbersToRoman = function(userNumber){
  var result = [];
  //debugger;
  if (userNumber % 3 === 0) {
    result.push('III');
  } else if (userNumber % 2 === 0){
    result.push('II');
  }  else if(userNumber % 1 === 0){
    result.push('I');
  }
  return result;
}


//Interface Logic
$(document).ready(function(){
  $("form.form").submit(function(e){
    e.preventDefault();
    var userNumber = Number($('input#inputNumber').val());
    console.log(numbersToRoman(userNumber));
  });
});
