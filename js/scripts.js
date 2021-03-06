// Buisness Logic

var pingPong = function(userInput) {
  var userNumber = parseFloat(userInput);
  var pingPongNumber = roundNuber(userNumber);
  var resultNumbers = countToNumber(pingPongNumber);
  // var splitMultiples = findMultiples(resultNumbers);
  // var resultArray = splitArray(splitMultiples);
  var resultArray = findMultiples(resultNumbers);
  // var pingArray = [];
  // var pongArray = [];
  // var pingPongArray = [];
  resultArray.forEach(function(item) {
    $('.results ul').append(`<li>${item}</li>`);
  });
};

// var splitArray = function(array) {
//   var multiplesString = array.toString();
//   var stringArray = multiplesString.split(",PING,").join(",PING,*");
//   var pingsArray = stringArray.split(",*")
//   var pongsArray = pingsArray.split(",PONG,").join(",PONG,*");
//   var pingsPongsArray = pongsArray.split(",*")
//   var resultingArray = pingsPongsArray.split(",PING-PONG,").join(",PING-PONG,*");
//   var finalArray = resultingArray.split(",*")
//   return finalArray;
// };

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
  $('form').submit(function(e) {
    e.preventDefault();
    $('.results').hide();
    $('.results ul').text('');
    var userInput = $('.user-input input[name=number]').val();
    var result = pingPong(userInput);
    $('.results #ping ul').text(result);
    // $('.results #pong ul').text(result);
    // $('.results #ping-pong ul').text(result);
    $('.results').slideDown();
  });

});
