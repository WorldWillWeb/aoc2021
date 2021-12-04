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
function sol1(input, activeAim = false) {
    let result = 0;
    let depths = 0;
    let hPosition = 0;
    let aim = 0;

    input.forEach((element) => {
        let command = element.split(' ');
        let instruction = command[0];
        let unit = parseInt(command[1]);
        switch (instruction) {
            case 'forward':
                if (activeAim) {
                    hPosition += unit;
                    if (aim > 0) depths += (unit * aim);
                } else {
                    hPosition += unit;
                }
                break;
            case 'down':
                if (activeAim) {
                    aim += unit;
                } else {
                    depths += unit;
                }
                break;
            case 'up':
                if (activeAim) {
                    aim -= unit;
                } else {
                    depths -= unit;
                }
                break;
            default:
                break;
        }
    
    });

    result = hPosition * depths;
    return result;
}

// Solve second puzzle
function sol2(input) {
    let result = 0;

    result = sol1(input, true);

    return result;
}

/**
 * Make test from 2 previous function and test.txt input
 * @returns bool
 */
function makeTests() {
    let dataText = getFile('test.txt')

    let resultTest1 = 150;
    let resultTest2 = 900;

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