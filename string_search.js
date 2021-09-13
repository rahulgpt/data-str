function stringSearch(string, subString) {
    for (let i = 0; i <= string.length; i++) {
        for (let j = 0; j <= subString.length; j++) {
            if (string[i] !== subString[i + j]) break;
        }
    }
}