var dice1 = new dice(1);
var dice2 = new dice(2);
var dice3 = new dice(3);
var dice4 = new dice(4);
var dice5 = new dice(5);
var diceArray = [dice1, dice2, dice3, dice4, dice5];

function dice(id){
	this.id = id;
	this.currentRoll = 0;
	this.previousRoll = 0;
	this.isSelected = false;
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
	for(j = 0; j < rollableDiceList.length; j++){
		rollableDiceList[j].roll();
	}
}

function updateDiceImages(){
	for(int i = 0; i < 
}

$("#roll_button").click(function(){
	//generate rollable dice list
	var rollableDiceList = getRollableDiceList();
	
	//roll each dice
	rollDice(rollableDiceList);
	
	//update dice images
	updateDiceImages();
	
	//auto select first 6, 5, 4 (in that order)
	
	//
	
});
