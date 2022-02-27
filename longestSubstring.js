/*Write a JavaScript function to find longest substring in a given a string without
repeating characters.*/

const longestSubstr = str => {
    let arr = []
    for(let x = 0; x < str.length; x++){
        if(arr.includes(str[x]) == -1)
            arr.push(str[x])
    }
    console.log(arr)
    return arr.length
}

console.log(longestSubstr("abracadabra"))