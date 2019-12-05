//to clear local storage when reloaded, to ensure that it is possible to choose two avatars when game is played more than once.
window.onload = function () {
    window.localStorage.clear();
}

function person(id) {

    fetch('https://www.anapioficeandfire.com/api/characters/' + id)
        .then((response) => {
            return response.json()
        })
        .then(jsonResult => {
            
                document.querySelector('.background--normal').innerHTML += `
                <div class="[ allertbox ]"><p3 class="[ allertbox__text ]">${jsonResult.name} is a ${jsonResult.gender} from the culture of ${jsonResult.culture}.</p3><button  class="[ allertbox__closer ]" onclick="closeBox()">Close</button></div>
            `
        });
}




function select(cahrImgName, charName, charNum) {

    var someData = `${charName}`;
    var someDataImg = `${cahrImgName}`;
    var correctCard = document.getElementById(`${charNum}`)

    if (localStorage.length <= 3) {
        var oldButton = correctCard.lastElementChild;
        var newButton = document.createElement("button");

        correctCard.setAttribute("style", "background-color: #33180e;");
        newButton.setAttribute("class", "[ card__btn--right ]");
        newButton.setAttribute("onclick", `deselect("${cahrImgName}", "${charName}", ${charNum})`);
        newButton.innerHTML = "Deselect";

        oldButton.parentElement.replaceChild(newButton, oldButton);

        if(localStorage.getItem("playerOne") === null){
            localStorage.setItem("playerOne", someData);
            localStorage.setItem("playerOneImg", someDataImg);
        }
        else{
            localStorage.setItem("PlayerTwo", someData);
            localStorage.setItem("playerTwoImg", someDataImg);
        }
    } else {
        playerLimitReached();
    }
}

function deselect(cahrImgName, charName, charNum) {

    var someDataImg = `${cahrImgName}`;
    var someData = `${charName}`;
    var correctCard = document.getElementById(`${charNum}`)
    var oldButton = correctCard.lastElementChild;

    var newButton = document.createElement("button");

    correctCard.setAttribute("style", "background-color: black;");

    newButton.setAttribute("class", "[ card__btn--right ]");
    newButton.setAttribute("onclick", `select("${cahrImgName}", "${charName}", ${charNum})`);
    newButton.innerHTML = "Select";

    oldButton.parentElement.replaceChild(newButton, oldButton);

    if(localStorage.getItem("playerOne") == someData){
        localStorage.removeItem("playerOne");
        localStorage.removeItem("playerOneImg");
    }
    else{
        localStorage.removeItem("playerTwoImg");
        localStorage.removeItem("PlayerTwo");
    }

}



function playerLimitReached() {
    document.querySelector('.background--normal').innerHTML += `
    <div class="[ allertbox ]"><p3 class="[ allertbox__text ]">You are not able to choose more than two characters for this game.</p3><button  class="[ allertbox__closer ]" onclick="closeBox()">Close</button></div>
    `
}

function readMore(carName, gender, culture){
    document.querySelector('.background--normal').innerHTML += `
    <div class="[ allertbox ]"><p3 class="[ allertbox__text ]">${carName} is a ${gender} from the culture of ${culture}.</p3><button  class="[ allertbox__closer ]" onclick="closeBox()">Close</button></div>
`
}

function closeBox(){
    var allertBox = document.querySelector('.background--normal');
    allertBox.lastElementChild.setAttribute("hidden", true);
}


function openGame(){
    if(localStorage.length >= 4){
        window.open("game.html")
    }else{
            toFewPlayers();
    }
}

function toFewPlayers() {
    document.querySelector('.background--normal').innerHTML += `
    <div class="[ allertbox ]"><p3 class="[ allertbox__text ]">You need to choose two charachters to play this game.</p3><button  class="[ allertbox__closer ]" onclick="closeBox()">Close</button></div>
    
`}

// Store data
// var someData = 'The data that I want to store for later.';
// localStorage.setItem('myDataKey', someData);

// Get data
// var data = localStorage.getItem('myDataKey');

// Remove data
// localStorage.removeItem('myDatakey');



//window.open("https://www.w3schools.com");