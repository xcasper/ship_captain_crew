var dice1 = new dice(1);
var dice2 = new dice(2);
var dice3 = new dice(3);
var dice4 = new dice(4);
var dice5 = new dice(5);
var diceArray = [dice1, dice2, dice3, dice4, dice5];

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

function getRollableDiceList(){
	var tempDiceList = [];
	for(i = 0; i < diceArray.length; i++){
		if(!diceArray[i].isSelected){
			tempDiceList.push(diceArray[i]);
		}
	}
	return tempDiceList;
}

function getRandomRoll(min,max){
	return Math.floor(Math.random() * (max-min + 1) + min);
}

function rollDice(rollableDiceList){
	for(i = 0; i < rollableDiceList.length; i++){
		rollableDiceList[i].roll();
	}
}

function updateDiceImageUrl(){
	for(i = 0; i < diceArray.length; i++){
		var currentDice = diceArray[i];
		
		currentDice.diceImageUrl = "img/dice/dice-" + currentDice.currentRoll + ".png";
		
		updateDiceDivImage(currentDice);
	}
}

function updateDiceDivImage(currentDice) {
	document.getElementById("dice"+currentDice.id).style.backgroundImage = "url('" + currentDice.diceImageUrl +"')";
}

$("#roll_button").click(function(){
	//generate rollable dice list
	var rollableDiceList = getRollableDiceList();
	
	//roll each dice
	rollDice(rollableDiceList);
	
	//update dice images
	updateDiceImageUrl();
	
	//auto select first 6, 5, 4 (in that order)
	
	//
	
});
