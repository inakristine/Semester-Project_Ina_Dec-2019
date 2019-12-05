
//getting the right players from locale storage

var player1id = localStorage.getItem("playerOne");
var player1img = localStorage.getItem("playerOneImg");

var player2id = localStorage.getItem("PlayerTwo");
var player2img = localStorage.getItem("playerTwoImg");

//Run the functions to set up the players on the page, when the page loads.

window.onload = function () {
    populatePTwo(player2id, player2img);
    populatePOne(player1id, player1img);
    setPos();
}

//Set the player entrence position in local storage, before gane starts.
function setPos(){
    localStorage.setItem('Pos1', 0);
    localStorage.setItem('Pos2', 0);
}

//Make the HTML content of player two, with name and image for the correct character, and call the function that places the right pawn/token on the board.

function populatePTwo(charName, charImg) {

    document.querySelector('.playertwo').innerHTML += `
            <h2 class="[ card__title ]">Player 2<br>${charName}</h2>
            <img src="img/${charImg}.png" alt="" class="[ card__image ]">
            
            <div class="[ activeElemets__2 ]">
                <div class="[ rollDiceBtn__2 ]">Your turn will come</div>
                <div class="[ diceTwo ]">
                    <img class="[ dice__2 ]" src="img/dice0.gif" alt="game rolling dice">
                </div>
                <div class="[ movePawnBtn__2 ]">Be patient</div>
            </div>
    `
    
    pawnOneOrigin(`${charImg}`, 0);
}

//Make the HTML content of player one, with name and image for the correct character, and call the function that places the right pawn/token on the board.
function populatePOne(charName, charImg) {

    document.querySelector('.playerOne').innerHTML += `
    <h2 class="[ card__title ]">Player 1<br>${charName}</h2>
    <img src="img/${charImg}.png" alt="" class="[ card__image ]">
    
    <div class="[ activeElemets__1 ]">
        <div class="[ rollDiceBtn__1 ]" onclick="rollDice1();">Roll the dice</div>
        <div class="[ diceOne ]">
            <img class="[ dice__1 ]" src="img/dice0.gif" alt="game rolling dice">
        </div>
        <div class="[ movePawnBtn__1 ]">All in due time</div>
    </div>
`

pawnTwoOrigin(`${charImg}`, 0);
}

//placing pawn two at the staring position on the board
function pawnTwoOrigin(name, nPosition) {
    tiles[`${nPosition}`].innerHTML += `<img src="img/${name}.png" alt="" class="[ pawn__two ]">`
}

//placing pawn one at the staring position on the board
function pawnOneOrigin(name, nPosition) {
    tiles[`${nPosition}`].innerHTML += `<img src="img/${name}.png" alt="" class="[ pawn__one ]">`
}


//Activating  the "move" button for player one, and setting an onclick to call the function that moves pawn one on the board.
function moveButtonActive1() {
    var moveBtn = document.querySelector(".movePawnBtn__1");
    moveBtn.style.backgroundImage="url(img/goldGradient.svg)";
    moveBtn.style.backgroundColor="#33180e";
    moveBtn.style.color="black";
    moveBtn.innerHTML=("Make your move");
    moveBtn.setAttribute('onclick', "pawnOneMove();");
}

//Activating  the "move" button for player two, and setting an onclick to call the function that moves pawn two on the board.
function moveButtonActive2() {
    var moveBtn = document.querySelector(".movePawnBtn__2");
    moveBtn.style.backgroundImage="url(img/goldGradient.svg)";
    moveBtn.style.backgroundColor="#33180e";
    moveBtn.style.color="black";
    moveBtn.innerHTML=("Make your move");
    moveBtn.setAttribute('onclick', "pawnTwoMove();");
}

//Deactivating  the move button for player one, removing onclick function
function moveButtonPassive1() {
    var moveBtn = document.querySelector(".movePawnBtn__1");
    moveBtn.style.backgroundImage="none";
    moveBtn.style.backgroundColor="#33180e";
    moveBtn.style.color="#b09238";
    moveBtn.innerHTML=("Wait for your turn");
    moveBtn.removeAttribute("onclick");
}
//Deactivating  the move button for player two, removing onclick function
function moveButtonPassive2() {
    var moveBtn = document.querySelector(".movePawnBtn__2");
    moveBtn.style.backgroundImage="none";
    moveBtn.style.backgroundColor="#33180e";
    moveBtn.style.color="#b09238";
    moveBtn.innerHTML=("Wait for your turn");
    moveBtn.removeAttribute("onclick");
}

