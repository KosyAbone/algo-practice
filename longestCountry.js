/*Write a JavaScript function that accept a list of country names as input and
returns the longest country name as output.*/


const findLongestCountry = countries => {
    let maxLength = countries[0].length
    let longest = ""
    for(let i = 1; i < countries.length; i++){
        if(countries[i].length > maxLength){
            maxLength = countries[i].length
            longest = countries[i]
        }
    }
    return longest
}

console.log(findLongestCountry(["Nigeria", "Ghana", "South Africa", "Canada"]))