function sayHello(){
	alert("It's Working!")
}

var friend = {
	firstName		: "Paul",
	lastName		: "O'Connor",
	age				: 39
};

document.getElementById("demo").innerHTML = friend.firstName + " " + friend.age;
document.getElementById("demo").innerHTML = friend.firstName;

var agentsOfShield = {
	showName 			: "Agents of Shield",
	season 				: "Season One",
	seasonDescription	: "Born with super-human senses and the power to heal from almost any wound, Wolverine was captured by a secret Canadian organization and given an unbreakable skeleton and claws."
};
var barney = {
	showName 			: "Barney",
	season 				: "Season Two",
	seasonDescription	: "A t-rex that has turned purple and loves hugging children."
};
//Below alerts user on button click.
var netflixShow = {
	//Properties
	showName 			: "",
	epNumber			: 1,
	epDescription		: "",

	//Methods
	watchNow	: function(){
		alert("You are now queuing up " + this.showName + this.epNumber);
	}
};

var drWho = Object.create(netflixShow);
	drWho.showName			= "Dr. Who ";
	drWho.epNumber			= 1;
	drWho.epDescription 	= "Mannequins come alive.";

	


//First Table
document.getElementById("showNameOne").innerHTML = agentsOfShield.showName;
document.getElementById("seasonOne").innerHTML = agentsOfShield.season;
document.getElementById("seasonDescriptionOne").innerHTML = agentsOfShield.seasonDescription;

document.getElementById("showNameTwo").innerHTML = barney.showName;
document.getElementById("seasonTwo").innerHTML = barney.season;
document.getElementById("seasonDescriptionTwo").innerHTML = barney.seasonDescription;
//End First Table
//Second Table
document.getElementById("1showNameOne").innerHTML = agentsOfShield.showName;
document.getElementById("1seasonOne").innerHTML = agentsOfShield.season;
document.getElementById("1seasonDescriptionOne").innerHTML = agentsOfShield.seasonDescription;

document.getElementById("2showNameTwo").innerHTML = barney.showName;
document.getElementById("2seasonTwo").innerHTML = barney.season;
document.getElementById("2seasonDescriptionTwo").innerHTML = barney.seasonDescription;
//End Second Table




// # === Fillers
// var # = {
// 	showName 			: "#",
// 	season 				: "#",
// 	seasonDescription	: "#"
// };

// # === Fillers
// document.getElementById("#").innerHTML = #.showName;
// document.getElementById("#").innerHTML = #.season;
// document.getElementById("#").innerHTML = #.seasonDescription;


var amazonPrimeShow = {
	//PROPERTIES
	showId		: 1,
	name 		: "Paul's Happiest Times",
	description : "This is the happiest show on the planet",
	seasonInfo	: {
		seasonNumber: 1,
	
	
		//METHODS
		printDetails : function(){
			document.write(description);
		},

		episodes	: [
			{episodeNumber: 1, episodeName: "Happy Stuff-"},
			{episodeNumber: 2, episodeName: "The Real Happy Story of Paul-"},
			{episodeNumber: 3, episodeName: "Even happier than before"}
		]
	},
};

document.write(amazonPrimeShow.seasonInfo.episodes[0].episodeName);

document.write(amazonPrimeShow.seasonInfo.episodes[1].episodeName);

document.write(amazonPrimeShow.seasonInfo.episodes[2].episodeName);











