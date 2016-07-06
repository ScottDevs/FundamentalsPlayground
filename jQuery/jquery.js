//Setup
// jQuery(document).ready(function(){

// });

// jQuery(document).ready(function(){
// 	alert("hey");
// });

$(document).ready(function(){
	//alert("hey");
	$("#hide").click(function(){
		$("#image").hide(); //jQuery function so just ()
	});
});

$(document).ready(function(){
	//alert("hey");
	$("#show").click(function(){
		$("#image").show(); //jQuery function so just ()
	});
});

$(document).ready(function(){
	//alert("hey");
	$("#fadeIn").click(function(){
		$("#image").fadeIn(); //jQuery function so just ()
	});
});

$(document).ready(function(){
	//alert("hey");
	$("#explode").click(function(){
		$("#image").hide("explode", {pieces: 1000}, 10000); //jQuery function so just ()
	});
});

$("#sizechange").click(function(){

	$("#image").animate({
		height: '+=50%',
		width: '+=50%'
	});
});


