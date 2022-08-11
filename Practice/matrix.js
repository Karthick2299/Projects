//get input value from User
var mainDivTag = document.getElementById("mainDiv");
var bodyElement = document.getElementById("app");
var row = document.getElementById("row");
var column = document.getElementById("col");
var formElement = document.getElementById("form");
var mineInput = document.getElementById("mines");
//check whether the create function is clicked or not.
var clicked = 1;
function create() {
    if (clicked === 1) {
        var count = 0;
        var rowValue = parseInt(row === null || row === void 0 ? void 0 : row.value);
        var colValue = parseInt(column === null || column === void 0 ? void 0 : column.value);
        //getting mine value from user
        var mineValue = parseInt(mineInput === null || mineInput === void 0 ? void 0 : mineInput.value);
        if (rowValue <= 0 || rowValue === null) {
            console.log("condition working");
        }
        //for loops for creating div elements.
        for (var i = 1; i <= rowValue; i++) {
            //create break tag
            var br = document.createElement("br");
            for (var j = 1; j <= colValue; j++) {
                //create a div Element
                var divElement = document.createElement("div");
                if (rowValue <= 10 || colValue <= 10) {
                    //adding style to created div element
                    divElement.classList.add("divStyle");
                }
                else if ((rowValue >= 11 || colValue >= 11) && (rowValue <= 14 || colValue <= 14)) {
                    divElement.classList.add("divStyle2");
                }
                else if (rowValue >= 15 || colValue >= 15) {
                    divElement.classList.add("divStyle3");
                }
                //set id to div
                divElement.setAttribute("id", "divId".concat(count++));
                //add the created div element to another div(parent div)
                bodyElement.append(divElement);
                //add styles to parent div
                bodyElement.classList.add("appStyle");
                console.log(divElement);
            }
            //adding break tag for forming the correct matrix pattern.
            bodyElement.appendChild(br);
        }
        var totalDivs = rowValue * colValue;
        console.log("total Divs " + totalDivs);
        placeMines(mineValue, totalDivs);
        clicked++;
    } //End of if condition
} //End of Create Function
//function for placing mines
function placeMines(mineInputValue, totalDivs) {
    console.log("Given Mine values " + mineInputValue);
    var anotherDiv = document.querySelectorAll(".divStyle");
    var mineArray = [];
    //adding mine input values into array using for loop
    for (var i = 1; i <= mineInputValue; i++) {
        mineArray.push(i);
    }
    var rowValues = parseInt(row === null || row === void 0 ? void 0 : row.value);
    var colValues = parseInt(column === null || column === void 0 ? void 0 : column.value);
    //place the random number in Divs
    var randomValue = getRandomMines(mineInputValue, totalDivs, rowValues, colValues);
    console.log("mine input value " + mineInputValue);
} //End of placeMines function
//get Random number for mines
//this function for getting non-repeating random Numbers.
function getRandomMines(mineValue, totalDivs, row, column) {
    var _a;
    console.log(mineValue);
    if (mineValue.length == 0) {
        console.log("No More Random Numbers");
    }
    var uniqueValues = [];
    if (row >= 1 && column >= 1) {
        while (uniqueValues.length < mineValue) {
            var randomNumbers = Math.floor(Math.random() * totalDivs);
            console.log(randomNumbers);
            if (!uniqueValues.includes(randomNumbers)) {
                uniqueValues.push(randomNumbers);
            }
        }
        for (var i = 0; i < uniqueValues.length; i++) {
            var id = uniqueValues[i];
            console.log(document.getElementById("divId".concat(id)));
            var divs = (_a = document
                .getElementById("divId".concat(id))) === null || _a === void 0 ? void 0 : _a.classList.add("random");
        }
    }
    else if (row === 0 || column === 0) {
        console.log("Cannot create table with zero values");
        console.log("row value or column value must be Greater than zero");
    }
    else {
        console.log("row and column fields must be filled!!!");
    }
    var divTags = addClickEvent(totalDivs);
} //End of getRandomMines Function.
//reset Function
function reset() {
    clicked = 1;
    console.log("reset working");
    formElement.reset();
    bodyElement.classList.remove("appStyle");
    //deleting div elements in HTML using while loop
    while (bodyElement.firstChild) {
        bodyElement.removeChild(bodyElement.firstChild);
    }
} //End of reset Function.
function addClickEvent(totalDivs) {
    for (var i = 0; i < totalDivs; i++) {
        var divs = document.getElementById("divId".concat(i));
        if (divs !== null) {
            divs.addEventListener("click", function (event) {
                console.log("from div tags");
            });
        }
        else {
            console.log("div value is null");
            console.log("else condition satisfied");
        }
    }
}
// for (let i = 0; i < divElements.length; i++) {
//   for (let j = 0; j < 3; j++) {
//     console.log(i);
//   }
// }
