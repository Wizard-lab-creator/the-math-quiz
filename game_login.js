function addUser(){
    player1Name=document.getElementById("player1NameInput").value;
    player2Name=document.getElementById("player2NameInput").value;
    localStorage.setItem("Player1name", player1Name);
    localStorage.setItem("Player2name", player2Name);
    window.location="game_page.html";
}