//Activates roll button for player one, setting onclick function to the function that rolls the dice one.
function rollButtonActive1() {
    var rollBtn = document.querySelector(".rollDiceBtn__1");
    rollBtn.style.backgroundImage="url(img/goldGradient.svg)";
    rollBtn.style.backgroundColor="#33180e";
    rollBtn.style.color="black";
    rollBtn.innerHTML=("Roll the dice");
    rollBtn.setAttribute('onclick', "rollDice1();");
}
//Activates roll button for player two, setting onclick function to the function that rolls the dice two.
function rollButtonActive2() {
    var rollBtn = document.querySelector(".rollDiceBtn__2");
    rollBtn.style.backgroundImage="url(img/goldGradient.svg)";
    rollBtn.style.backgroundColor="#33180e";
    rollBtn.style.color="black";
    rollBtn.innerHTML=("Roll the dice");
    rollBtn.setAttribute('onclick', "rollDice2();");
}
//Deactivates roll button one, by removing onclick.
function rollButtonPassive1() {
    var rollBtn = document.querySelector(".rollDiceBtn__1");
    rollBtn.style.backgroundImage="none";
    rollBtn.style.backgroundColor="#33180e";
    rollBtn.style.color="#b09238";
    rollBtn.innerHTML=("Wait for your turn");
    rollBtn.removeAttribute("onclick");
}
//Deactivates roll button two, by removing onclick.
function rollButtonPassive2() {
    var rollBtn = document.querySelector(".rollDiceBtn__2");
    rollBtn.style.backgroundImage="none";
    rollBtn.style.backgroundColor="#33180e";
    rollBtn.style.color="#b09238";
    rollBtn.innerHTML=("Wait for your turn");
    rollBtn.removeAttribute("onclick");
}
//Activates the roll-button one with an alternative text.
function rollButtonSix1() {
    var rollBtn = document.querySelector('.rollDiceBtn__1');
    rollBtn.style.backgroundImage="url(img/goldGradient.svg)";
    rollBtn.style.backgroundColor="#33180e";
    rollBtn.style.color="black";
    rollBtn.innerHTML=("You hit SIX!!<br>Make your move and get a bonus throw!");
    rollBtn.setAttribute('onclick', "pawnOneMove();");
}
//Activates the roll-button two with onclick function and an alternative text.
function rollButtonSix2() {
    var rollBtn = document.querySelector('.rollDiceBtn__2');
    rollBtn.style.backgroundImage="url(img/goldGradient.svg)";
    rollBtn.style.backgroundColor="#33180e";
    rollBtn.style.color="black";
    rollBtn.innerHTML=("You hit SIX!!<br>Make your move and get a bonus throw!");
    rollBtn.setAttribute('onclick', "pawnTwoMove();");
}


//This function generates the dice one number, places the right dice image and either actvates the move button one if the number is not six, or call function "rollButtonSix1" if the dice number is six.
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
        rollButtonSix1();
    document.querySelector('.diceOne').innerHTML = `
    <img class="[ dice__1 ]" src="img/dice6.gif" alt="game rolling dice">
    `

}
}

//This function generates the dice two number, places the right dice image and either actvates the move button two if the number is not six, or call function "rollButtonSix2" if the dice number is six.
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

//This moves the pawnOne by calling the pawnOne function. It also sets the new position in local storage by getting its old position (starting at 0) from local storage and adding the dicenumber to it.
//Whenever the dice shows six, this fuction  moves the pawn, and reactivates the rollButtonAvtive1 function, to let player one roll again. When player one hits any other number, it passes the turn to player one by activating rollButtonAvtive2.

