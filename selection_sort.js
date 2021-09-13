const swap = (arr, i1, i2) => {
    [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) lowest = j;
        }
        if (i !== lowest) {
            let temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
            console.log(`Swapped: ${arr[i]} ${arr[lowest]}`)
        }
    }
    return arr;
}

console.log(selectionSort([23, 43, 25, 1, 32]))

// [23, 43, 25, 1, 32]
//   0   1   2   3   4   
//  ptr             i
//             min         

