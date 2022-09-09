//get input value from User
var mainDivTag = <HTMLDivElement>document.getElementById("mainDiv");
var bodyElement = <HTMLBodyElement>document.getElementById("app");
var row = <HTMLInputElement>document.getElementById("row");
var column = <HTMLInputElement>document.getElementById("col");
var formElement = <HTMLFormElement>document.getElementById("form");
var mineInput = <HTMLInputElement>document.getElementById("mines");
var gameStatus = <HTMLDivElement>document.getElementById("game-block");
// for placing mines in random position
const uniqueValues: number[] = [];
const recursiveIds: any[] = [];
var bombCount = 0;

interface box {
  identifier: number;
  isBomb: boolean;
}
//Example Array
var boxes: box[];

//check whether the create function is clicked or not.
let clicked: number = 1;
console.log("testing..");
var trTag, tdTag, tableTag, overlayElement;
function create() {
  let clickEvent;
  if (clicked === 1) {
    let count = 0;
    //table tag created
    tableTag = document.createElement("table");

    let rowValue: number = parseInt(row?.value);

    let colValue: number = parseInt(column?.value);
    //getting mine value from user
    let mineValue: number = parseInt(mineInput?.value);

    if (rowValue <= 0 || rowValue === null) {
      console.log("condition working");
    }
    //for loops for creating div elements.
    for (let i = 0; i < rowValue; i++) {
      trTag = document.createElement("tr");

      for (let j = 0; j < colValue; j++) {
        //create a td Element
        tdTag = document.createElement("td");
        overlayElement = document.createElement("div");

        //set id to div
        tdTag.setAttribute("id", `divId${count++}`);
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

    const totalDivs = rowValue * colValue;
    console.log("total Divs " + totalDivs);

    placeMines(mineValue, totalDivs);

    clicked++;
  } //End of if condition
} //End of Create Function

//function for placing mines
function placeMines(mineInputValue: number, totalDivs: any): void {
  //alignment changes in div tag
  for (let i = 0; i < totalDivs; i++) {
    const divs = document.getElementById(`divId${i}`);
    (<HTMLDivElement>divs).style.cursor = "pointer";
  }

  let rowValues = parseInt(row?.value);
  let colValues = parseInt(column?.value);

  //place the random number in Divs
  var randomValue = getRandomMines(
    mineInputValue,
    totalDivs,
    rowValues,
    colValues
  );
} //End of placeMines function

//get Random number for mines
//this function for getting non-repeating random Numbers.
function getRandomMines(
  mineValue: any,
  totalDivs: any,
  row: number,
  column: number
): void {
  //for checking the game status
  let checkGameStatus: boolean = false;
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

    for (let i = 0; i < uniqueValues.length; i++) {
      const id = uniqueValues[i];
      console.log(document.getElementById(`divId${id}`));

      var divParent = "#divId" + id;
      var bombSelector = "#divId" + id + " .divTag";
      document.querySelector(bombSelector).classList.add("bomb");
      document.querySelector(divParent).classList.add("demo");

      //bomb code => &#128163
      //heart code => \u200D\u2764\uFE0F\u200D
      (<HTMLElement>document.getElementById(`divId${id}`)).appendChild(
        document.createTextNode("💣")
      );

      let Divs = document
        .getElementById(`divId${id}`)
        ?.addEventListener("click", function (event) {
          console.log("Mine clicked");
          gameStatus.style.display = "block";
          setTimeout(() => {
            // bombSelector.classList.add("hide");
          }, 1000);
        });
    }
  } else if (row === 0 || column === 0) {
    console.log("Cannot create table with zero values");
    console.log("row value or column value must be Greater than zero");
  } else {
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
  let unique = uniqueValues;

  const trTags = document.querySelectorAll(".divTag");
  const tdTags = document.querySelectorAll(".divStyle");

  // console.log("trTags");
  // console.log(trTags);

  for (let i = 0; i < totalDivs; i++) {
    const divChild = document.querySelectorAll(".divTag");
    const divs = document.getElementById(`divId${i}`);
    if (divs !== null) {
      //  someExFunction();
      let iconPlaced = true;

      divs.addEventListener("click", (clickEvent) => {
        someExFunction(i, tdTags);

        console.log("## Event", clickEvent, i);

        if (!iconPlaced) {
          return;
        }
        if (tdTags[i].classList.contains("divStyle")) {
          tdTags[i].classList.add("divStyleText");
        }
        divChild[i].classList.add("hide");
        console.log(iconPlaced);

        // uniqueValues
      });

      divs.addEventListener("contextmenu", function (event) {
        event.preventDefault();

        if (iconPlaced) {
          var barIcon = document.createTextNode("\ud83d\udeab");
          divChild[i].appendChild(barIcon);

          iconPlaced = !iconPlaced;
        } else {
          divChild[i].innerHTML = "";
          iconPlaced = !iconPlaced;
        }
      });
    }
  }
}

var someEx: any[] = [];

//*checking function
function checking(uniqueValues: any) {
  let someVar: any[] = [];

  let bombCount = 0;

  let MainRow = parseInt(row?.value);
  let MainCol = parseInt(column?.value);
  let count = -1;
  for (let i = 0; i < MainRow; i++) {
    someEx[i] = [];
    for (let j = 0; j < MainCol; j++) {
      someEx[i][j] = {
        identifier: ++count,
        isBomb: uniqueValues.includes(count),
      };
    }
  }

  console.log("someEx array");
  console.log(someEx);

  for (let i = 0; i < MainRow; i++) {
    for (let j = 0; j < MainCol; j++) {
      if (!someEx[i][j].isBomb) {
        var localVar = getSurroudingBoxes(i, j);
        // console.log(localVar)

        bombCount = 0;
        for (let item of localVar) {
          let data = someEx[item[0]][item[1]];
          if (data.isBomb) {
            bombCount++;
          }
        }
        if (bombCount > 0) {
          let text = document.createTextNode(bombCount.toString());
          let element = document.getElementById(
            `divId${someEx[i][j].identifier}`
          );
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
function getSurroudingBoxes(xValue: number, yValue: number): number[] {
  var rowLength = parseInt(row?.value);
  var columnLength = parseInt(column?.value);
  //conditions for getting neighbouring nodes of Mine.
  let totalValues = rowLength * columnLength;

  let a: any[] = [];
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

function someExFunction(currentIndex: number, tdTags) {
  console.log("current Index Value is : " + currentIndex);
  let Example: any[] = [];

  console.log("array value : ");
  console.log(Example);

  var childDiv = document.querySelectorAll(".divTag");
  let bombEl = document.querySelectorAll(".bomb");

  let rowValue = parseInt(row?.value);
  let columnValue = parseInt(column?.value);

  let totalDivs = rowValue * columnValue;

  console.log("from someExFunction");

  var resultArray: any[][] = [];
  // let currentIndex = ;
  let index = 0;
  for (let i = 0; i < rowValue; i++) {
    resultArray[i] = [];
    for (let j = 0; j < columnValue; j++) {
      // resultArray[i][j] = getSurroudingBoxes(i, j);

      if (currentIndex === index) {
        let array: any[] = [];
        var bCounts = document.querySelectorAll(".bcounts");
        let countElement = document.getElementById(`divId${currentIndex}`);
        let el = "#divId" + currentIndex + " .divTag";
        console.log(countElement);

        if (uniqueValues.includes(currentIndex)) {
          for (let i = 0; i < tdTags.length; i++) {
            if (tdTags[i].classList.contains("demo")) {
              tdTags[i].classList.add("divStyleText");
              if (childDiv[i].classList.contains("bomb")) {
                childDiv[i].classList.add("hide");
              }
            }
          }
        }

        if (
          !countElement.classList.contains("bcounts") &&
          !uniqueValues.includes(currentIndex)
        ) {
          demoFunction(currentIndex);
        }
      }
      index++;
      // emptyArray.push(resultArray[i][j]);
      // console.log(resultArray);
    }
  }
}

function LoopingFunction(surroundBoxes: number[]) {
  // console.log("td tags in Loop function");
  let selector;

  console.log("surrounding boxes");
  console.log(surroundBoxes.length);

  // console.log("Looping function called");
  for (let i = 0; i < surroundBoxes.length; i++) {
    // if (uniqueValues.includes(surroundBoxes[i])) {
    //   const [x, y] = surroundBoxes[i] as any;
    //   const id = someEx[x][y].identifier;
    //   const idValue = someEx[x][y];

    //   var bombs = document.querySelectorAll("bomb");

    //   for (let i = 0; i < bombs.length; i++) {
    //     bombs[i].classList.add("hide");
    //   }
    // }

    if (!uniqueValues.includes(surroundBoxes[i])) {
      const [x, y] = surroundBoxes[i] as any;
      const id = someEx[x][y].identifier;
      const idValue = someEx[x][y];
      // console.log("idValue is : ");
      // console.log(idValue);

      // console.log("id is : " + id);

      const elem = document.getElementById(`divId${id}`);

      if (elem && elem.classList.contains("bcounts")) {
        selector = "#divId" + id + " .divTag";
        const anotherSelector = "#divId" + id;

        document.querySelector(selector).classList.add("hide");
        document.querySelector(anotherSelector).classList.add("divStyleText");

        let mineValue = parseInt(mineInput?.value);
        if (mineValue === 1) {
          recursiveIds.push(selector);
          // return;
        }
        // return;

        console.log("recursive Array");
        console.log(recursiveIds);
        // return;
      } else {
        const bCounts = document.querySelectorAll(".bcounts");
        console.log("bcOunts values");
        console.log(bCounts);

        const elseSelector = "#divId" + id + " .divTag";
        const elseId = id;
        console.log("from else Selector");
        console.log(id);

        if (!uniqueValues.includes(elseId)) {
          if (!recursiveIds.includes(elseSelector)) {
            document.querySelector(elseSelector).classList.add("hide");

            // return;
            recursiveIds.push(elseSelector);
            return;
            // if(!recursiveIds.includes(selector)){

            // }
            // return;
          }
        }
      }
    } else {
      const [x, y] = surroundBoxes[i] as any;
      const id = someEx[x][y].identifier;
      const elseSelectorDiv = "#divId" + id + " .divTag";

      const mineValue = parseInt(mineInput?.value);
      if (mineValue > 1) {
        document.querySelector(elseSelectorDiv).classList.add("hide");
        recursiveIds.push(elseSelectorDiv);
      }
    }
  }

  console.log("recursive Array : ");
  console.log(recursiveIds);
}

function demoFunction(currentIndex) {
  var indexArray: any[] = [];

  // console.log("demo Function called");
  const newRowValue = parseInt(row?.value);
  const newColValue = parseInt(column?.value);

  // indexArray.push(currentIndex);
  // console.log(indexArray);
  //nested for loop
  // console.log("current index for loop called");

  const array: any[] = [];

  for (let i = 0; i < newRowValue; i++) {
    for (let j = 0; j < newColValue; j++) {
      const surroundingBoxes = getSurroudingBoxes(i, j);
      console.log("surrounding boxes values");
      // console.log(surroundingBoxes);
      // array.push(surroundingBoxes);
      LoopingFunction(surroundingBoxes);
    }
  }

}
