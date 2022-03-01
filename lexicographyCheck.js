/*Given two strings s and t, both consisting of lowercase English letters and digits, your task is to 
calculate how many ways exactly one digit could be removed from one of the strings so that s is 
lexicographically smaller than t after the removal. Note that we are removing only a single instance 
of a single digit, rather than all instances (eg: removing 1 from the string a11b1c could result in 
a1b1c or a11bc, but not abc).

Also note that digits are considered lexicographically smaller than letters.

Example

For s = "ab12c" and t = "1zz456", the output should be solution(s, t) = 1.

Here are all the possible removals:

We can remove the first digit from s, obtaining "ab2c". "ab2c" > "1zz456", so we don't count this removal
We can remove the second digit from s, obtaining "ab1c". "ab1c" > "1zz456", so we don't count this removal
We can remove the first digit from t, obtaining "zz456". "ab12c" < "zz456", so we count this removal
We can remove the second digit from t, obtaining "1zz56". "ab12c" > "1zz56", so we don't count this removal
We can remove the third digit from t, obtaining "1zz46". "ab12c" > "1zz46", so we don't count this removal
We can remove the fourth digit from t, obtaining "1zz45". "ab12c" > "1zz45", so we don't count this removal
The only valid case where s < t after removing a digit is "ab12c" < "zz456". Therefore, the answer is 1.*/
function solution(s,t){
    for(let i = 0; i < s.length || i < t.length; i++)
        
        console.log(s.charCodeAt(i))
        console.log(t.charCodeAt(i))
}
console.log(solution("ab12c", "1zz456"))