// Buisness Logic

var pingPong = function(userInput) {
  var userNumber = parseFloat(userInput);
  var pingPongNumber = roundNuber(userNumber);
  var resultNumbers = countToNumber(pingPongNumber);
  var resultArray = findMultiples(resultNumbers);
  resultArray.forEach(function(item) {
    $('.results ul').append(`<li>${item}</li>`);
  });
};

var findMultiples = function(array) {
  var divisionNumbers = [15, 5, 3];
  var replaceWords = ["PING-PONG", "PONG", "PING"];
  var multiplesArray = [];
  var j = 0
  divisionNumbers.forEach(function(number) {
    array.forEach(function(item) {
      if (item % number === 0) {
        multiplesArray.push(item);
      }
    });
    var replaceWord = replaceWords[j];
    for (var i = 0; i < multiplesArray.length; i++) {
      var itemIndex = array.indexOf(multiplesArray[i]);
      if (itemIndex >= 0) {
        array.splice(itemIndex, 1, replaceWord);
      }
    };
    j += 1;
    return array
  });
  return array;
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
    $('.results').hide();
    $('.results ul').text('');
    var userInput = $('.user-input input[name=number]').val();
    var result = pingPong(userInput);
    $('.results ul').text(result);
    $('.results').slideDown();
  });

});
