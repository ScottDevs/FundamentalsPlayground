//JS File

// console.log("hello world");
// function add(x,y){
// 	console.log(x + y);
// }

// //Below is an Array
// //					0		1		  2			3	
// var classmates = ["Matt", "Tara", "Danielle", "Evan"];

// var typesOfSoda = new Array();
// typesOfSoda[0] = "Red Cream Soda"; 
// typesOfSoda[1] = "IBC";
// typesOfSoda[2] = "Mountain Dew";

// console.log(classmates);
// console.log(typesOfSoda);


// //Prints all names
// var myStringArray = ["Hello","World", "Danielle"];
// var arrayLength = myStringArray.length;

// for (var i = 0; i < arrayLength; i++) {
//     console.log(myStringArray[i]);
//     //Do something
// }
// //One way
// for(var i in classmates){
// 	console.log(classmates[i]);
// }
// //2nd way
// for(var j = 0; j < classmates.lenght; j++){
// 	console.log(classmates[j]);
// }

// var mixedTypeArray = ["Elephant", 100, (5 > 2)];
// var sameType = ["Elephant", "Giraffe", "Duck"];


// var favoriteMovies = ["Godfather", "Pulp Fiction", "Reservoir Dogs", "Splash"];

// for (var movie in favoriteMovies){
// 	console.log(favoriteMovies[movie]);
// }
// console.log(favoriteMovies);
// for(var i = 0; i < favoriteMovies.length;i++){
// 	console.og(i);
// }


//. is an Operator
//Methond is a Function inside of a Function
//OBJECT LITERAL
var friend = {
	
	//Properties
	fullname			: "",
	age					: 0,
	married				: true,
	vocation			: "",
	closeLikeAbrother	: true,
	yearsKnown			: 0,


	//Method
	printVocation	: function(){
		return this.vocation;
	},

	postMessageToWall : function(message){
		return message;
	}, 
	introduceToSisterInLaw : function(){
		if(this.yearsKnown >= 5 && this.closeLikeAbrother == true && this.married == false) {
			return "I want you to meet Lizzy.";	
		} else { 
			return "Have you tried Tinder?";
			}
		}
	}
	inviteToElevenFifty : function(){
		if(this.coder == true) {
			return "Have you tried Eleven Fifty?"
		} else {
			return "You should look into coding."
		}
	}


var nickKirkes = Object.create(friend);
nickKirkes.fullname = "Nick Kirkes";
nickKirkes.age = 38;
nickKirkes.married = false;
nickKirkes.vocation = "Projet Manager at Sales Force";
nickKirkes.yearsKnown = 20;
nickKirkes.coder = true;

var hansKloepfer = Object.create(friend);
hansKloepfer.fullname = "Hans Kloepfer";
hansKloepfer.age = 42;
hansKloepfer.married = false;
hansKloepfer.vocation = "Sailboat Captain";
hansKloepfer.yearsKnown = 30;
hansKloepfer.coder = false;

var michael = Object.create(friend);
michael.fullname = "Michael Fiore";
michael.age = 20;
michael.married = false;
michael.vocation = "Master Mind";
michael.yearsKnown = 45;
michael.coder = true;









































