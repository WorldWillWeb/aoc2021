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

    // Code ..

    return result;
}

// Solve second puzzle
function sol2(input) {
    let result = 0;

    // Code ..

    return result;
}

/**
 * Make test from 2 previous function and test.txt input
 * @returns bool
 */
function makeTests() {
    let dataText = getFile('test.txt')

    let resultTest1 = 0;
    let resultTest2 = 0;

    let test1 = sol1(dataText);

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