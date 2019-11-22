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
                <button class="[ card__btn--left ]">Read more</button>
        <button onclick="select${i}()" class="[ card__btn--right ]">Select</button>
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


function select0() {

    if (localStorage.length <= 1) {
        var correctCard = document.querySelector('#card0');
        var oldButton = correctCard.lastElementChild;
        var newButton = document.createElement("button");

        correctCard.setAttribute("style", "background-color: #33180e;");

        newButton.setAttribute("class", "[ card__btn--right ]");
        newButton.setAttribute("onclick", "deselect0()");
        newButton.innerHTML = "Deselect";

        oldButton.parentElement.replaceChild(newButton, oldButton);

        var someData = 'Cersei';
        localStorage.setItem('myDataKey0', someData);
    } else {
        playerLimitReached();
    }
}

function deselect0() {

    var correctCard = document.querySelector('#card0');
    var oldButton = correctCard.lastElementChild;
    var newButton = document.createElement("button");

    correctCard.setAttribute("style", "background-color: black;");

    newButton.setAttribute("class", "[ card__btn--right ]");
    newButton.setAttribute("onclick", "select0()");
    newButton.innerHTML = "Select";

    oldButton.parentElement.replaceChild(newButton, oldButton);

    localStorage.removeItem('myDataKey0');
}

function select1() {
    if (localStorage.length <= 1) {

        var correctCard = document.querySelector('#card1');
        var oldButton = correctCard.lastElementChild;
        var newButton = document.createElement("button");

        correctCard.setAttribute("style", "background-color: #33180e;");

        newButton.setAttribute("class", "[ card__btn--right ]");
        newButton.setAttribute("onclick", "deselect1()");
        newButton.innerHTML = "Deselect";

        oldButton.parentElement.replaceChild(newButton, oldButton);

        var someData = 'Sansa';
        localStorage.setItem('myDataKey1', someData);
    } else {
        playerLimitReached();
    }
}

function deselect1() {

    var correctCard = document.querySelector('#card1');
    var oldButton = correctCard.lastElementChild;
    var newButton = document.createElement("button");

    correctCard.setAttribute("style", "background-color: black;");

    newButton.setAttribute("class", "[ card__btn--right ]");
    newButton.setAttribute("onclick", "select1()");
    newButton.innerHTML = "Select";

    oldButton.parentElement.replaceChild(newButton, oldButton);

    localStorage.removeItem('myDataKey1');
}



function select2() {
    if (localStorage.length <= 1) {

        var correctCard = document.querySelector('#card2');
        var oldButton = correctCard.lastElementChild;
        var newButton = document.createElement("button");

        correctCard.setAttribute("style", "background-color: #33180e;");

        newButton.setAttribute("class", "[ card__btn--right ]");
        newButton.setAttribute("onclick", "deselect2()");
        newButton.innerHTML = "Deselect";

        oldButton.parentElement.replaceChild(newButton, oldButton);

        var someData = 'Brienne';
        localStorage.setItem('myDataKey2', someData);
    } else {
        playerLimitReached();
    }
}

function deselect2() {

    var correctCard = document.querySelector('#card2');
    var oldButton = correctCard.lastElementChild;
    var newButton = document.createElement("button");

    correctCard.setAttribute("style", "background-color: black;");

    newButton.setAttribute("class", "[ card__btn--right ]");
    newButton.setAttribute("onclick", "select2()");
    newButton.innerHTML = "Select";

    oldButton.parentElement.replaceChild(newButton, oldButton);

    localStorage.removeItem('myDataKey2');
}



function select3() {
    if (localStorage.length <= 1) {

        var correctCard = document.querySelector('#card3');
        var oldButton = correctCard.lastElementChild;
        var newButton = document.createElement("button");

        correctCard.setAttribute("style", "background-color: #33180e;");

        newButton.setAttribute("class", "[ card__btn--right ]");
        newButton.setAttribute("onclick", "deselect3()");
        newButton.innerHTML = "Deselect";

        oldButton.parentElement.replaceChild(newButton, oldButton);

        var someData = 'Lysa';
        localStorage.setItem('myDataKey3', someData);
    } else {
        playerLimitReached();
    }
}

