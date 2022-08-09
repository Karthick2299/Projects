//get input value from User
var mainDivTag = document.getElementById("mainDiv");
var bodyElement = document.getElementById("app");
var row = document.getElementById("row");
var column = document.getElementById("col");
var formElement = document.getElementById("form");
var mineInput = document.getElementById("mines");
function create() {
    var rowValue = parseInt(row === null || row === void 0 ? void 0 : row.value);
    var colValue = parseInt(column === null || column === void 0 ? void 0 : column.value);
    //getting mine value from user
    var mineValue = parseInt(mineInput === null || mineInput === void 0 ? void 0 : mineInput.value);
    //for loops for creating div elements.
    for (var i = 1; i <= rowValue; i++) {
        //create break tag
        var br = document.createElement("br");
        for (var j = 1; j <= colValue; j++) {
            //create a div Element
            var divElement = document.createElement("div");
            //adding style to created div element
            divElement.classList.add("divStyle");
            //set id to div
            divElement.setAttribute("id", "divId");
            //add the created div element to another div(parent div)
            bodyElement.append(divElement);
            //add styles to parent div
            bodyElement.classList.add("appStyle");
            console.log(divElement);
        }
        //adding break tag for forming the correct matrix pattern.
        bodyElement.appendChild(br);
    }
    var totalDivs = rowValue + colValue;
    console.log(totalDivs);
    //forloop for placing mines randomly in div.
    var getDivCreatedElement = document.querySelectorAll("#divId");
    console.log(getDivCreatedElement);
    //checking the invalid input values
    if (rowValue === null ||
        rowValue < 0 ||
        rowValue === 0 ||
        colValue === 0 ||
        colValue === null ||
        colValue < 0) {
        console.log("Invalid Input");
    }
}
//reset Function
function reset() {
    console.log("reset working");
    formElement.reset();
    var divId = document.getElementById("divId");
    bodyElement.classList.remove("appStyle");
    //deleting div elements in HTML using while loop
    while (bodyElement.firstChild) {
        bodyElement.removeChild(bodyElement.firstChild);
    }
}
