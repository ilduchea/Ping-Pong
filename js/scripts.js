// Buisness Logic

var pingPong = function(userInput) {
  var userNumber = parseFloat(userInput);
  var pingPongNumber = roundNuber(userNumber);
  var resultNumbers = countToNumber(pingPongNumber);
  var resultArray = findMultiples(resultNumbers);
  resultArray.forEach(function(item) {
    $('.results ul').append(`<li>${item}</li>`);
  }); ;

};

var replaceNumbers = function(array) {
  var indexNumber = array.indexOf(15);
  array.splice(indexNumber, 1, "PING-PONG");

  // array.forEach(function(number) {
  //   if (number % 15 === 0) {
  //     var indexNumber = array.indexOf(15);
  //     array.splice(indexNumber, 1, "PING-PONG");
  //   };
  // });
  return array;
};
var findMultiples = function(array) {
  var divisionNumbers = [3, 5, 15];
  array.forEach(function(item) {
    divisionNumbers.forEach(function(number) {
      if (item % number === 0) {
        console.log(item);
      }
    });
  });
};

var countToNumber = function(number) {
  var numberArray = [];
  var i = 1;
  while (i <= number) {
    numberArray.push(i);
    i++;
  };
  return numberArray;
};

var roundNuber = function (number) {
  if (number === 0) {
    $('.error').text("While the existential and mathmatical theories of zero are intriguing please enter a whole number above 0. Though do keep in mind that the larger the number is the longer it will take to run the program.");
  } else if (number % 1 === 0){
    return number;
  } else {
    $('.error').text("Your number has been rounded to the nearest whole number.")
    return Math.round(number);
  }
};


// User Interface Logic
$(function(){
  $('#submit').click(function() {
    var userInput = $('.user-input input[name=number]').val();
    var result = pingPong(userInput);

    $('.results ul').text(result);
    $('.results').slideDown();

  });


});