function pawnOneMove() {

    var diceNum1=localStorage.getItem('dice1')
    var oldPos1=localStorage.getItem('Pos1');
    var newPos1=(+diceNum1)+(+oldPos1);
    if(diceNum1==6){
        rollButtonActive1();
        moveButtonPassive2();
        localStorage.setItem('Pos1', newPos1);
        pawnOne(player1img, newPos1, oldPos1, player2img);
    }else{
        rollButtonActive2();
        moveButtonPassive1();
        localStorage.setItem('Pos1', newPos1);
        pawnOne(player1img, newPos1, oldPos1, player2img);
    }

}

//This moves the pawnTwo by calling the pawnTwo function. It also sets the new position in local storage by getting its old position (starting at 0) from local storage and adding the dicenumber to it.
//Whenever the dice shows six, this fuction  moves the pawn, and reactivates the rollButtonAvtive2 function, to let player two roll again. When player two hits any other number, it passes the turn to player one by activating rollButtonAvtive1.


function pawnTwoMove() {
    var diceNum2=localStorage.getItem('dice2')
    var oldPos2=localStorage.getItem('Pos2');
    var newPos2=(+diceNum2)+(+oldPos2);
    if(diceNum2==6){
        rollButtonActive2();
        moveButtonPassive1();
        localStorage.setItem('Pos2', newPos2);
        pawnTwo(player2img, newPos2, oldPos2, player1img);
    }else{
        rollButtonActive1();
        moveButtonPassive2();
        localStorage.setItem('Pos2', newPos2);
        pawnTwo(player2img, newPos2, oldPos2, player1img);
    }
}


