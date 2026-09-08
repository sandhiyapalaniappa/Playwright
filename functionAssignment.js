// Function Declaration

function userProfile(name){
    
    console.log( `Hello, ${name}!` )
}
userProfile("sandhiya")

// Arrow Function

    const double = (num)=> num * 2
    console.log(double(30)) 
 
// Anonymous Function

setTimeout(function(){
    console.log("This message is delayed by 2 seconds")
}  , 2000)
  
 // callback Function
 
 const callbackFunc = ()=>console.log("Call Back Function")
 function getUserData(cb) {
    
    setTimeout(()=>{
        cb()
    },3000)
 }
getUserData(callbackFunc)
    