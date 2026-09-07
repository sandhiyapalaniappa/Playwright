// To verify the given string is Palindrome
function toReverseString(s){
    let stringReverse ="" 
    let stringSplit = s.split("")                  // Converts string into array
    //using loop to reverse the splitted string
    for(let i=stringSplit.length - 1; i>=0; i--){
        stringReverse = stringReverse + stringSplit[i];   // Concatenate the reversed string
    }
    console.log(`Reversed String : ${stringReverse}`) 
    return stringReverse
}
// To check if the given string and reverse string are the same, it is a palindrome]
function toCheckPalindrome(s,stringReverse){
    if(s === stringReverse)
        console.log(`True, The given string ${s} is a palindrome!!`)
    else
        console.log(`False, The given string ${s} is not a palindrome`)
}
toCheckPalindrome('level',toReverseString('level'))
toCheckPalindrome('cat',toReverseString('cat'))