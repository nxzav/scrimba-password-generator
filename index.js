const genPassBtn = document.querySelector('#genPassBtn');
const textDisplay1 = document.querySelector('#textDisplay1');
const textDisplay2 = document.querySelector('#textDisplay2');
const alertEl = document.querySelector('#alertEl');

// Filter Characters from array
function setCharacters() {
    const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
        "/"];
    const toggleSymbols = document.querySelector('#toggleSymbols').checked;
    const toggleNumbers = document.querySelector('#toggleNumbers').checked;
    if (toggleSymbols === true && toggleNumbers === true) {
        return characters;
    } else if (toggleSymbols === false && toggleNumbers === true) {
        characters.splice(62);
        return characters;
    } else if (toggleNumbers === false && toggleSymbols === true) {
        characters.splice(52, 10);
        return characters;
    } else {
        characters.splice(52);
        return characters;
    }
}

// Password Generation
function generatePassword() {
    const filteredCharacters = setCharacters();
    const getRandomNumber = () => Math.floor(Math.random() * filteredCharacters.length);
    const passwordLength = Number(
        document.querySelector('#passwordLength').value
    );
    if (passwordLength >= 8 && passwordLength <= 20) {
        alertEl.textContent = '';
        for (let i = 0; i < passwordLength; i++) {
            textDisplay1.textContent += filteredCharacters[getRandomNumber()];
            textDisplay2.textContent += filteredCharacters[getRandomNumber()];
        }
    } else {
        alertEl.textContent = 'Password must be at least 8 and max 20 characters';
    }
}

genPassBtn.addEventListener('click', () => {
    textDisplay1.textContent = '';
    textDisplay2.textContent = '';
    generatePassword();
});

// Copy-On-Click

function copyOnClick(textDisplay) {
    const textToCopy = textDisplay.textContent;
    var tempTextarea = document.createElement('textarea');
    tempTextarea.value = textToCopy;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    tempTextarea.setSelectionRange(0, 99999);
    document.execCommand('copy');
    document.body.removeChild(tempTextarea);
    alertEl.textContent = 'Password copied to Clipboard! ' + textToCopy;
}

textDisplay1.addEventListener('click', () => {
    copyOnClick(textDisplay1);
});

textDisplay2.addEventListener('click', () => {
    copyOnClick(textDisplay2);
});