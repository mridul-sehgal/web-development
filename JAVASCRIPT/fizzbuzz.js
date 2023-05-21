var count = [];
var number = 1;
function fizzbuzz() {
  if (number % 3 == 0) {
    count.push("fizz");
  } else if (number % 5 == 0) {
    count.push("buzz");
  } else if (number % 5 == 0 && number % 3 == 0) {
    count.push("fizzbuzz");
  } else {
    count.push(number);
  }

  number++;

  console.log(count);
}
