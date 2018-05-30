/*a = parseInt(prompt("Enter the number"));
confirm(a*a);
var minute, hour, day, year;

minute = 1;
hour = minute * 60;
day = hour * 24;
year = day * 365;
confirm(hour);
confirm(day);
confirm(year);
a = parseInt(prompt("Enter first number"));
b = parseInt(prompt("Enter second number"));
alert(a+b);
alert(a-b);
alert(a*b);
alert(a/b);




var season = prompt("Enter the season");

if(season == "Winter"){
	alert("Winter")
} else if(season == "winter"||season == "spring"||season == "summer"||season == "automn") {
	alert("1 must be Uppercase");
} else if(season == "Summer") {
	alert("Summer")
} else if(season == "Spring") {
	alert("Spring")
} else if(season == "Automn") {
	alert("Automn")
} else {
	alert("It is not a season")
}


var z = +prompt("Enter the number in range from 0 to 59");

if(z<=15 && z >=0) {
	alert("Number from first quarter")
} else if(z>15 && z<=30) {
	alert("Number from second quarter")
} else if(z>30 && z<=45) {
	alert("Number from third quarter")
} else if(z>45 && z<=60) {
	alert("Number from fourth quarter")
} else {
	alert("Number is not in a specified range")
}

z = +prompt("Enter the number in range from 0 to 59");

(z<=15 && z >=0) ? alert("Number from first quarter") : 
(z>15 && z<=30) ? alert("Number from second quarter") :
(z>30 && z<=45) ? alert("Number from second quarter") :
(z>45 && z<=60) ? alert("Number from second quarter") : 
alert("Number is not in a specified range");


var z = +prompt("Enter first number");
var x = +prompt("Enter second number");
  if(x>z) {
  	console.log(x);
  } else if (z>x) {
  	console.log(z);
  } else 
  	console.log("Numbers are equal");


function discount() {

	var sumPurchase = +prompt("Enter the sum of your purchase");
	var currency = 'UAN';


	if(sumPurchase<1000) {
		discountPurchase = sumPurchase * 0.03;
		console.log("Your discount is", discountPurchase,currency);
	} else if (sumPurchase>=1000 && sumPurchase  < 5000) {
		discountPurchase = sumPurchase * 0.05;
		console.log("Your discount is", discountPurchase,currency);
	} else if (sumPurchase>=5000) {
		discountPurchase = sumPurchase * 0.1;
		console.log("Your discount is", discountPurchase,currency);
	}
}
discount();
function biggerNumber() {
	
	var firstNumber = +prompt("Enter first number");
	var secondNumber = +prompt("Enter second number");

	if(firstNumber>secondNumber) {
		console.log(firstNumber);
	} else if (secondNumber>firstNumber) {
		console.log(secondNumber)
	} else {
		console.log("They are equal")
	}
}
biggerNumber();


function Price() {

	var priceFirstThing = +prompt("Enter price first thing");
	var priceSecondThing = +prompt("Enter price second thing");
	var quantityFirstThing = +prompt("Enter quantity first thing");
	var quantitySecondtThing = +prompt("Enter quantity second thing");
	var currency = "UAN";

	var firstThing = priceFirstThing * quantityFirstThing;
	var secondThing = priceSecondThing * quantitySecondtThing;
	var commonPrice = firstThing + secondThing;
	console.log(commonPrice + " " + currency);
}
Price();


var arr = [1,2,3,4,5,6];
	for (i = arr.length-1; arr[i] <= arr.length; i++) {
		console.log(arr[i]);  
	}



var sum = 0;
var arr = [1,2,3,4,5];
	for (i = 0; i < arr.length; i++) {
		sum = sum + arr[i];
		
	}
console.log(sum);

*/


