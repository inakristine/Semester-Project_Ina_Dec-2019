
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

    document.querySelector('.playertwo').innerHTML += `
            <h2 class="[ card__title ]">Player 2<br>${charName}</h2>
            <img src="img/${charName}.png" alt="" class="[ card__image ]">
            
            <div class="[ activeElemets__2 ]">
                <div class="[ rollDiceBtn__2 ]">Wait for your turn</div>
                <div class="[ diceTwo ]">
                    <img class="[ dice__2 ]" src="img/dice0.gif" alt="game rolling dice">
                </div>
                <div class="[ movePawnBtn__2 ]">You must roll your dice before you can move yor pawn</div>
            </div>
    `
    
    pawnOneOrigin(`${charName}`, 0);
}

function populatePOne(charName) {

    document.querySelector('.playerOne').innerHTML += `
    <h2 class="[ card__title ]">Player 1<br>${charName}</h2>
    <img src="img/${charName}.png" alt="" class="[ card__image ]">
    
    <div class="[ activeElemets__1 ]">
        <div class="[ rollDiceBtn__1 ]" onclick="rollDice1();">Roll the dice</div>
        <div class="[ diceOne ]">
            <img class="[ dice__1 ]" src="img/dice0.gif" alt="game rolling dice">
        </div>
        <div class="[ movePawnBtn__1 ]">You must roll your dice before you can move yor pawn</div>
    </div>
`

pawnTwoOrigin(`${charName}`, 0);

}

function pawnTwoOrigin(name, nPosition) {
    tiles[`${nPosition}`].innerHTML += `<img src="img/${name}.png" alt="" class="[ pawn__two ]">`
}


function pawnOneOrigin(name, nPosition, oPosition) {
    tiles[`${nPosition}`].innerHTML += `<img src="img/${name}.png" alt="" class="[ pawn__one ]">`
}

function moveButtonActive1() {
    var moveBtn = document.querySelector(".movePawnBtn__1");
    moveBtn.style.backgroundImage="url(img/goldGradient.svg)";
    moveBtn.style.backgroundColor="#33180e";
    moveBtn.style.color="black";
    moveBtn.innerHTML=("Make your move");
    moveBtn.setAttribute('onclick', "pawnOneMove();");
}

function moveButtonActive2() {
    var moveBtn = document.querySelector(".movePawnBtn__2");
    moveBtn.style.backgroundImage="url(img/goldGradient.svg)";
    moveBtn.style.backgroundColor="#33180e";
    moveBtn.style.color="black";
    moveBtn.innerHTML=("Make your move");
    moveBtn.setAttribute('onclick', "pawnTwoMove();");
}

function moveButtonPassive1() {
    var moveBtn = document.querySelector(".movePawnBtn__1");
    moveBtn.style.backgroundImage="none";
    moveBtn.style.backgroundColor="#33180e";
    moveBtn.style.color="#b09238";
    moveBtn.innerHTML=("Wait for your turn");
    moveBtn.removeAttribute("onclick");
}

function moveButtonPassive2() {
    var moveBtn = document.querySelector(".movePawnBtn__2");
    moveBtn.style.backgroundImage="none";
    moveBtn.style.backgroundColor="#33180e";
    moveBtn.style.color="#b09238";
    moveBtn.innerHTML=("Wait for your turn");
    moveBtn.removeAttribute("onclick");
}

function rollButtonActive1() {
    var rollBtn = document.querySelector(".rollDiceBtn__1");
    rollBtn.style.backgroundImage="url(img/goldGradient.svg)";
    rollBtn.style.backgroundColor="#33180e";
    rollBtn.style.color="black";
    rollBtn.innerHTML=("Roll the dice");
    rollBtn.setAttribute('onclick', "rollDice1();");
}

function rollButtonActive2() {
    var rollBtn = document.querySelector(".rollDiceBtn__2");
    rollBtn.style.backgroundImage="url(img/goldGradient.svg)";
    rollBtn.style.backgroundColor="#33180e";
    rollBtn.style.color="black";
    rollBtn.innerHTML=("Roll the dice");
    rollBtn.setAttribute('onclick', "rollDice2();");
}

function rollButtonPassive1() {
    var rollBtn = document.querySelector(".rollDiceBtn__1");
    rollBtn.style.backgroundImage="none";
    rollBtn.style.backgroundColor="#33180e";
    rollBtn.style.color="#b09238";
    rollBtn.innerHTML=("Wait for your turn");
    rollBtn.removeAttribute("onclick");
}
function rollButtonPassive2() {
    var rollBtn = document.querySelector(".rollDiceBtn__2");
    rollBtn.style.backgroundImage="none";
    rollBtn.style.backgroundColor="#33180e";
    rollBtn.style.color="#b09238";
    rollBtn.innerHTML=("Wait for your turn");
    rollBtn.removeAttribute("onclick");
}

function rollButtonSix1() {
    var rollBtn = document.querySelector('.rollDiceBtn__1');
    rollBtn.style.backgroundImage="url(img/goldGradient.svg)";
    rollBtn.style.backgroundColor="#33180e";
    rollBtn.style.color="black";
    rollBtn.innerHTML=("You hit SIX!!<br>Make your move and get a bonus throw!");
    rollBtn.setAttribute('onclick', "pawnOneMove();");
}

