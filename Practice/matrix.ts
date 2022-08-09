//get input value from User
var mainDivTag = <HTMLDivElement>document.getElementById("mainDiv");
var bodyElement = <HTMLBodyElement>document.getElementById("app");
var row = <HTMLInputElement>document.getElementById("row");
var column = <HTMLInputElement>document.getElementById("col");
var formElement = <HTMLFormElement>document.getElementById("form");
var mineInput = <HTMLInputElement>document.getElementById("mines");

//check whether the create function is clicked or not.
let count;

function create() {
  let rowValue = parseInt(row?.value);

  let colValue = parseInt(column?.value);
  //getting mine value from user
  let mineValue = parseInt(mineInput?.value);

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
      divElement.setAttribute("id", "divId");
      //add the created div element to another div(parent droytuiv)
      bodyElement.append(divElement);
      //add styles to parent div
      bodyElement.classList.add("appStyle");
      console.log(divElement);
    }
    //adding break tag for forming the correct matrix pattern.
    bodyElement.appendChild(br);
  } 

  const totalDivs = rowValue * colValue;
  console.log(totalDivs);

  //forloop for placing mines randomly in div.
  // console.log(getDivCreatedElement);
  
  var getDivCreatedElement = document.querySelectorAll("#divId");
  
  for(let a = 0; a < totalDivs; a++){
    var thisDiv = totalDivs[a];
    
    
    var randomNumber = Math.floor(Math.random() * thisDiv) + 1;
    
    console.log("random Number " + randomNumber);

  }

  
  //checking the invalid input values
  if (
    rowValue === null ||
    rowValue < 0 ||
    rowValue === 0 ||
    colValue === 0 ||
    colValue === null ||
    colValue < 0
  ) {
    console.log("Invalid Input");
  }
}

//reset Function
function reset() {
  console.log("reset working");
  formElement.reset();
  var divId = <HTMLDivElement>document.getElementById("divId");

  bodyElement.classList.remove("appStyle");
  //deleting div elements in HTML using while loop
  while (bodyElement.firstChild) {
    bodyElement.removeChild(bodyElement.firstChild);
  }
}

//delete the boxes if we want to create boxes again.

function deleteContent() {
  while (bodyElement.firstChild) {
    bodyElement.removeChild(bodyElement.firstChild);
  }
}
