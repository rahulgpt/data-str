function bubbleSort1(arr) {
    // Loop from end to beginning 
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j + 1]);
            if (arr[j] > arr[j + 1]) {
                // SWAP
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
        console.log('ONE PASS COMPLETE!')
    }

    return arr;
}

console.log(bubbleSort2([37, 24, 56, 2, -2, -9, 53, 62, 63, 74, 125]));

// ES 5 version

function bubbleSort2(arr) {
    const swap = (arr, i1, i2) => {
        [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
    }

    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
    return arr;
}

// For an almost sorted array

// One optimisation that we can do is 
// we can check if there was no swap in 
// the previous pass so that we know that 
// all elements are now sorted.

function bubbleSort(arr) {
    const swap = (arr, i1, i2) => {
        [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
    }

    let noSwaps;

    for (let i = arr.length; i > 0; i--) {
        noSwaps = true
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr;
}

