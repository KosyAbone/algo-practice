//Given the following array, write a function called "printEvens tat console logs all of the even numbers

function printEvens(array) {
    let newArr = []
    for(let outerInd = 0; outerInd < array.length; outerInd++){
        for(let innerInd = 0; innerInd < array[outerInd].length; innerInd++){
            if(array[outerInd][innerInd] % 2 === 0){
                newArr.push(array[outerInd][innerInd])
            }
        }
    }
    return newArr
}

const nestedArr = [[1,2,3], [4,5,6], [7,8], [9,10,11,12]]
console.log(printEvens(nestedArr))