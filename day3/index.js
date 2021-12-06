const path = require('path')

/**
 * Read and get input from file path. Split with separator
 * @param string filePath 
 * @param string separator 
 * @returns 
 */
function getFile(filePath, separator = '\n') {
    let result = require('fs')
        .readFileSync(path.join(__dirname, filePath))
        .toString()
        .split(separator);
    return result;
}

// Solve first puzzle
function sol1(input) {
    let result = 0;
    let binaryGammaRate = '';
    let binaryEpsilonRate = '';
    let gammaRate = 0;
    let epsilonRate = 0;
    let binaryLength = input[0].length;
    let bits = [];

    for (let index = 0; index < binaryLength; index++) {
        bits[index] = 0;
    }

    input.forEach(element => {
        for (let index = 0; index < element.length; index++) {
            if (bits[index] == undefined) bits[index] = 0;
            if (element[index] != undefined) bits[index] += parseInt(element[index]);
        }
    });

    for (let index = 0; index < binaryLength; index++) {
       ( Math.round(input.length / 2 )) < bits[index] ? binaryGammaRate += '1' :  binaryGammaRate += '0';
       ( Math.round(input.length / 2 )) > bits[index] ? binaryEpsilonRate += '1' :  binaryEpsilonRate += '0';
    }

    gammaRate = parseInt(binaryGammaRate, 2);
    epsilonRate = parseInt(binaryEpsilonRate, 2);

    result = gammaRate * epsilonRate;
    return result;
}

// Solve second puzzle
function sol2(input) {
    let result = 0;
    let binnaryOxygenRate = '';
    let binnaryCo2Rate = '';
    let oxygenRate = 0;
    let co2Rate = 0;
    let binaryLength = input[0].length;
    let inputs = [input, input];
    let bits = [];
    let rate = [];

    inputs.forEach((elem, k) => {
        for (let index = 0; index < binaryLength; index++) {
            bits[index] = 0;
    
            elem.forEach(el => {
                bits[index] += parseInt(el[index]);
            });
    
            ( k === 0 && Math.round(elem.length / 2 )) <= bits[index] ? binnaryOxygenRate = 1 :  binnaryOxygenRate = 0;
            ( k === 1 && Math.round(elem.length / 2 )) >= bits[index] ? binnaryCo2Rate += 1 :  binnaryCo2Rate += 0;
    
            // Oxygen
            elem.forEach((el,key) => {
                if (el[index] != binnaryOxygenRate) elem.splice(key, 1);;           
            });
        }
        console.log(elem);
        rate[k] = parseInt(elem, 2);
    });

    console.log(rate);
    oxygenRate = parseInt(rate[0], 2);
    co2Rate = parseInt(rate[1], 2);

    result = oxygenRate * co2Rate;
    return result;
}

/**
 * Make test from 2 previous function and test.txt input
 * @returns bool
 */
function makeTests() {
    let dataText = getFile('test.txt')

    let resultTest1 = 198;
    let resultTest2 = 230;

    let test1 = sol1(dataText, 5);

    if (test1 != resultTest1) {
        console.error('Test 1 is wrong! Result = ' + test1 + ' --> Expected this --> ' + resultTest1);
        return false;
    }

    let test2 = sol2(dataText);

    if (test2 != resultTest2) {
        console.error('Test 2 is wrong! Result = ' + test2 + ' --> Expected this --> ' + resultTest2);
        return false;
    }

    return true;
}

// Let's go!
async function runDay() {
    if (makeTests()) {
        let input = getFile('input.txt');
        let result1 = sol1(input);
        console.log('Part 1: ' + result1);
    
        let result2 = sol2(input);
        console.log('Part 2: ' + result2);
    }; 
}

runDay();