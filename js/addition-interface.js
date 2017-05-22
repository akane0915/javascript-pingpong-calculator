var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $('#addition-form').submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($('#number1').val());
    var number2 = parseInt($('#number2').val());
    var addCalculator = new Calculator();
    var output = addCalculator.add(number1, number2);
    $('#solution').append('<p>Sum = ' + output + '</p>');
  });
});
