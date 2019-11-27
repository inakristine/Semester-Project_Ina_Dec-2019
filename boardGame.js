window.onload = function () {
    populatePTwo(player2id);
    populatePOne(player1id);
    setPos1();
    setPos1();
}




var player1id = localStorage.getItem(localStorage.key(0));

//Code to remove appostrof on data from localstorege in chrome
//if(typeof window.chrome == "object") {
//    player1id = player1id.slice(1,-1);
//}
    
    

var player2id = localStorage.getItem(localStorage.key(1));
//Code to remove appostrof on data from localstorege in chrome
//if(typeof window.chrome == "object") {
//    player2id = player2id.slice(1,-1);
//}
    



function populatePTwo(charName) {

    var diceNum = (Math.round(Math.random() * 5)+1);

    document.querySelector('.playertwo').innerHTML += `
            <h2 class="[ card__title ]">Player 2<br>${charName}</h2>
            <img src="img/${charName}.png" alt="" class="[ card__image ]">
            <div class="[ rollDiceBtn__2 ]" onclick="rollDice();">Roll dice</div>
            <img class="[ dice__2 ]" src="img/dice${diceNum}.gif" alt="game rolling dice">
            <div class="[ movePawnBtn__2 ]" onclick="movePawn();">Make the move</div>
    `
    pawnOne(`${charName}`, 0);
}


function pawnOne(name, position) {
    tiles[`${position}`].innerHTML += `<img src="img/${name}.png" alt="" class="[ pawn__one ]">`
    console.log(diceNum);
}

//var oldPawnPosition = `${position}`;
//var newPawnPosition = oldPawnPosition+diceNum;

function populatePOne(charName) {

    var diceNum = (Math.round(Math.random() * 5)+1);

    document.querySelector('.playerOne').innerHTML += `
    <h2 class="[ card__title ]">Player 1<br>${charName}</h2>
    <img src="img/${charName}.png" alt="" class="[ card__image ]">
    <div class="[ rollDiceBtn__1 ]" onclick="rollDice();">Roll dice</div>
    <img class="[ dice__1 ]" src="img/dice${diceNum}.gif" alt="game rolling dice">
    <div class="[ movePawnBtn__1 ]" onclick="movePawn();">Make the move</div>
`
pawnTwo(`${charName}`, 0);
}


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