//This function moves pawn two by deliting its image from the former tile-position and placing its image in its new tile-position, and making sure the tile-number and pawn one, if present, is replaced when the olt psition-tile content is removed. If the tile-number is 0, the number is replaced with the text "START".
function pawnTwo(name, nPosition, oPosition, otherName) {

    if(oPosition==0){
        tiles[`${oPosition}`].innerHTML = (`START`);
        tiles[`${nPosition}`].innerHTML += (`<img src="img/${name}.png" alt="" class="[ pawn__two ]">`);
    }else{
        
        
            
        switch (nPosition) {
            case 8:
            if(tiles[`${oPosition}`].innerHTML == (`${oPosition}<img src="img/${name}.png" alt="" class="[ pawn__two ]">`)){
                tiles[`${oPosition}`].innerHTML = (`${oPosition}`);
                tiles[16].innerHTML += (`<img src="img/${name}.png" alt="" class="[ pawn__two ]">`);
                localStorage.setItem('Pos2', 16);
            }else{
                tiles[`${oPosition}`].innerHTML = (`${oPosition}<img src="img/${otherName}.png" alt="" class="[ pawn__one ]">`);
                tiles[16].innerHTML += (`<img src="img/${name}.png" alt="" class="[ pawn__two ]">`);
                localStorage.setItem('Pos2', 16);
            }
            openBoxLadder(name, 8, 16);
            break;
            case 11:
            if(tiles[`${oPosition}`].innerHTML == (`${oPosition}<img src="img/${name}.png" alt="" class="[ pawn__two ]">`)){
                tiles[`${oPosition}`].innerHTML = (`${oPosition}`);
                tiles[24].innerHTML += (`<img src="img/${name}.png" alt="" class="[ pawn__two ]">`);
                localStorage.setItem('Pos2', 24);
            }else{
                tiles[`${oPosition}`].innerHTML = (`${oPosition}<img src="img/${otherName}.png" alt="" class="[ pawn__one ]">`);
                tiles[24].innerHTML += (`<img src="img/${name}.png" alt="" class="[ pawn__two ]">`);
                localStorage.setItem('Pos2', 24);
            }
            openBoxLadder(name, 11, 24);
            break;
            case 13:
            if(tiles[`${oPosition}`].innerHTML == (`${oPosition}<img src="img/${name}.png" alt="" class="[ pawn__two ]">`)){
                tiles[`${oPosition}`].innerHTML = (`${oPosition}`);
                tiles[4].innerHTML += (`<img src="img/${name}.png" alt="" class="[ pawn__two ]">`);
                localStorage.setItem('Pos2', 4);
            }else{
                tiles[`${oPosition}`].innerHTML = (`${oPosition}<img src="img/${otherName}.png" alt="" class="[ pawn__one ]">`);
                tiles[4].innerHTML += (`<img src="img/${name}.png" alt="" class="[ pawn__two ]">`);
                localStorage.setItem('Pos2', 4);
            }
            openBoxRope(name, 13, 4);
            break;
            case 21:
            if(tiles[`${oPosition}`].innerHTML == (`${oPosition}<img src="img/${name}.png" alt="" class="[ pawn__two ]">`)){
                tiles[`${oPosition}`].innerHTML = (`${oPosition}`);
                tiles[22].innerHTML += (`<img src="img/${name}.png" alt="" class="[ pawn__two ]">`);
                localStorage.setItem('Pos2', 22);
            }else{
                tiles[`${oPosition}`].innerHTML = (`${oPosition}<img src="img/${otherName}.png" alt="" class="[ pawn__one ]">`);
                tiles[22].innerHTML += (`<img src="img/${name}.png" alt="" class="[ pawn__two ]">`);
                localStorage.setItem('Pos2', 22);
            }
            openBoxLadder(name, 21, 22);
            
            break;
            case 25:
            if(tiles[`${oPosition}`].innerHTML == (`${oPosition}<img src="img/${name}.png" alt="" class="[ pawn__two ]">`)){
                tiles[`${oPosition}`].innerHTML = (`${oPosition}`);
                tiles[1].innerHTML += (`<img src="img/${name}.png" alt="" class="[ pawn__two ]">`);
                localStorage.setItem('Pos2', 1);
            }else{
                tiles[`${oPosition}`].innerHTML = (`${oPosition}<img src="img/${otherName}.png" alt="" class="[ pawn__one ]">`);
                tiles[1].innerHTML += (`<img src="img/${name}.png" alt="" class="[ pawn__two ]">`);
                localStorage.setItem('Pos2', 1);
            }
            openBoxRope(name, 25, 1);
            
            break;
            case 30:
            if(tiles[`${oPosition}`].innerHTML == (`${oPosition}<img src="img/${name}.png" alt="" class="[ pawn__two ]">`)){
                tiles[`${oPosition}`].innerHTML = (`${oPosition}`);
                tiles[6].innerHTML += (`<img src="img/${name}.png" alt="" class="[ pawn__two ]">`);
                localStorage.setItem('Pos2', 6);
            }else{
                tiles[`${oPosition}`].innerHTML = (`${oPosition}<img src="img/${otherName}.png" alt="" class="[ pawn__one ]">`);
                tiles[6].innerHTML += (`<img src="img/${name}.png" alt="" class="[ pawn__two ]">`);
                localStorage.setItem('Pos2', 6);
                
            }
            openBoxRope(name, 30, 6);

            
            
            break;
            case 31:
            case 32:
            case 33:
            case 34:
            case 35:
            case 36:
            case 37:
            case 38:
                localStorage.setItem('winner', `${name}`);
                if(tiles[`${oPosition}`].innerHTML == (`${oPosition}<img src="img/${name}.png" alt="" class="[ pawn__two ]">`)){
                    tiles[`${oPosition}`].innerHTML = (`${oPosition}`);
                    tiles[31].innerHTML += (`<img src="img/${name}.png" alt="" class="[ pawn__two ]">`);
                    localStorage.setItem('Pos2', 31);
                }else{
                    tiles[`${oPosition}`].innerHTML = (`${oPosition}<img src="img/${otherName}.png" alt="" class="[ pawn__one ]">`);
                    tiles[6].innerHTML += (`<img src="img/${name}.png" alt="" class="[ pawn__two ]">`);
                    localStorage.setItem('Pos2', 31);
                }
                setTimeout(function(){ window.open("diploma.html"); }, 1000);
            break;
            default:
                if(tiles[`${oPosition}`].innerHTML == (`${oPosition}<img src="img/${name}.png" alt="" class="[ pawn__two ]">`)){
                    tiles[`${oPosition}`].innerHTML = (`${oPosition}`);
                    tiles[`${nPosition}`].innerHTML += (`<img src="img/${name}.png" alt="" class="[ pawn__two ]">`);
                }else{
                    tiles[`${oPosition}`].innerHTML = (`${oPosition}<img src="img/${otherName}.png" alt="" class="[ pawn__one ]">`);
                    tiles[`${nPosition}`].innerHTML += (`<img src="img/${name}.png" alt="" class="[ pawn__two ]">`);
                }
        }
    }
    
    
}




