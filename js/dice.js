var dice1 = new dice(1);
var dice2 = new dice(2);
var dice3 = new dice(3);
var dice4 = new dice(4);
var dice5 = new dice(5);
var diceArray = [dice1, dice2, dice3, dice4, dice5];

//dice object
function dice(id){
	this.id = id;
	this.currentRoll = 0;
	this.previousRoll = 1;
	this.isSelected = false;
	this.diceImageUrl = "img/dice/dice-1.png";
	this.roll = function(){
		this.previousRoll = this.currentRoll;
		this.currentRoll = getRandomRoll(1, 6);	
	}
}

//returns an array of all dice that are not currently selected so they can be rolled.
function getRollableDiceList(){
	var tempDiceList = [];
	for(i = 0; i < diceArray.length; i++){
		if(!diceArray[i].isSelected){
			tempDiceList.push(diceArray[i]);
		}
	}
	return tempDiceList;
}

// gets a random number between min and max (including min and max)
function getRandomRoll(min,max){
	return Math.floor(Math.random() * (max-min + 1) + min);
}

// calls the roll function on each dice
function rollDice(rollableDiceList){
	for(i = 0; i < rollableDiceList.length; i++){
		rollableDiceList[i].roll();
	}
}

// updates each dice with the new url for the image that corresponds to what their current roll is
function updateDiceImageUrl(){
	for(i = 0; i < diceArray.length; i++){
		var currentDice = diceArray[i];
		
		currentDice.diceImageUrl = "img/dice/dice-" + currentDice.currentRoll + ".png";
		
		//update div image with img that cooresponds to their current roll
		updateDiceDivImage(currentDice);
	}
}

//Displays the image that matches the roll on each dice 
function updateDiceDivImage(currentDice) {
	document.getElementById("dice"+currentDice.id).style.backgroundImage = "url('" + currentDice.diceImageUrl +"')";
}

// returns an array of all 
function getNonSelectedDice(){
	var tempArray = [];
	for(i = 0; i < diceArray.length; i++){
		if(!diceArray[i].isSelected){
			tempArray.push(diceArray[i]);
		} 
	}
	return tempArray;
}
	
//boolean variables
var shipExist = false;
var captExist = false;
var crewExist = false;

//checks each dice for ship captain and crew. Auto select the first 6, 5 , 4.
function checkForShipCaptCrew(){	
	//array of dice that are not marked selected
	var nonSelectedDice = getNonSelectedDice(); 

	
	for(i = 0; i < nonSelectedDice.length; i++){
		//temp variable that represents the current dice in the list
		currentDice = nonSelectedDice[i];
		
		//checks if the dice is a 6 and if it is checks to see if we already have a ship. If we do not then it makes that 6 the ship by markling it selected and making shipExist = true
		if(currentDice.currentRoll == 6){
			if(!shipExist){
				shipExist = true;
				currentDice.isSelected = true;
			}
		}
		
		//TODO: Add checks for capt(5) and crew(4)
		
		
		
	}
}


//TODO: function to mark the selected dice with a red glow
function addGlowToSelectedDice{

}


$("#roll_button").click(function(){
	//generate rollable dice list
	var rollableDiceList = getRollableDiceList();
	
	//roll each dice
	rollDice(rollableDiceList);
	
	//update dice images
	updateDiceImageUrl();
	
	//auto select first 6, 5, 4 (in that order)
	checkForShipCaptCrew();
	
	//adds a red glow to each dice that is selected
	addGlowToSelectedDice();
});
