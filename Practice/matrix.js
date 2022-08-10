//get input value from User
var mainDivTag = document.getElementById("mainDiv");
var bodyElement = document.getElementById("app");
var row = document.getElementById("row");
var column = document.getElementById("col");
var formElement = document.getElementById("form");
var mineInput = document.getElementById("mines");
//check whether the create function is clicked or not.
function create() {
    var count = 1;
    var rowValue = parseInt(row === null || row === void 0 ? void 0 : row.value);
    var colValue = parseInt(column === null || column === void 0 ? void 0 : column.value);
    //getting mine value from user
    var mineValue = parseInt(mineInput === null || mineInput === void 0 ? void 0 : mineInput.value);
    // //store length of the Input fields
    // let rowLength: number = mineInput.value.length;
    // let colLength: number = mineInput.value.length;
    // let mineLength: number = mineInput.value.length;
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
    var getDivCreatedElement = document.querySelectorAll(".divStyle");
    placeMines(mineValue, totalDivs);
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
    // console.log("Mine input value from for loop" + mineArray);
    //place the random number in Divs
    var randomValue = getRandomMines(mineInputValue, totalDivs);
    console.log("mine input value " + mineInputValue);
    console.log("random Values variable");
    console.log(randomValue);
} //End of placeMines function
//get Random number for mines
//this function for getting non-repeating random Numbers.
function getRandomMines(mineValue, totalDivs) {
    console.log(mineValue);
    if (mineValue.length == 0) {
        console.log("No More Random Numbers");
    }
    var randomNums = [];
    var j = 0;
    // while (randomNums.length <= mineValue.length) {
    //   console.log("while loop is working");
    //    var randomValues = Math.floor(Math.random() * totalDivs);
    //   randomNums.push(randomValues);
    //   console.log(randomValues);
    //   // ArrayOfMines.splice(j, 1);
    // }
    var demo = [];
    var uniqueValues = [];
    for (var i = 1; i <= mineValue; i++) {
        var randomNumbers = Math.floor(Math.random() * totalDivs);
        demo.push(randomNumbers);
        if (!uniqueValues.includes(randomNumbers)) {
            uniqueValues.push(randomNumbers);
        }
    }
    console.log(uniqueValues);
    console.log("demoArray");
    console.log(demo);
    return randomNums;
} //End of getRandomMines Function.
//reset Function
function reset() {
    console.log("reset working");
    formElement.reset();
    bodyElement.classList.remove("appStyle");
    //deleting div elements in HTML using while loop
    while (bodyElement.firstChild) {
        bodyElement.removeChild(bodyElement.firstChild);
    }
} //End of reset Function.
//delete the boxes if we want to create boxes again.
// function deleteContent() {
//   while (bodyElement.firstChild) {
//     bodyElement.removeChild(bodyElement.firstChild);
//   }
// } //End of deleteContent Function