function deselect3() {

    var correctCard = document.querySelector('#card3');
    var oldButton = correctCard.lastElementChild;
    var newButton = document.createElement("button");

    correctCard.setAttribute("style", "background-color: black;");

    newButton.setAttribute("class", "[ card__btn--right ]");
    newButton.setAttribute("onclick", "select3()");
    newButton.innerHTML = "Select";

    oldButton.parentElement.replaceChild(newButton, oldButton);

    localStorage.removeItem('myDataKey3');
}



function select4() {

    if (localStorage.length <= 1) {

        var correctCard = document.querySelector('#card4');
        var oldButton = correctCard.lastElementChild;
        var newButton = document.createElement("button");

        correctCard.setAttribute("style", "background-color: #33180e;");

        newButton.setAttribute("class", "[ card__btn--right ]");
        newButton.setAttribute("onclick", "deselect4()");
        newButton.innerHTML = "Deselect";

        oldButton.parentElement.replaceChild(newButton, oldButton);

        var someData = 'Margaerys';
        localStorage.setItem('myDataKey4', someData);
    } else {
        playerLimitReached();
    }
}

function deselect4() {

    var correctCard = document.querySelector('#card4');
    var oldButton = correctCard.lastElementChild;
    var newButton = document.createElement("button");

    correctCard.setAttribute("style", "background-color: black;");

    newButton.setAttribute("class", "[ card__btn--right ]");
    newButton.setAttribute("onclick", "select4()");
    newButton.innerHTML = "Select";

    oldButton.parentElement.replaceChild(newButton, oldButton);

    localStorage.removeItem('myDataKey4');
}



function select5() {
    if (localStorage.length <= 1) {
        var correctCard = document.querySelector('#card5');
        var oldButton = correctCard.lastElementChild;
        var newButton = document.createElement("button");

        correctCard.setAttribute("style", "background-color: #33180e;");

        newButton.setAttribute("class", "[ card__btn--right ]");
        newButton.setAttribute("onclick", "deselect5()");
        newButton.innerHTML = "Deselect";

        oldButton.parentElement.replaceChild(newButton, oldButton);

        var someData = 'Daenerys';
        localStorage.setItem('myDataKey5', someData);
    } else {
        playerLimitReached();
    }
}

function deselect5() {

    var correctCard = document.querySelector('#card5');
    var oldButton = correctCard.lastElementChild;
    var newButton = document.createElement("button");

    correctCard.setAttribute("style", "background-color: black;");

    newButton.setAttribute("class", "[ card__btn--right ]");
    newButton.setAttribute("onclick", "select5()");
    newButton.innerHTML = "Select";

    oldButton.parentElement.replaceChild(newButton, oldButton);

    localStorage.removeItem('myDataKey5');
}





function select6() {
    if (localStorage.length <= 1) {

        var correctCard = document.querySelector('#card6');
        var oldButton = correctCard.lastElementChild;
        var newButton = document.createElement("button");

        correctCard.setAttribute("style", "background-color: #33180e;");

        newButton.setAttribute("class", "[ card__btn--right ]");
        newButton.setAttribute("onclick", "deselect6()");
        newButton.innerHTML = "Deselect";

        oldButton.parentElement.replaceChild(newButton, oldButton);

        var someData = 'Lyanna';
        localStorage.setItem('myDataKey6', someData);
    } else {
        playerLimitReached();
    }
}

function deselect6() {

    var correctCard = document.querySelector('#card6');
    var oldButton = correctCard.lastElementChild;
    var newButton = document.createElement("button");

    correctCard.setAttribute("style", "background-color: black;");

    newButton.setAttribute("class", "[ card__btn--right ]");
    newButton.setAttribute("onclick", "select6()");
    newButton.innerHTML = "Select";

    oldButton.parentElement.replaceChild(newButton, oldButton);

    localStorage.removeItem('myDataKey6');
}




