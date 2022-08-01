var textField = document.querySelector(".text-field");
var btn = document.querySelector(".btn");
var showOutput = document.querySelector("#text");

var OTP;

function generateOTP(){
    console.log("function called");
    var string = "0123456789";
    OTP = "";
    var length = string.length;

    for(let i = 0; i < 6; i++){
        OTP += string[Math.floor(Math.random() * length)];
    }

    var displayOutput = document.getElementById("demo").innerHTML = OTP;
    // return OTP;

}

