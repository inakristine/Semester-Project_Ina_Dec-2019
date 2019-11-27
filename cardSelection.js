//to clear local storage when reloaded, to ensure that it is possible to choose two avatars when game is played more than once.
window.onload = function () {
    window.localStorage.clear();
}

function peron(id, i) {

    fetch('https://www.anapioficeandfire.com/api/characters/' + id)
        .then((response) => {
            return response.json()
        })
        .then(jsonResult => {

            document.querySelector('.cardContainer').innerHTML += `
            <div class="[ card ]" id="card${i}">
                <h2 class="[ card__title ]">${jsonResult.name}</h2>
                <img src="img/${jsonResult.name}.png" alt="" class="[ card__image ]">
                <button onclick="readMore('${jsonResult.name}', '${jsonResult.gender}', '${jsonResult.culture}');" class="[ card__btn--left ]">Read more</button>
        <button onclick="select(${i}, '${jsonResult.name}')" class="[ card__btn--right ]">Select</button>
            </div>
        `
        });
}

peron("238", 0);
peron("957", 1);
peron("216", 2);
peron("688", 3);
peron("16", 4);
peron("271", 5);
peron("667", 6);
peron("975", 7);
peron("364", 8);
peron("150", 9);


function select(cardNum, cardName) {

    var someData = `${cardName}`;

    if (localStorage.length <= 1) {
        var correctCard = document.querySelector(`#card${cardNum}`);
        var oldButton = correctCard.lastElementChild;
        var newButton = document.createElement("button");

        correctCard.setAttribute("style", "background-color: #33180e;");
        newButton.setAttribute("class", "[ card__btn--right ]");
        newButton.setAttribute("onclick", `deselect(${cardNum}, ${cardName})`);
        newButton.innerHTML = "Deselect";

        oldButton.parentElement.replaceChild(newButton, oldButton);

        

        if(localStorage.getItem("playerOne") === null){
            localStorage.setItem("playerOne", someData);
        }
        else{
            localStorage.setItem("PlayerTwo", someData);
        }
    } else {
        playerLimitReached();
    }
}

function deselect(cardNum, cardName) {
    var someData = `${cardName}`;
    var correctCard = document.querySelector(`#card${cardNum}`);
    var oldButton = correctCard.lastElementChild;
    var newButton = document.createElement("button");

    correctCard.setAttribute("style", "background-color: black;");

    newButton.setAttribute("class", "[ card__btn--right ]");
    newButton.setAttribute("onclick", `select(${cardNum})`);
    newButton.innerHTML = "Select";

    oldButton.parentElement.replaceChild(newButton, oldButton);

    if(localStorage.getItem("playerOne") == someData){
        localStorage.removeItem("playerOne");
    }
    else{
        localStorage.removeItem("PlayerTwo");
    }

}



function playerLimitReached() {
    document.querySelector('.background--normal').innerHTML += `
    <div class="[ allertbox ]"><p3 class="[ allertbox__text ]">You are not able to choose more than two characters for this game.</p3><button  class="[ allertbox__closer ]" onclick="closeBox()">Close (Click twice)</button></div>
    
`

}

function readMore(carName, gender, culture){
    document.querySelector('.background--normal').innerHTML += `
    <div class="[ allertbox ]"><p3 class="[ allertbox__text ]">${carName} is a ${gender} from the culture of ${culture}.</p3><button  class="[ allertbox__closer ]" onclick="closeBox()">Close (Click twice)</button></div>
`
}

function closeBox(){
    var allertBox = document.querySelector('.background--normal');
    allertBox.removeChild(allertBox.lastChild);

}



function openGame(){
    if(localStorage.length >= 2){
        window.open("game.html")
    }else{
            toFewPlayers();
    }
    

}

function toFewPlayers() {
    document.querySelector('.background--normal').innerHTML += `
    <div class="[ allertbox ]"><p3 class="[ allertbox__text ]">You need to choose two charachters to play this game.</p3><button  class="[ allertbox__closer ]" onclick="closeBox()">Close (Click twice)</button></div>
    
`}
// Store data
// var someData = 'The data that I want to store for later.';
// localStorage.setItem('myDataKey', someData);

// Get data
// var data = localStorage.getItem('myDataKey');

// Remove data
// localStorage.removeItem('myDatakey');



//window.open("https://www.w3schools.com");