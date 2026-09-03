const browserVersion="chrome"
function getBrowserVersion(){
    if(browserVersion=="chrome"){
        let browserVersion="firefox"
        console.log("Inside the block",browserVersion)
    }
        console.log("outside the block",browserVersion)
}
getBrowserVersion()
