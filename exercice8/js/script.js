const color = ["blue", "green", "red", "yellow","GUESS"];
const divButton = document.getElementById("divButton");
const divGuess = document.getElementById("userGuess");
const guessButton = document.getElementById("guessButton");
let buttonArray = [];

function createButton(){
    for (let i = 0; i < color.length; i++) {
        const colorButton = document.createElement("button");
        divButton.appendChild(colorButton);
        colorButton.setAttribute("id", color[i]);
        colorButton.innerText = color[i];
        buttonArray.push(colorButton);
    }
}

function guess(){
    let guessArray = [];
    for (let i = 0; i < buttonArray.length; i++) {
        buttonArray[i].addEventListener("click", function(e){
            const idElement = e.currentTarget.id;
            guessArray.push(idElement);
            if (guessArray.length === 4) {
                displayGuess(guessArray);
            }
            else if (guessArray.length > 4){
                guessArray = []
            }
        })
    }
}

function displayGuess(guessArray){
    const liGuessing = document.createElement("li");
    divGuess.appendChild(liGuessing);
    liGuessing.innerText = guessArray;
}

// guessButton.addEventListener("click", () => {})
createButton();
guess();