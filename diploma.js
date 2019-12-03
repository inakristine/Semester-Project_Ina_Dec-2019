var winnerText = document.querySelector('.diploma__text');
var winner = localStorage.getItem("winner");
winnerText.innerHTML+=(`<h2 class="[ diploma__text--medium ]">The winner of the game is:</h2>
<h1 class="[ diploma__text--large ]">${winner}</h1>`)