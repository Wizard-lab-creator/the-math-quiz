player1Name = localStorage.getItem("Player1name");
player2Name = localStorage.getItem("Player2name");
player1Score = 0;
player2Score = 0;
document.getElementById("player1Name").innerHTML = player1Name + ":";
document.getElementById("player2Name").innerHTML = player2Name + ":";

document.getElementById("player1Score").innerHTML = player1Score;
document.getElementById("player2Score").innerHTML = player2Score;

document.getElementById("playerQuestion").innerHTML = "Question Turn - " + player1Name;
document.getElementById("playerAnswer").innerHTML = "Answer Turn - " + player2Name;

function send() {
	number1 = document.getElementById("number1").value;
	number2 = document.getElementById("number2").value;
	actual_answer = parseInt(number1) * parseInt(number2);
	question_number = "<h4>" + number1 " X "+ number2 +"</h4>"
	input_box = "<br>Answer : <input type='text' id= 'input_check_box'>";
	check button = "<br><br><button class='bn btn-info' onclick='check()'>Check</button>";
	row = question_number + input_box + check_button ;
	document.getElementById("output").innerHTML = row;
	document.getElementById("number1").value = "";
	document.getElementById("number2").value = "";
}