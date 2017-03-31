// Buisness Logic
var pingPong = function(userInput) {
  var userNumber = parseFloat(userInput);
  var pingPongNumber = roundNuber(userNumber);
  var resultNumbers = countToNumber(pingPongNumber);

  return `<li>${resultNumbers}</li>`;

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

    $('.results ul').append(result);
    $('.results').slideDown();

  });


});
