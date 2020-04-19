function changeVocals(str) {
    let result = '';
    let changed = [];
    let temp = '';
    let alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let i = 0; i < str.length; i++) {
        temp += str[i];
        for (let j = 0; j < alpha.length; j++) {
            if (temp[i] == alpha[j]) {
                if (alpha[j] == 'a' || alpha[j] == 'i' || alpha[j] == 'u' || alpha[j] == 'e' || alpha[j] == 'o' || alpha[j] == 'A' || alpha[j] == 'I' || alpha[j] == 'U' || alpha[j] == 'E' || alpha[j] == 'O') {
                    changed.push(alpha[j + 1]);
                } 
                else {
                    changed.push(alpha[j]);
                }
            }
        }
        result += changed[i];
    }
    return result;
}
function reverseWord(str) {
    let result = '';
    for (i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}
function setLowerUpperCase(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] == str[i].toUpperCase()) {
            result += str[i].toLowerCase();
        } 
        else {
            result += str[i].toUpperCase();
        }
    }
    return result;
}
function removeSpaces(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            result += str[i];
        }
    }
    return result;
}
function passwordGenerator(name) {
    let result = '';
    if (name.length < 5) {
        result = `Minimal karakter yang diinputkan adalah 5 karakter`;
    } 
    else {
        let noSpace = removeSpaces(name);
        let changeVoc = changeVocals(noSpace);
        let revWord = reverseWord(changeVoc);
        let upLow = setLowerUpperCase(revWord);
        result = upLow;
    }
    return result;
}
console.log(passwordGenerator('Sergei Dragunov'));// 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'