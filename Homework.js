let arr = [5, 7, 1, 4, 32, 223, 122, 6432, 227];
let stringArr = ["albina", "aligator", "ananas", "Antilopa", "lup"];

function sumOfNums(array) {
    let sum = 0;
    if (array.length === 0) {
        return 0;
    } else {
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum;
    }
}

console.log(sumOfNums(arr));

console.log("*************************************************************************");

function numsGreaterThanTen(array) {
    let innerArr = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 10) {
            innerArr.push(array[i]);
        }
    }
    return innerArr;
}

console.log(numsGreaterThanTen(arr));

console.log("*************************************************************************");

function allStartingWithA(array) {
    if (array.length === 0) {
        return true;
    } else {
        for (let i = 0; i < array.length; i++) {
            let firstLetter = array[i].charAt(0).toLowerCase();
            if (firstLetter !== "a") {
                return false;
            }
        }
        return true;
    }
}

console.log(allStartingWithA(stringArr));

console.log("*************************************************************************");

function hasAtLeastNVowels(word, nrOfVowels) {
    let vowelsSum = 0;
    let vowels = ["a", "e", "i", "o", "u"];
    if (nrOfVowels < 0) {
        return null;
    } else {
        for (let i = 0; i < word.length; i++) {
            for (let j = 0; j < vowels.length; j++) {

                if (word[i].toLowerCase() === vowels[j]) {
                    vowelsSum++;
                }
            }
        }
        if (vowelsSum >= nrOfVowels) {
            return true;
        }
        return false
    }
}

console.log(hasAtLeastNVowels("caracatita", 5))

console.log("*************************************************************************");

function buildObjectFromWords(array) {
    let obj = {};
    for (let i = 0; i < array.length; i++) {
        obj[array[i]] = array[i].length;
    }
    return obj;
}

console.log(buildObjectFromWords(stringArr));