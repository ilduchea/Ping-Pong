var pingPong = function(userInput) {
  var userNumber = parseFloat(userInput);
  var pingPongNumber = roundNuber(userNumber);
  console.log(pingPongNumber);
};

var roundNuber = function (number) {
  if (number % 1 === 0){
    return number;
  } else {
    $('.error').text("Your number has been rounded to the nearest whole number.")
    return Math.round(number);
  }
};
$(function(){
  $('#submit').click(function() {
    var userInput = $('.user-input input[name=number]').val();
    var result = pingPong(userInput);

  });


});
