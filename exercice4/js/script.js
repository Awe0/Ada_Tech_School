const textarea = document.getElementById("zoneLatin")
const validButton = document.getElementById("valid")
const baliseText = document.getElementById("text")
const baliseCutText = document.getElementById("cutText")
const baliseTranslatText = document.getElementById("translatText")
const morseArea = document.getElementById("zoneMorse")
const validBMorse = document.getElementById("validMorse")

function click(){
    validButton.addEventListener("click", () => {
        const entryUser = textarea.value
        translateLatinWord(entryUser)
    })
}

function clickBMorse(){
    validBMorse.addEventListener("click", () => {
        const entryUserMorse = morseArea.value
        translateMorseWord(morseArea.value)
        getMorseCharacterList(entryUserMorse)
    })
}

function translateLatinWord(caracterArray){
    for(let i = 0; i<caracterArray.length; i++){
        baliseTranslatText.innerText += latinToMorse[caracterArray[i]] + " "
    }
}

function translateMorseWord(caracterArray){
    for(let i = 0; i<caracterArray.length; i++){
        baliseTranslatText.innerText += morseToLatin[caracterArray[i]]
    }
}

function getMorseCharacterList(entryUser){
    let a = []
    for(let i = 0; i<entryUser.length; i++){
        a = entryUser.split('')
        console.log(a);
    }
}

click();
clickBMorse();