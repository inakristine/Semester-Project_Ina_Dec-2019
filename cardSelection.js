//to clear local storage when reloaded, to ensure that it is possible to choose two avatars when game is played more than once.
window.onload = function () {
    window.localStorage.clear();
}

//This function is called whenever you press the "read more" button. It displays extra information about the given character.

function person(id) {

    fetch('https://www.anapioficeandfire.com/api/characters/' + id)
        .then((response) => {
            return response.json()
        })
        .then(jsonResult => {
            
                document.querySelector('.background--normal').innerHTML += `
                <div class="[ allertbox ]"><p3 class="[ allertbox__text ]">${jsonResult.name} <br>Gender: ${jsonResult.gender}<br>Culture: ${jsonResult.culture}<br>Alias: ${jsonResult.aliases}</p3><button  class="[ allertbox__closer ]" onclick="closeBox()">Close</button></div>
            `
        });
}



//This ist the function called by the select-button
function select(cahrImgName, charName, charNum) {

    var someData = `${charName}`;
    var someDataImg = `${cahrImgName}`;
    var correctCard = document.getElementById(`${charNum}`)

    //This code checks if there already is three or less objects in local storage.
    //If so it changes the button text and button function as well as run the next if/else statement.
    //It also sets the card background color to dark brown to indicate that it is selected.
    if (localStorage.length <= 3) {
        var oldButton = correctCard.lastElementChild;
        var newButton = document.createElement("button");

        correctCard.setAttribute("style", "background-color: #33180e;");
        newButton.setAttribute("class", "[ card__btn--right ]");
        newButton.setAttribute("onclick", `deselect("${cahrImgName}", "${charName}", ${charNum})`);
        newButton.innerHTML = "Deselect";

        oldButton.parentElement.replaceChild(newButton, oldButton);
// This checks if player one is present. if not, it stores the selected card and the according image name as playerOne and PlayerOneImg.
        if(localStorage.getItem("playerOne") === null){
            localStorage.setItem("playerOne", someData);
            localStorage.setItem("playerOneImg", someDataImg);
        }
//If player one is present, it stores the selected card and the according image name as playerTwo and PlayerTwoImg.
        else{
            localStorage.setItem("PlayerTwo", someData);
            localStorage.setItem("playerTwoImg", someDataImg);
        }
//If there is not three ore less objects in local storage, the palyer limit function will be called.
    } else {
        playerLimitReached();
    }
}

//This is the function called when a card is already selected, and the bottom right card-button is in it's deselect state.
//It first changes the background color of the card back to black.
//It also changes the button text back to "select", and changes the oncklick function.
//
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

//Then cheecs if the chosen charachter is stored as player one or not, and removes the stored charachter and image name, based on it's key, from locale storage.
    if(localStorage.getItem("playerOne") == someData){
        localStorage.removeItem("playerOne");
        localStorage.removeItem("playerOneImg");
    }
    else{
        localStorage.removeItem("playerTwoImg");
        localStorage.removeItem("PlayerTwo");
    }

}

//This function is called whenever select-button is being pressed while two characters is already chosen.
//It displays a message sying that two is the maximim selectable cards.

function playerLimitReached() {
    document.querySelector('.background--normal').innerHTML += `
    <div class="[ allertbox ]"><p3 class="[ allertbox__text ]">You are not able to choose more than two characters for this game.</p3><button  class="[ allertbox__closer ]" onclick="closeBox()">Close</button></div>
    `
}

//This function closes any open messages, when the close button is ressed.

function closeBox(){
    var allertBox = document.querySelector('.background--normal');
    allertBox.lastElementChild.setAttribute("hidden", true);
}


//This function checks if there is four ore more items in local storage.
function openGame(){
//Isf so, it opens the game page
    if(localStorage.length >= 4){
        window.open("game.html")
    }else{
//Otherwise it calls the toFewPlayers function
            toFewPlayers();
    }
}


//This function displays a message of to few players selected to open the game
function toFewPlayers() {
    document.querySelector('.background--normal').innerHTML += `
    <div class="[ allertbox ]"><p3 class="[ allertbox__text ]">You need to choose two charachters to play this game.</p3><button  class="[ allertbox__closer ]" onclick="closeBox()">Close</button></div>
    
`}
