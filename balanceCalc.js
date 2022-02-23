function solution(deposit, rate, threshold){
    let year = 0
    let Amt = deposit

    for(year = 0; Amt <= threshold; year++){
        rate = (rate/100) * Amt
        Amt += rate
    }
    console.log(year)
    return year

}

console.log(solution(100, 20, 170))