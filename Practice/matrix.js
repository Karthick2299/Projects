//get input value from User
var mainDivTag = document.getElementById("mainDiv");
var bodyElement = document.getElementById("app");
var row = document.getElementById("row");
var column = document.getElementById("col");
var formElement = document.getElementById("form");
var mineInput = document.getElementById("mines");
var gameStatus = document.getElementById("game-block");
//Example Array
var boxes;
//check whether the create function is clicked or not.
var clicked = 1;
function create(checked) {
    var isBomb = false;
    if (clicked === 1) {
        var count = 0;
        var boxValue = 1;
        var rowValue = parseInt(row === null || row === void 0 ? void 0 : row.value);
        var colValue = parseInt(column === null || column === void 0 ? void 0 : column.value);
        //getting mine value from user
        var mineValue = parseInt(mineInput === null || mineInput === void 0 ? void 0 : mineInput.value);
        if (rowValue <= 0 || rowValue === null) {
            console.log("condition working");
        }
        //for loops for creating div elements.
        for (var i = 0; i < rowValue; i++) {
            //create break tag
            var br = document.createElement("br");
            for (var j = 0; j < colValue; j++) {
                //create a div Element
                var divElement = document.createElement("div");
                // divElement.innerHTML = `${boxValue++}`
                if (rowValue <= 10 || colValue <= 10) {
                    //adding style to created div element
                    divElement.classList.add("divStyle");
                }
                else if ((rowValue >= 11 || colValue >= 11) &&
                    (rowValue <= 14 || colValue <= 14)) {
                    divElement.classList.add("divStyle2");
                }
                else if ((rowValue >= 15 || colValue >= 15) &&
                    (rowValue <= 22 || colValue <= 22)) {
                    divElement.classList.add("divStyle3");
                }
                else if (rowValue > 22 || colValue > 22) {
                    console.log("max level reached");
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
    // console.log("Given Mine values " + mineInputValue);
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
    // console.log("mine input value " + mineInputValue);
} //End of placeMines function
//get Random number for mines
//this function for getting non-repeating random Numbers.
function getRandomMines(mineValue, totalDivs, row, column) {
    var _a, _b;
    var ranNum = 4;
    console.log(mineValue);
    if (mineValue.length == 0) {
        console.log("No More Random Numbers");
    }
    // var div = document.getElementById("divId4")?.classList.add("random");
    // for placing mines in random position
    var uniqueValues = [];
    if (row >= 1 && column >= 1) {
        while (uniqueValues.length < mineValue) {
            // var randomNumbers = Math.floor(Math.random() * totalDivs);
            var randomNumbers = 1;
            console.log(randomNumbers);
            if (!uniqueValues.includes(randomNumbers)) {
                uniqueValues.push(randomNumbers);
            }
        }
        for (var i = 0; i < uniqueValues.length; i++) {
            console.log("unique values length : " + uniqueValues.length);
            var id = uniqueValues[i];
            console.log(document.getElementById("divId".concat(id)));
            var divs = (_a = document
                .getElementById("divId".concat(id))) === null || _a === void 0 ? void 0 : _a.classList.add("random");
            var Divs = (_b = document
                .getElementById("divId".concat(id))) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function (event) {
                console.log("Mine clicked");
                gameStatus.style.display = "block";
            });
        }
        // document.getElementById(`divId${4}`)?.classList.add("random");
    }
    else if (row === 0 || column === 0) {
        console.log("Cannot create table with zero values");
        console.log("row value or column value must be Greater than zero");
    }
    else {
        console.log("row and column fields must be filled!!!");
    }
    var totalDivTags = totalDivs;
    console.log("unique values");
    console.log(uniqueValues);
    var divTags = addClickEvent(totalDivs, uniqueValues);
    var checkResult = checking(uniqueValues);
    // var matrixFunction = getMatrix(totalDivs);
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
    gameStatus.style.display = "none";
} //End of reset Function.
function addClickEvent(totalDivs, uniqueValues) {
    var unique = uniqueValues;
    for (var i = 0; i < totalDivs; i++) {
        var divs = document.getElementById("divId".concat(i));
        if (divs !== null) {
            divs.addEventListener("click", function (event) {
                console.log("clicked function");
            });
        }
        else {
            console.log("div value is null");
            console.log("else condition satisfied");
        }
    }
}
//checking function
function checking(uniqueValues) {
    var someEx = [];
    var someVar;
    console.log("checking Function");
    // for (let i = 0; i < uniqueValues.length; i++) {
    //   console.log(uniqueValues[i]);
    // }
    var counting = 4;
    var MainRow = parseInt(row === null || row === void 0 ? void 0 : row.value);
    var MainCol = parseInt(column === null || column === void 0 ? void 0 : column.value);
    var count = -1;
    for (var i = 0; i < MainRow; i++) {
        for (var j = 0; j < MainCol; j++) {
            someEx.push({
                xValue: i,
                yValue: j,
                identifier: ++count
            });
            console.log(count);
        }
    }
    for (var i = 0; i < someEx.length; i++) {
        // someVar = getNumberOfBombs(
        getNumberOfBombs(someEx[i].xValue, someEx[i].yValue, 
        // someEx[i].isBomb,
        someEx[i].identifier);
        console.log(someEx[i]);
    }
}
function getNumberOfBombs(xValue, yValue, 
// isBomb: boolean,
identifier) {
    var _a;
    console.log("for loop is working");
    if ((_a = document.getElementById("divId".concat(identifier))) === null || _a === void 0 ? void 0 : _a.classList.contains("random")) {
    }
    var neighbourBoxes = getSurroudingBoxes(xValue, yValue);
    var Result = arrayLooping(neighbourBoxes);
}
function getSurroudingBoxes(xValue, yValue) {
    var rowLength = parseInt(row === null || row === void 0 ? void 0 : row.value);
    var columnLength = parseInt(column === null || column === void 0 ? void 0 : column.value);
    //conditions for getting neighbouring nodes of Mine.
    var totalValues = rowLength * columnLength;
    var a = [];
    console.log("This if condition is working");
    //top left
    if (xValue - 1 >= 0 && yValue - 1 >= 0) {
        a.push([xValue - 1, yValue - 1]);
    }
    //top
    if (xValue - 1 >= 0) {
        a.push([xValue - 1, yValue]);
    }
    //top right
    if (xValue - 1 >= 0 && yValue + 1 < rowLength) {
        a.push([xValue - 1, yValue + 1]);
    }
    //left
    if (yValue - 1 >= 0) {
        a.push([xValue, yValue - 1]);
    }
    //right
    if (yValue + 1 < rowLength) {
        a.push([xValue, yValue + 1]);
    }
    //bottom left
    if (xValue + 1 < columnLength && yValue - 1 >= 0) {
        a.push([xValue + 1, yValue - 1]);
    }
    //bottom
    if (xValue + 1 <= columnLength) {
        a.push([xValue + 1, yValue]);
    }
    //bottom right
    if (xValue + 1 < columnLength && yValue + 1 < rowLength) {
        a.push([xValue + 1, yValue + 1]);
    }
    return a;
}
function arrayLooping(array) {
    console.log("from arrayLooping function");
}
