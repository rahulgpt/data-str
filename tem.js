let counter = 1;
function printNumbers(counter) {
    if (counter === 5) return;
    console.log(counter);
    return printNumbers(counter + 1)
}

function printPattern(n) {
    let counter = 1;

    function printNumbers(counter) {
        if (counter === n) return;
        console.log(counter);
        return printNumbers(counter + 1)
    }
}

printNumbers(5);

// 1
// 1 2
// 1 2 3
// 1 2 3 4