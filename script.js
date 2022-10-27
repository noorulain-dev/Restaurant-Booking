

function slideShow(i){
	
	var slideimgs = document.getElementsByClassName("slides");

	for (var x=0; x<slideimgs.length; x++){
		slideimgs[x].style.display = "none"; //hides all the images 
	}
	
	gIndex += i
	
	if (gIndex > slideimgs.length-1){ 
		gIndex = 0; //resets the gIndex to 0 if the value exceeds 4
	}
	
	if (gIndex < 0){
		gIndex = slideimgs.length-1 //resets the gIndex value to the last index of the array
	}
	
	slideimgs[gIndex].style.display = "block";
}



var gErrorMsg = "";


//function to check validity of name input
function checkname(){
	var name = document.getElementById("name").value;
	var pattern = /[a-zA-Z\s]+$/;
	var nameOK = true;
	
	if (name==""){
		gErrorMsg = gErrorMsg + "Please enter your name\n"
		nameOK = false;
	}
	
	else{
		if (!pattern.test(name)){
			gErrorMsg = gErrorMsg + "Your name must only contain alpha characters\n"
			nameOK = false;
		}
	}
	return nameOK;
}



//function to check if phone number is valid
function checkPhone(){
	var phone = document.getElementById("phone").value;
	var pattern = /[0-9+$]/;
	var phoneOK = false;
	
	if ((!phone=="") && (pattern.test(phone)) && (phone.length <= 10)) {
		var phoneOK = true;
	}
	
	else{
		if (phone=="") {
			gErrorMsg += "Phone number cannot be empty\n"
		}
		
		else if (!pattern.test(phone)){
			gErrorMsg += "Phone number should only contain digits\n"
		}
		
		else if (phone.length > 10){
			gErrorMsg += "Phone number should be 10 digits or less\n"
		}
	}
	return phoneOK;
}




function checkDate(){
	var date = document.getElementById("date").value;
	var current_date = new Date();
	var user_date = new Date(date); 
	var dateOK = false;
	
	if (current_date > user_date){
		gErrorMsg += "The reservation date cannot be a past or current date\n"
	}
	
	else if (date == ""){
		gErrorMsg += "Reservation date must be selected\n"
	}

	else{
		dateOK = true;
	}
	return dateOK;
}


function checkCategory(){
	var category = document.getElementById("dropdown").value;
	var selected = false;
	
	if (category == ""){
		gErrorMsg += "A category must be selected\n"
	}
	
	else{
		selected = true;
	}
	return selected;
}


function checkPax(){
	
	var pax = document.getElementById("pax").value;
	var pattern = /[a-zA-Z0-9\s]$/;
	var paxOK = false;
	
	if ((!pax == "") && (pattern.test(pax)) && (pax.length <= 40)){
		paxOK = true;
	}
	
	else{
		if (pax == ""){
			gErrorMsg += "pax name cannot be empty\n"
		}
		
		else if (!pattern.test(pax)){
			gErrorMsg += "Please enter a valid pax name (No special characters)\n"
		}
	
		else if (pax.length>40){
			gErrorMsg += "pax name must be 40 characters or less\n"
		}
	}
	return paxOK;
}


function checkMenu(){
	var selected = false;
	
	var sushi = document.getElementById("sushi");
	var onigri = document.getElementById("onigri");
	var bento = document.getElementById("bento");
	var fish = document.getElementById("fish");
	
	if (sushi.checked || onigri.checked || bento.checked || fish.checked){
		selected = true;
	}
	
	else{
		gErrorMsg = gErrorMsg + "Please select an menu item\n"
	}
	
	return selected;
}

function checkDessert(){
	var selected = false;
	var dessert1 = document.getElementById("sig").checked;
	var dessert2 = document.getElementById("green").checked;
	var dessert3 = document.getElementById("choco").checked;
	
	if (dessert1||dessert2||dessert3){
		selected = true;
	}
	
	else{
		gErrorMsg = gErrorMsg + "Please select one dessert\n"
	}
	
	return selected;
}



function validateForm(){
	
	"use strict"
	var AllOK = false;
	var checknameOK = checkname();
	var checkphoneOK = checkPhone();
	var checkcategoryOK = checkCategory();
	var checkdateOK = checkDate();
	var checkPaxOK = checkPax();
	var checkDessertOK = checkDessert();
	var checkMenuOK = checkMenu();
	
	
	if (checknameOK && checkphoneOK && checkcategoryOK && checkdateOK && checkPaxOK && checkDessertOK && checkMenuOK){
		var AllOK = true;
	}
	
	else{
		alert(gErrorMsg);
		gErrorMsg = "";
		AllOk = false;
	}
	return AllOK;
}



function init(){
	var validate_form = document.getElementById("domo");
	validate_form.onsubmit = validateForm;
}

window.onload= init;