/*
//Example 1

function stringSplit() {
    let s = "Hello World"
    let sArray = s.split(" ")
    let sLength = sArray.length

    for (let i = 0; i < sArray.length; i++) {
        if (i === sLength - 1) {
            const sLast = sArray[i];
            console.log(`The last word is ${sLast} with lenght`, sLast.length)
        }
    }
}

stringSplit()

//Example 2


function stringTrim() {
    let s = " fly me  to  the moon "
    let sWord = s.trim()

    let sSentence = sWord.split(" ")
    let sLength = sSentence.length

    for (let i = 0; i< sSentence.length; i++) {
        if (i === sLength - 1) {
            const sCalculate = sSentence[i];
            console.log(`The last word is ${sCalculate} with lenght`, sCalculate.length);
        }
    }

}
stringTrim()
*/

//Example 3

function isAnagram(a, b) {
    let s1 = a.trim().toLowerCase().split("").sort().join("")
    let s2 = b.trim().toLowerCase().split("").sort().join("")

    if (s1 === s2) {
        return true
    }
    else {
        return false
    }
}
let a1 = isAnagram(' Listen ', ' Silent ')
let a2 = isAnagram(' Hello ', ' World')

console.log(a1);
console.log(a2);