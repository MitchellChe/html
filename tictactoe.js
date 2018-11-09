/* 
	File: tictactoe.js
	Author: Mitchell Che
	Date Created: 11/8/2018
*/



//Define Variables
var gameBoard;
var element;
var turn = 0;
var x = "X";
var o = "O";

//Create an associative array to match button elements to gameBoard array
var indexArray = [];
indexArray["one"] = 0;
indexArray["two"] = 1;
indexArray["three"] = 2;
indexArray["four"] = 3;
indexArray["five"] = 4;
indexArray["six"] = 5;
indexArray["seven"] = 6;
indexArray["eight"] = 7;
indexArray["nine"] = 8;


//Function called when button is pressed
function set(id){
	var square = document.getElementById(id);
	if (square.classList.contains('disable'))
	{
		return;
	}
	else{
		var index = indexArray[square.id];

		if(turn%2==0)
		{
			square.value = x;
			square.classList.add('disable');
			square.classList.remove('enable');
			gameBoard[index] = x;
			checkWin(x);
		}
		else
		{
			square.value = o;
			square.classList.add('disable');
			square.classList.remove('enable');
			gameBoard[index] = o;
			checkWin(o);
		}
		turn++;
		console.log(gameBoard);
	}
}

//Create array for all possible win conditions on gameBoard
const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]];

//Checks for win every time a turn is taken. Tie if no win and board is full
function checkWin(mark){
	var win = false;
	for(var i = 0; i<winConditions.length;i++)
	{
		var one = winConditions[i][0];
		var two = winConditions[i][1];
		var three = winConditions[i][2];
		if(gameBoard[one]==mark&&gameBoard[two]==mark&&gameBoard[three]==mark){
			win = true;
		}
	}
	var full = true;
	for(var i = 0;i<gameBoard.length;i++)
	{
		if(gameBoard[i] == "")
		{
			full = false;
		}
	}
	if(win)
	{
		window.alert(mark+" has won!");
	}
	else if(full)
	{
		window.alert("Tie game!");
	}
}

//Starts game and resets board
function startGame(){
	var squares = document.getElementsByClassName('square');
	for(var i = 0;i<squares.length;i++)
	{
 		squares[i].value = "";
 		squares[i].classList.add('enable');
 		squares[i].classList.remove('disable');
 	}
 	document.getElementById("reset").value = "Start New Game";
 	turn = 0;
 	gameBoard = ['', '', '', '', '', '', '', '', ''];
}