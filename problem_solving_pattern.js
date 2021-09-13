// Implement a function that takes 2 arrays as input.
// Function should return true if every value in the array has its
// corresponding value squared in the second array.

function same(arr1, arr2) {
    for (el in arr1) {
        result = arr2.includes(el * el);
        console.log(result)

        if (result) return false;
    }

    return true
}

firstArray = [2]
secondArray = [4]

console.log(same(firstArray, secondArray));




// ----------------------------------

// Anagram using frequency counter pattern

function validAnagram(str1, str2) {
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (let val of str1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }

    for (let val of str2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    for (let key in frequencyCounter1) {
        console.log('Hi')
    }
}