//This function moves pawn one by deliting its image from the former tile-position and placing its image in its new tile-position, and making sure the tile-number and pawn two, if present, is replaced when the olt psition-tile content is removed. If the tile-number is 0, the number is replaced with the text "START".
function pawnOne(name, nPosition, oPosition, otherName) {

 
    if(oPosition==0){
        tiles[`${oPosition}`].innerHTML = (`START<img src="img/${otherName}.png" alt="" class="[ pawn__two ]">`);
        tiles[`${nPosition}`].innerHTML += (`<img src="img/${name}.png" alt="" class="[ pawn__one ]">`);
        }else{
            
        switch (nPosition) {
            case 8:
            if(tiles[`${oPosition}`].innerHTML == (`${oPosition}<img src="img/${name}.png" alt="" class="[ pawn__one ]">`)){
                tiles[`${oPosition}`].innerHTML = (`${oPosition}`);
                tiles[16].innerHTML += (`<img src="img/${name}.png" alt="" class="[ pawn__one ]">`);
                localStorage.setItem('Pos1', 16);
            }else{
                tiles[`${oPosition}`].innerHTML = (`${oPosition}<img src="img/${otherName}.png" alt="" class="[ pawn__two ]">`);
                tiles[16].innerHTML += (`<img src="img/${name}.png" alt="" class="[ pawn__one ]">`);
                localStorage.setItem('Pos1', 16);
            }
            openBoxLadder(name, 8, 16);
            break;
            case 11:
            if(tiles[`${oPosition}`].innerHTML == (`${oPosition}<img src="img/${name}.png" alt="" class="[ pawn__one ]">`)){
                tiles[`${oPosition}`].innerHTML = (`${oPosition}`);
                tiles[24].innerHTML += (`<img src="img/${name}.png" alt="" class="[ pawn__one ]">`);
                localStorage.setItem('Pos1', 24);
            }else{
                tiles[`${oPosition}`].innerHTML = (`${oPosition}<img src="img/${otherName}.png" alt="" class="[ pawn__two ]">`);
                tiles[24].innerHTML += (`<img src="img/${name}.png" alt="" class="[ pawn__one ]">`);
                localStorage.setItem('Pos1', 24);
            }
            openBoxLadder(name, 11, 24);
            break;
            case 13:
            if(tiles[`${oPosition}`].innerHTML == (`${oPosition}<img src="img/${name}.png" alt="" class="[ pawn__one ]">`)){
                tiles[`${oPosition}`].innerHTML = (`${oPosition}`);
                tiles[4].innerHTML += (`<img src="img/${name}.png" alt="" class="[ pawn__one ]">`);
                localStorage.setItem('Pos1', 4);
            }else{
                tiles[`${oPosition}`].innerHTML = (`${oPosition}<img src="img/${otherName}.png" alt="" class="[ pawn__two ]">`);
                tiles[4].innerHTML += (`<img src="img/${name}.png" alt="" class="[ pawn__one ]">`);
                localStorage.setItem('Pos1', 4);
            }
            openBoxRope(name, 13, 4);
            break;
            case 21:
            if(tiles[`${oPosition}`].innerHTML == (`${oPosition}<img src="img/${name}.png" alt="" class="[ pawn__one ]">`)){
                tiles[`${oPosition}`].innerHTML = (`${oPosition}`);
                tiles[22].innerHTML += (`<img src="img/${name}.png" alt="" class="[ pawn__one ]">`);
                localStorage.setItem('Pos1', 22);
            }else{
                tiles[`${oPosition}`].innerHTML = (`${oPosition}<img src="img/${otherName}.png" alt="" class="[ pawn__two ]">`);
                tiles[22].innerHTML += (`<img src="img/${name}.png" alt="" class="[ pawn__one ]">`);
                localStorage.setItem('Pos1', 22);
            }
            openBoxLadder(name, 21, 22);
            break;
            
            case 25:
            if(tiles[`${oPosition}`].innerHTML == (`${oPosition}<img src="img/${name}.png" alt="" class="[ pawn__one ]">`)){
                tiles[`${oPosition}`].innerHTML = (`${oPosition}`);
                tiles[1].innerHTML += (`<img src="img/${name}.png" alt="" class="[ pawn__one ]">`);
                localStorage.setItem('Pos1', 1);
            }else{
                tiles[`${oPosition}`].innerHTML = (`${oPosition}<img src="img/${otherName}.png" alt="" class="[ pawn__two ]">`);
                tiles[1].innerHTML += (`<img src="img/${name}.png" alt="" class="[ pawn__one ]">`);
                localStorage.setItem('Pos1', 1);
            }
            openBoxRope(name, 25, 1);
            break;
            case 30:
            if(tiles[`${oPosition}`].innerHTML == (`${oPosition}<img src="img/${name}.png" alt="" class="[ pawn__one ]">`)){
                tiles[`${oPosition}`].innerHTML = (`${oPosition}`);
                tiles[6].innerHTML += (`<img src="img/${name}.png" alt="" class="[ pawn__one ]">`);
                localStorage.setItem('Pos1', 6);
            }else{
                tiles[`${oPosition}`].innerHTML = (`${oPosition}<img src="img/${otherName}.png" alt="" class="[ pawn__two ]">`);
                tiles[6].innerHTML += (`<img src="img/${name}.png" alt="" class="[ pawn__one ]">`);
                localStorage.setItem('Pos1', 6);
            }
            openBoxRope(name, 30, 6);
            break;
            case 31:
            case 32:
            case 33:
            case 34:
            case 35:
            case 36:
            case 37:
            case 38:
                    localStorage.setItem('winner', `${name}`);

                    
                if(tiles[`${oPosition}`].innerHTML == (`${oPosition}<img src="img/${name}.png" alt="" class="[ pawn__one ]">`)){
                    tiles[`${oPosition}`].innerHTML = (`${oPosition}`);
                    tiles[31].innerHTML += (`<img src="img/${name}.png" alt="" class="[ pawn__one ]">`);
                    localStorage.setItem('Pos1', 31);
                }else{
                    tiles[`${oPosition}`].innerHTML = (`${oPosition}<img src="img/${otherName}.png" alt="" class="[ pawn__two ]">`);
                    tiles[31].innerHTML += (`<img src="img/${name}.png" alt="" class="[ pawn__one ]">`);
                    localStorage.setItem('Pos1', 31);
                }

                setTimeout(function(){ window.open("diploma.html"); }, 1000);
                
            break;
            default:
                    if(tiles[`${oPosition}`].innerHTML == (`${oPosition}<img src="img/${name}.png" alt="" class="[ pawn__one ]">`)){
                        tiles[`${oPosition}`].innerHTML = (`${oPosition}`);
                        tiles[`${nPosition}`].innerHTML += (`<img src="img/${name}.png" alt="" class="[ pawn__one ]">`);
                    }else{
                        tiles[`${oPosition}`].innerHTML = (`${oPosition}<img src="img/${otherName}.png" alt="" class="[ pawn__two ]">`);
                        tiles[`${nPosition}`].innerHTML += (`<img src="img/${name}.png" alt="" class="[ pawn__one ]">`);
                    }
        }
    }
}

function openBoxLadder(name, oPos, nPos) {

    document.querySelector('.emptyBox').innerHTML+=`
    <div class="[ allertbox ]"><p3 class="[ allertbox__text ]">${name} was lucky and found a ladder at brick ${oPos}. She climbed all the way up to brick ${nPos}.</p3><button  class="[ allertbox__closer ]" onclick="closeBox()">Close</button></div>
    `;
  
}

function openBoxRope(name, oPos, nPos) {

    document.querySelector('.emptyBox').innerHTML+=`
    <div class="[ allertbox ]"><p3 class="[ allertbox__text ]">${name} tripped in a rope at brick ${oPos}. She fell all the way down to brick ${nPos}.</p3><button  class="[ allertbox__closer ]" onclick="closeBox()">Close</button></div>
    `;
}

function closeBox(){
    var allertBox = document.querySelector('.emptyBox');
    allertBox.lastElementChild.setAttribute("hidden", true);
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