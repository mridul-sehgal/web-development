var nAme = prompt("enter your name");
firstLetter = nAme.slice(0, 1);
restOfName = nAme.slice(1, nAme.length);
alert("Hello," + firstLetter.toUpperCase() + restOfName.toLocaleLowerCase());