function rollButtonSix2() {
    var rollBtn = document.querySelector('.rollDiceBtn__2');
    rollBtn.style.backgroundImage="url(img/goldGradient.svg)";
    rollBtn.style.backgroundColor="#33180e";
    rollBtn.style.color="black";
    rollBtn.innerHTML=("You hit SIX!!<br>Make your move and get a bonus throw!");
    rollBtn.setAttribute('onclick', "pawnTwoMove();");
}

function rollDice1() {
    var diceNum = (Math.round(Math.random() * 5)+1);

    if(diceNum !== 6){
        rollButtonPassive1();
        document.querySelector('.diceOne').innerHTML = `
        <img class="[ dice__1 ]" src="img/dice${diceNum}.gif" alt="game rolling dice">
    `
        localStorage.setItem("dice1", diceNum);
        moveButtonActive1();

    }else{

        localStorage.setItem("dice1", 6);
        moveButtonActive1();
        rollButtonSix1();
    document.querySelector('.diceOne').innerHTML = `
    <img class="[ dice__1 ]" src="img/dice6.gif" alt="game rolling dice">
    
`   
    moveButtonPassive1();

}
}

function rollDice2() {
    var diceNum = (Math.round(Math.random() * 5)+1);

    if(diceNum !== 6){
        rollButtonPassive2();
        document.querySelector('.diceTwo').innerHTML = `
    <img class="[ dice__2 ]" src="img/dice${diceNum}.gif" alt="game rolling dice">
`
        localStorage.setItem("dice2", diceNum);
        moveButtonActive2();

    }else{
        localStorage.setItem("dice2", 6);
        moveButtonActive2();
    rollButtonSix2();
    document.querySelector('.diceTwo').innerHTML = `
    <img class="[ dice__2 ]" src="img/dice6.gif" alt="game rolling dice">
`
    moveButtonPassive2();
}
}

function pawnOneMove() {

    var diceNum1=localStorage.getItem('dice1')
    var oldPos1=localStorage.getItem('Pos1');
    var newPos1=(+diceNum1)+(+oldPos1);
    if(diceNum1==6){
        rollButtonActive1();
        moveButtonPassive2();
        localStorage.setItem('Pos1', newPos1);
        pawnOne(player1id, newPos1, oldPos1, player2id);
    }else{
        rollButtonActive2();
        moveButtonPassive1();
        localStorage.setItem('Pos1', newPos1);
        pawnOne(player1id, newPos1, oldPos1, player2id);
    }

}
function pawnTwoMove() {
    var diceNum2=localStorage.getItem('dice2')
    var oldPos2=localStorage.getItem('Pos2');
    var newPos2=(+diceNum2)+(+oldPos2);
    if(diceNum2==6){
        rollButtonActive2();
        moveButtonPassive1();
        localStorage.setItem('Pos2', newPos2);
        pawnTwo(player2id, newPos2, oldPos2, player1id);
    }else{
        rollButtonActive1();
        moveButtonPassive2();
        localStorage.setItem('Pos2', newPos2);
        pawnTwo(player2id, newPos2, oldPos2, player1id);
    }
}



function pawnTwo(name, nPosition, oPosition, othername) {

    if(oPosition==0){
        tiles[`${oPosition}`].innerHTML = (`START`);
        tiles[`${nPosition}`].innerHTML += (`<img src="img/${name}.png" alt="" class="[ pawn__two ]">`);
    }else if(tiles[`${oPosition}`].innerHTML == (`${oPosition}<img src="img/${name}.png" alt="" class="[ pawn__two ]">`)){
        tiles[`${oPosition}`].innerHTML = (`${oPosition}`);
        tiles[`${nPosition}`].innerHTML += (`<img src="img/${name}.png" alt="" class="[ pawn__two ]">`);
    }else{
        tiles[`${oPosition}`].innerHTML = (`${oPosition}<img src="img/${othername}.png" alt="" class="[ pawn__one ]">`);
        tiles[`${nPosition}`].innerHTML += (`<img src="img/${name}.png" alt="" class="[ pawn__two ]">`);
    }
    
    
}





function pawnOne(name, nPosition, oPosition, otherName) {

 
    if(oPosition==0){
        tiles[`${oPosition}`].innerHTML = (`START<img src="img/${otherName}.png" alt="" class="[ pawn__two ]">`);
        tiles[`${nPosition}`].innerHTML += (`<img src="img/${name}.png" alt="" class="[ pawn__one ]">`);
    }else if(tiles[`${oPosition}`].innerHTML == (`${oPosition}<img src="img/${name}.png" alt="" class="[ pawn__one ]">`)){
        tiles[`${oPosition}`].innerHTML = (`${oPosition}`);
        tiles[`${nPosition}`].innerHTML += (`<img src="img/${name}.png" alt="" class="[ pawn__one ]">`);
    }else{
        tiles[`${oPosition}`].innerHTML = (`${oPosition}<img src="img/${otherName}.png" alt="" class="[ pawn__two ]">`);
        tiles[`${nPosition}`].innerHTML += (`<img src="img/${name}.png" alt="" class="[ pawn__one ]">`);
    }
    
    
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