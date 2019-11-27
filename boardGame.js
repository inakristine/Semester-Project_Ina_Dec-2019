
var player1id = localStorage.getItem("playerOne");

var player2id = localStorage.getItem("PlayerTwo");


window.onload = function () {
    populatePTwo(player2id);
    populatePOne(player1id);
    setPos();
}

function setPos(){
    localStorage.setItem('Pos1', 0);
    localStorage.setItem('Pos2', 0);
}


function populatePTwo(charName) {

    console.log(charName)

    var diceNum = (Math.round(Math.random() * 5)+1);

    document.querySelector('.playertwo').innerHTML += `
            <h2 class="[ card__title ]">Player 2<br>${charName}</h2>
            <img src="img/${charName}.png" alt="" class="[ card__image ]">
            
            <div class="[ activeElemets__2 ]">
                <div class="[ rollDiceBtn__2 ]">Wait for your turn</div>
                <img class="[ dice__2 ]" src="img/dice0.gif" alt="game rolling dice">
                <div class="[ movePawnBtn__2 ]">You must roll your dice before you can move yor pawn</div>
            </div>
    `
    
    pawnOne(`${charName}`, 0);
}

function pawnOne(name, position) {
    tiles[`${position}`].innerHTML += `<img src="img/${name}.png" alt="" class="[ pawn__one ]">`
    console.log(diceNum);
}

function populatePOne(charName) {

    var diceNum = (Math.round(Math.random() * 5)+1);

    document.querySelector('.playerOne').innerHTML += `
    <h2 class="[ card__title ]">Player 1<br>${charName}</h2>
    <img src="img/${charName}.png" alt="" class="[ card__image ]">
    
    <div class="[ activeElemets__1 ]">
        <div class="[ rollDiceBtn__1 ]" onclick="rollDice1();">Wait for your turn</div>
        <img class="[ dice__1 ]" src="img/dice0.gif" alt="game rolling dice">
        <div class="[ movePawnBtn__1 ]">You must roll your dice before you can move yor pawn</div>
    </div>
`

pawnTwo(`${charName}`, 0);

}
function rollDice1() {
    var rollBtn = document.querySelector('.rollDiceBtn__1');
    var moveBtn = document.querySelector('.movePawnBtn__1');
    var diceNum = (Math.round(Math.random() * 5)+1);
    var dice = document.querySelector('.dice__1');

    rollBtn.style.backgroundImage="none";
    rollBtn.style.backgroundColor="#33180e";
    rollBtn.style.color="#b09238";
    rollBtn.onclick="none";

    dice.src=`img/dice${diceNum}.gif`;

    localStorage.setItem("dice1", diceNum);

    moveBtn.style.backgroundImage="url(img/goldGradient.svg)";
    moveBtn.style.backgroundColor="none";
    moveBtn.style.color="black";
    moveBtn.onclick="pawnOne();";
    moveBtn.innerHTML=("Make the move");
}

/*        <div class="[ activeElemets__1 ]">
            <div class="[ rollDiceBtn__1 ]" onclick="rollDice();">Roll dice</div>
            <img class="[ dice__1 ]" src="img/dice${diceNum}.gif" alt="game rolling dice">
            <div class="[ movePawnBtn__2 ]" onclick="movePawn();">Roll dice before you cn move pawn</div>
        </div>
*/

function pawnTwo(name, position) {
    tiles[`${position}`].innerHTML += `<img src="img/${name}.png" alt="" class="[ pawn__two ]">`
    console.log(diceNum);
}

    var tiles = [
        document.getElementById("brick01"),
        document.getElementById("brick02"),
        document.getElementById("brick03"),
        document.getElementById("brick04"),
        document.getElementById("brick05"),
        document.getElementById("brick06"),
        document.getElementById("brick07"),
        document.getElementById("brick08"),
        document.getElementById("brick09"),
        document.getElementById("brick10"),
        document.getElementById("brick11"),
        document.getElementById("brick12"),
        document.getElementById("brick13"),
        document.getElementById("brick14"),
        document.getElementById("brick15"),
        document.getElementById("brick16"),
        document.getElementById("brick17"),
        document.getElementById("brick18"),
        document.getElementById("brick19"),
        document.getElementById("brick20"),
        document.getElementById("brick21"),
        document.getElementById("brick22"),
        document.getElementById("brick23"),
        document.getElementById("brick24"),
        document.getElementById("brick25"),
        document.getElementById("brick26"),
        document.getElementById("brick27"),
        document.getElementById("brick28"),
        document.getElementById("brick29"),
        document.getElementById("brick30"),
        document.getElementById("brick31"),
        document.getElementById("brick32"),
    ]

   

    var diceNum = (Math.round(Math.random() * 5)+1);
