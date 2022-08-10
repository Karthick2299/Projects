//get input value from User
var mainDivTag = <HTMLDivElement>document.getElementById("mainDiv");
var bodyElement = <HTMLBodyElement>document.getElementById("app");
var row = <HTMLInputElement>document.getElementById("row");
var column = <HTMLInputElement>document.getElementById("col");
var formElement = <HTMLFormElement>document.getElementById("form");
var mineInput = <HTMLInputElement>document.getElementById("mines");

//check whether the create function is clicked or not.

function create() {
  let count = 0;
  let rowValue: number = parseInt(row?.value);

  let colValue: number = parseInt(column?.value);
  //getting mine value from user
  let mineValue: number = parseInt(mineInput?.value);

  // //store length of the Input fields
  // let rowLength: number = mineInput.value.length;
  // let colLength: number = mineInput.value.length;
  // let mineLength: number = mineInput.value.length;

  //for loops for creating div elements.
  for (let i = 1; i <= rowValue; i++) {
    //create break tag
    var br = document.createElement("br");

    for (let j = 1; j <= colValue; j++) {
      //create a div Element
      const divElement = document.createElement("div");
      //adding style to created div element
      divElement.classList.add("divStyle");

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

  var getDivCreatedElement = document.querySelectorAll(".divStyle");

  placeMines(mineValue, totalDivs);
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

  // console.log("Mine input value from for loop" + mineArray);

  //place the random number in Divs
  var randomValue = getRandomMines(mineInputValue, totalDivs);
  console.log("mine input value " + mineInputValue);
  console.log("random Values variable");
  console.log(randomValue);
} //End of placeMines function

//get Random number for mines
//this function for getting non-repeating random Numbers.
function getRandomMines(mineValue, totalDivs): number[] {
  console.log(mineValue);
  if (mineValue.length == 0) {
    console.log("No More Random Numbers");
  }

  
  const uniqueValues: number[] = [];

  let uniqueArrayLength = uniqueValues.length;
 

  while (uniqueValues.length < mineValue) {
  
    var randomNumbers = Math.floor(Math.random() * totalDivs);
    console.log(randomNumbers)
    if (!uniqueValues.includes(randomNumbers)) {
      uniqueValues.push(randomNumbers);
      // for(let i = 0 ; i < totalDivs.length; i++){
      //   totalDivs
      // }
    }
 
  }

  for( let i = 0; i< uniqueValues.length ; i++){
    const id = uniqueValues[i];
    console.log(document.getElementById(`divId${id}`));
    const divs = document.getElementById(`divId${id}`)?.classList.add("random");
  }



  console.log("unique values");
  console.log(uniqueValues);

  return uniqueValues;
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
