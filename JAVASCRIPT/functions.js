function robot(money) {
  var numberOfBottles = Math.floor(money / 1.5);
  var change = money % 1.5;
  alert("bottles baught: " + numberOfBottles + " , change: " + change);
}

robot(17);
