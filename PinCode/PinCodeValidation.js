const pinRegex = RegExp("^[0-9]{6}$");
function validatePIN(pin){
    if(pinRegex.test(pin))
        console.log(pin + " is a valid PIN.");
    else
        throw pin + " is an invalid PIN.";
}
try{
    validatePIN("533274");   //valid
    validatePIN("7869");  //invalid - PIN has to be 6 digits
}catch(e){
    console.error(e);
}