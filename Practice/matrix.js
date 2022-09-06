//get input value from User
var mainDivTag = document.getElementById("mainDiv");
var bodyElement = document.getElementById("app");
var row = document.getElementById("row");
var column = document.getElementById("col");
var formElement = document.getElementById("form");
var mineInput = document.getElementById("mines");
var gameStatus = document.getElementById("game-block");
// for placing mines in random position
var uniqueValues = [];
var recursiveIds = [];
var bombCount = 0;
//Example Array
var boxes;
//check whether the create function is clicked or not.
var clicked = 1;
console.log("testing..");
var trTag, tdTag, tableTag, overlayElement;
function create() {
    var clickEvent;
    if (clicked === 1) {
        var count = 0;
        //table tag created
        tableTag = document.createElement("table");
        var rowValue = parseInt(row === null || row === void 0 ? void 0 : row.value);
        var colValue = parseInt(column === null || column === void 0 ? void 0 : column.value);
        //getting mine value from user
        var mineValue = parseInt(mineInput === null || mineInput === void 0 ? void 0 : mineInput.value);
        if (rowValue <= 0 || rowValue === null) {
            console.log("condition working");
        }
        //for loops for creating div elements.
        for (var i = 0; i < rowValue; i++) {
            trTag = document.createElement("tr");
            for (var j = 0; j < colValue; j++) {
                //create a td Element
                tdTag = document.createElement("td");
                overlayElement = document.createElement("div");
                //set id to div
                tdTag.setAttribute("id", "divId".concat(count++));
                tdTag.classList.add("divStyle");
                trTag.appendChild(tdTag);
                overlayElement.classList.add("divTag");
                // overlayElement.append(innerElement);
                trTag.classList.add("positioning");
                tdTag.appendChild(overlayElement);
                // trTag.append(overlayElement);
                tableTag.append(trTag);
                //add the created div element to another div(parent div)
                bodyElement.append(tableTag);
                //add styles to parent div
                bodyElement.classList.add("appStyle");
            }
        }
        var totalDivs = rowValue * colValue;
        console.log("total Divs " + totalDivs);
        placeMines(mineValue, totalDivs);
        clicked++;
    } //End of if condition
} //End of Create Function
//function for placing mines
function placeMines(mineInputValue, totalDivs) {
    //alignment changes in div tag
    for (var i = 0; i < totalDivs; i++) {
        var divs = document.getElementById("divId".concat(i));
        divs.style.cursor = "pointer";
    }
    var rowValues = parseInt(row === null || row === void 0 ? void 0 : row.value);
    var colValues = parseInt(column === null || column === void 0 ? void 0 : column.value);
    //place the random number in Divs
    var randomValue = getRandomMines(mineInputValue, totalDivs, rowValues, colValues);
} //End of placeMines function
//get Random number for mines
//this function for getting non-repeating random Numbers.
function getRandomMines(mineValue, totalDivs, row, column) {
    var _a;
    //for checking the game status
    var checkGameStatus = false;
    if (mineValue.length == 0) {
        console.log("No More Random Numbers");
    }
    if (row >= 1 && column >= 1) {
        while (uniqueValues.length < mineValue) {
            var randomNumbers = Math.floor(Math.random() * totalDivs);
            if (!uniqueValues.includes(randomNumbers)) {
                uniqueValues.push(randomNumbers);
            }
        }
        for (var i = 0; i < uniqueValues.length; i++) {
            var id = uniqueValues[i];
            console.log(document.getElementById("divId".concat(id)));
            //bomb code => &#128163
            //heart code => \u200D\u2764\uFE0F\u200D
            document.getElementById("divId".concat(id)).appendChild(document.createTextNode("💣"));
            var Divs = (_a = document
                .getElementById("divId".concat(id))) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function (event) {
                console.log("Mine clicked");
                gameStatus.style.display = "block";
                // setTimeout(() => {
                //   mainDivTag.style.display = "none";
                // }, 1000)
            });
        }
    }
    else if (row === 0 || column === 0) {
        console.log("Cannot create table with zero values");
        console.log("row value or column value must be Greater than zero");
    }
    else {
        console.log("row and column fields must be filled!!!");
    }
    var divTags = addClickEvent(totalDivs, uniqueValues);
    var checkResult = checking(uniqueValues);
} //End of getRandomMines Function.
//reset Function
function reset() {
    clicked = 1;
    formElement.reset();
    bodyElement.classList.remove("appStyle");
    //deleting div elements in HTML using while loop
    while (bodyElement.firstChild) {
        bodyElement.removeChild(bodyElement.firstChild);
    }
    gameStatus.style.display = "none";
    location.reload();
} //End of reset Function.
function addClickEvent(totalDivs, uniqueValues) {
    var unique = uniqueValues;
    var trTags = document.querySelectorAll(".divTag");
    var tdTags = document.querySelectorAll(".divStyle");
    var _loop_1 = function (i) {
        var divChild = document.querySelectorAll(".divTag");
        var divs = document.getElementById("divId".concat(i));
        if (divs !== null) {
            //  someExFunction();
            var iconPlaced_1 = true;
            divs.addEventListener("click", function (clickEvent) {
                someExFunction(i, tdTags);
                console.log("## Event", clickEvent, i);
                if (!iconPlaced_1) {
                    return;
                }
                if (tdTags[i].classList.contains("divStyle")) {
                    tdTags[i].classList.add("divStyleText");
                }
                divChild[i].classList.add("hide");
                console.log(iconPlaced_1);
                // uniqueValues
            });
            divs.addEventListener("contextmenu", function (event) {
                event.preventDefault();
                if (iconPlaced_1) {
                    var barIcon = document.createTextNode("\ud83d\udeab");
                    divChild[i].appendChild(barIcon);
                    iconPlaced_1 = !iconPlaced_1;
                }
                else {
                    divChild[i].innerHTML = "";
                    iconPlaced_1 = !iconPlaced_1;
                }
            });
        }
    };
    // console.log("trTags");
    // console.log(trTags);
    for (var i = 0; i < totalDivs; i++) {
        _loop_1(i);
    }
}
//*checking function
var someEx = [];
function checking(uniqueValues) {
    var someVar = [];
    var bombCount = 0;
    var MainRow = parseInt(row === null || row === void 0 ? void 0 : row.value);
    var MainCol = parseInt(column === null || column === void 0 ? void 0 : column.value);
    var count = -1;
    for (var i = 0; i < MainRow; i++) {
        someEx[i] = [];
        for (var j = 0; j < MainCol; j++) {
            someEx[i][j] = {
                identifier: ++count,
                isBomb: uniqueValues.includes(count)
            };
        }
    }
    console.log("someEx array");
    console.log(someEx);
    for (var i = 0; i < MainRow; i++) {
        for (var j = 0; j < MainCol; j++) {
            if (!someEx[i][j].isBomb) {
                var localVar = getSurroudingBoxes(i, j);
                // console.log(localVar)
                bombCount = 0;
                for (var _i = 0, localVar_1 = localVar; _i < localVar_1.length; _i++) {
                    var item = localVar_1[_i];
                    var data = someEx[item[0]][item[1]];
                    if (data.isBomb) {
                        bombCount++;
                    }
                }
                if (bombCount > 0) {
                    var text = document.createTextNode(bombCount.toString());
                    var element = document.getElementById("divId".concat(someEx[i][j].identifier));
                    if (element) {
                        element.appendChild(text);
                        element.classList.add("bcounts");
                    }
                }
            }
        }
    }
}
//!get surrounding boxes.
function getSurroudingBoxes(xValue, yValue) {
    var rowLength = parseInt(row === null || row === void 0 ? void 0 : row.value);
    var columnLength = parseInt(column === null || column === void 0 ? void 0 : column.value);
    //conditions for getting neighbouring nodes of Mine.
    var totalValues = rowLength * columnLength;
    var a = [];
    //top left
    if (xValue - 1 >= 0 && yValue - 1 >= 0) {
        a.push([xValue - 1, yValue - 1]);
    }
    //top
    if (xValue - 1 >= 0) {
        a.push([xValue - 1, yValue]);
    }
    //top right
    // if (xValue - 1 >= 0 && yValue + 1 < rowLength) {
    //   a.push([xValue - 1, yValue + 1]);
    // }
    if (xValue - 1 >= 0 && xValue < columnLength && yValue + 1 < rowLength) {
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
    if (xValue + 1 < columnLength) {
        a.push([xValue + 1, yValue]);
    }
    //bottom right
    if (xValue + 1 < columnLength && yValue + 1 < rowLength) {
        a.push([xValue + 1, yValue + 1]);
    }
    return a;
}
// function checkBomb(neighbourArray) {
//   var divHasMine = document.querySelector(".random");
//   let x, y;
//   var mainArray: any[] = [];
//   for (let i = 0; i < neighbourArray.length; i++) {
//     console.log(neighbourArray[i]);
//     console.log("-------------------------");
//   }
//   console.log("from checkBomb function");
// }
function someExFunction(currentIndex, tdTags) {
    console.log("current Index Value is : " + currentIndex);
    var childDiv = document.querySelectorAll(".divTag");
    var rowValue = parseInt(row === null || row === void 0 ? void 0 : row.value);
    var columnValue = parseInt(column === null || column === void 0 ? void 0 : column.value);
    console.log("from someExFunction");
    var resultArray = [];
    // let currentIndex = ;
    var index = 0;
    for (var i = 0; i < rowValue; i++) {
        // resultArray[i] = [];
        for (var j = 0; j < columnValue; j++) {
            // resultArray[i][j] = getSurroudingBoxes(i, j);
            if (currentIndex === index) {
                demoFunction(tdTags);
            }
            index++;
            // emptyArray.push(resultArray[i][j]);
            // console.log(resultArray);
        }
    }
}
function LoopingFunction(surroundBoxes, tdTags) {
    console.log("td tags in Loop function");
    console.log("Looping function called");
    for (var i = 0; i < surroundBoxes.length; i++) {
        if (!uniqueValues.includes(surroundBoxes[i])) {
            var _a = surroundBoxes[i], x = _a[0], y = _a[1];
            var id = someEx[x][y].identifier;
            console.log("id is : " + id);
            var elem = document.getElementById("divId".concat(id));
            if (elem && elem.classList.contains("bcounts")) {
                var selector = "#divId" + id + " .divTag";
                var anotherSelector = "#divId" + id;
                document.querySelector(selector).classList.add("hide");
                document.querySelector(anotherSelector).classList.add("divStyleText");
                recursiveIds.push(selector);
            }
            else {
                var elseSelector = "#divId" + id + " .divTag";
                var elseId = id;
                if (!uniqueValues.includes(elseId)) {
                    if (!recursiveIds.includes(elseSelector)) {
                        document.querySelector(elseSelector).classList.add("hide");
                        recursiveIds.push(elseSelector);
                    }
                }
            }
        }
    }
}
function demoFunction(tdTags) {
    var newRowValue = parseInt(row === null || row === void 0 ? void 0 : row.value);
    var newColValue = parseInt(column === null || column === void 0 ? void 0 : column.value);
    //nested for loop
    for (var i = 0; i < newRowValue; i++) {
        for (var j = 0; j < newColValue; j++) {
            var surroundingBoxes = getSurroudingBoxes(i, j);
            LoopingFunction(surroundingBoxes, tdTags);
        }
    }
}
