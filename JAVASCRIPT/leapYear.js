var year = prompt(" ");
if (year % 4 == 0) {
  if (year % 100 == 0) {
    if (year % 400 == 0) {
      console.log(" leep year");
    } else {
      console.log("not a leep year");
    }
  } else {
    console.log(" leep year");
  }
}
