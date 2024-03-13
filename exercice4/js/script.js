const textarea = document.getElementById("zoneLatin")
const validButton = document.getElementById("valid")
const baliseText = document.getElementById("text")
const baliseCutText = document.getElementById("cutText")
const baliseTranslatText = document.getElementById("translatText")
const baliseTranslatTextM = document.getElementById("translatTextM")
const morseArea = document.getElementById("zoneMorse")
const validBMorse = document.getElementById("validMorse")

function click(){
    validButton.addEventListener("click", () => {
        const entryUser = textarea.value
        baliseTranslatText.innerText = null
        translateLatinWord(entryUser)
    })
    validBMorse.addEventListener("click", () => {
        const entryUserMorse = morseArea.value
        baliseTranslatTextM.innerText = null
        const arrMorse = getMorseCharacterList(entryUserMorse)
        translateMorseWord(arrMorse)
    })
}

function translateLatinWord(caracterArray){
    for(let i = 0; i<caracterArray.length; i++){
        baliseTranslatText.innerText += latinToMorse[caracterArray[i]] + " "
    }
}

function translateMorseWord(caracterArray){
    for(let i = 0; i<caracterArray.length; i++){
        baliseTranslatTextM.innerText += morseToLatin[caracterArray[i]]
    }
}

function getMorseCharacterList(entryUser){
    const a = []
    let searchTerm = '';
    entryUser += ' '
    console.log(entryUser);
    for(i = 0; i<entryUser.length; i++){
        if (entryUser[i] !== ' ') {
           searchTerm += entryUser[i]
        }
        else if (searchTerm !== '') {
            a.push(searchTerm);
            searchTerm = '';
        }
    }
return a
}

click();