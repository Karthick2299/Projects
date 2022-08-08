//get input value from User
var mainDivTag = <HTMLDivElement>document.getElementById("mainDiv");
var bodyElement = <HTMLBodyElement>document.getElementById("app");
var row = <HTMLInputElement>document.getElementById("row");
var column = <HTMLInputElement>document.getElementById("col");
var formElement = <HTMLFormElement>document.getElementById("form");

function create() {
  let rowValue = parseInt(row?.value);

  let colValue = parseInt(column?.value);

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
      //add the created div element to another div(parent div)
      bodyElement.append(divElement);
      //add styles to parent div
      bodyElement.classList.add("appStyle");
      console.log(divElement);
    }
    //adding break tag for forming the correct matrix pattern.
    bodyElement.appendChild(br);
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
