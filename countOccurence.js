/*Write a JavaScript function that accepts two arguments, a string and a letter
and the function will count the number of occurrences of the specified letter
within the string.*/

const countOccurence = (str, letter) => {
    let count = 0
    for(let x of str)
        x == letter ? count++ : null
    return count
}

console.log(countOccurence("hellllo", "l"))