function select7() {
    if (localStorage.length <= 1) {

        var correctCard = document.querySelector('#card7');
        var oldButton = correctCard.lastElementChild;
        var newButton = document.createElement("button");

        correctCard.setAttribute("style", "background-color: #33180e;");

        newButton.setAttribute("class", "[ card__btn--right ]");
        newButton.setAttribute("onclick", "deselect7()");
        newButton.innerHTML = "Deselect";

        oldButton.parentElement.replaceChild(newButton, oldButton);

        var someData = 'Shereen';
        localStorage.setItem('myDataKey7', someData);
    } else {
        playerLimitReached();
    }
}

function deselect7() {

    var correctCard = document.querySelector('#card7');
    var oldButton = correctCard.lastElementChild;
    var newButton = document.createElement("button");

    correctCard.setAttribute("style", "background-color: black;");

    newButton.setAttribute("class", "[ card__btn--right ]");
    newButton.setAttribute("onclick", "select7()");
    newButton.innerHTML = "Select";

    oldButton.parentElement.replaceChild(newButton, oldButton);

    localStorage.removeItem('myDataKey7');
}

function select8() {
    if (localStorage.length <= 1) {

        var correctCard = document.querySelector('#card8');
        var oldButton = correctCard.lastElementChild;
        var newButton = document.createElement("button");

        correctCard.setAttribute("style", "background-color: #33180e;");

        newButton.setAttribute("class", "[ card__btn--right ]");
        newButton.setAttribute("onclick", "deselect8()");
        newButton.innerHTML = "Deselect";

        oldButton.parentElement.replaceChild(newButton, oldButton);

        var someData = 'Ellaria';
        localStorage.setItem('myDataKey8', someData);
    } else {
        playerLimitReached();
    }
}

function deselect8() {

    var correctCard = document.querySelector('#card8');
    var oldButton = correctCard.lastElementChild;
    var newButton = document.createElement("button");

    correctCard.setAttribute("style", "background-color: black;");

    newButton.setAttribute("class", "[ card__btn--right ]");
    newButton.setAttribute("onclick", "select8()");
    newButton.innerHTML = "Select";

    oldButton.parentElement.replaceChild(newButton, oldButton);

    localStorage.removeItem('myDataKey8');
}


function select9() {
    if (localStorage.length <= 1) {

        var correctCard = document.querySelector('#card9');
        var oldButton = correctCard.lastElementChild;
        var newButton = document.createElement("button");

        correctCard.setAttribute("style", "background-color: #33180e;");

        newButton.setAttribute("class", "[ card__btn--right ]");
        newButton.setAttribute("onclick", "deselect9()");
        newButton.innerHTML = "Deselect";

        oldButton.parentElement.replaceChild(newButton, oldButton);

        var someData = 'Asha';
        localStorage.setItem('myDataKey9', someData);
    } else {
        playerLimitReached();
    }
}

function deselect9() {

    var correctCard = document.querySelector('#card9');
    var oldButton = correctCard.lastElementChild;
    var newButton = document.createElement("button");

    correctCard.setAttribute("style", "background-color: black;");

    newButton.setAttribute("class", "[ card__btn--right ]");
    newButton.setAttribute("onclick", "select9()");
    newButton.innerHTML = "Select";

    oldButton.parentElement.replaceChild(newButton, oldButton);

    localStorage.removeItem('myDataKey9');
}

function playerLimitReached() {
    document.querySelector('.background--normal').innerHTML += `
    <div class="[ allertbox ]"><p3 class="[ allertbox__text ]">You are not able to choose more than two characters for this game.</p3><button  class="[ allertbox__closer ]" onclick="closeBox()">Close (Click twice)</button></div>
    
`

}

function closeBox(){
    var allertBox = document.querySelector('.background--normal');
    allertBox.removeChild(allertBox.lastChild);

}


// Store data
// var someData = 'The data that I want to store for later.';
// localStorage.setItem('myDataKey', someData);

// Get data
// var data = localStorage.getItem('myDataKey');

// Remove data
// localStorage.removeItem('myDatakey');