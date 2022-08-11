//get input value from User
var mainDivTag = <HTMLDivElement>document.getElementById("mainDiv");
var bodyElement = <HTMLBodyElement>document.getElementById("app");
var row = <HTMLInputElement>document.getElementById("row");
var column = <HTMLInputElement>document.getElementById("col");
var formElement = <HTMLFormElement>document.getElementById("form");
var mineInput = <HTMLInputElement>document.getElementById("mines");

//check whether the create function is clicked or not.
let clicked: number = 1;

function create() {
  if (clicked === 1) {
    let count = 0;
    let rowValue: number = parseInt(row?.value);

    let colValue: number = parseInt(column?.value);
    //getting mine value from user
    let mineValue: number = parseInt(mineInput?.value);

    if (rowValue <= 0 || rowValue === null) {
      console.log("condition working");
    }
    //for loops for creating div elements.
    for (let i = 1; i <= rowValue; i++) {
      //create break tag
      var br = document.createElement("br");

      for (let j = 1; j <= colValue; j++) {
        //create a div Element
        const divElement = document.createElement("div");

        if (rowValue <= 10 || colValue <= 10) {
          //adding style to created div element
          divElement.classList.add("divStyle");
        } else if (
          (rowValue >= 11 || colValue >= 11) &&
          (rowValue <= 14 || colValue <= 14)
        ) {
          divElement.classList.add("divStyle2");
        } else if (rowValue >= 15 || colValue >= 15) {
          divElement.classList.add("divStyle3");
        }

        //set id to div
        divElement.setAttribute("id", `divId${count++}`);

        //add the created div element to another div(parent div)
        bodyElement.append(divElement);
        //add styles to parent div
        bodyElement.classList.add("appStyle");
        console.log(divElement);
      }
      //adding break tag for forming the correct matrix pattern.
      bodyElement.appendChild(br);
    }

    const totalDivs = rowValue * colValue;
    console.log("total Divs " + totalDivs);

    placeMines(mineValue, totalDivs);
    clicked++;
  } //End of if condition
} //End of Create Function

//function for placing mines

function placeMines(mineInputValue: number, totalDivs): void {
  console.log("Given Mine values " + mineInputValue);

  var anotherDiv = document.querySelectorAll(".divStyle");

  const mineArray: number[] = [];
  //adding mine input values into array using for loop

  for (let i = 1; i <= mineInputValue; i++) {
    mineArray.push(i);
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
  console.log("mine input value " + mineInputValue);
} //End of placeMines function

//get Random number for mines
//this function for getting non-repeating random Numbers.
function getRandomMines(mineValue, totalDivs, row, column): void {
  console.log(mineValue);
  if (mineValue.length == 0) {
    console.log("No More Random Numbers");
  }

  const uniqueValues: number[] = [];

  if (row >= 1 && column >= 1) {
    while (uniqueValues.length < mineValue) {
      var randomNumbers = Math.floor(Math.random() * totalDivs);
      console.log(randomNumbers);
      if (!uniqueValues.includes(randomNumbers)) {
        uniqueValues.push(randomNumbers);
      }
    }

    for (let i = 0; i < uniqueValues.length; i++) {
      const id = uniqueValues[i];
      console.log(document.getElementById(`divId${id}`));
      const divs = document
        .getElementById(`divId${id}`)
        ?.classList.add("random");
    }
  } else if (row === 0 || column === 0) {
    console.log("Cannot create table with zero values");
    console.log("row value or column value must be Greater than zero");
  } else {
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
  for (let i = 0; i < totalDivs; i++) {
    const divs = document.getElementById(`divId${i}`);
    if (divs !== null) {
      divs.addEventListener("click", function (event) {
        console.log("from div tags");
      });
    } else {
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
