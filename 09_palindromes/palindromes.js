const palindromes = function (str) {
    const fotmattedString = str
        .toLowerCase()
        .split('')
        .filter((item) => item != '!' && item != ',' && item != '.' && item != ' ' )
        .join()
    const reversedFormattedString = fotmattedString
        .split('')
        .reverse()
        .join('')
    return fotmattedString == reversedFormattedString
};

// Do not edit below this line
module.exports = palindromes;
