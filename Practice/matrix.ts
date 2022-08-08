//for practicing multi dimensional array in ts

// var mat:number[][] = [[1,2,3], [4,5,6]];
// console.log(mat);
// console.log(mat[0][2]);

//get input value from User
var bodyElement = <HTMLBodyElement>document.getElementById("app");
var row = <HTMLInputElement>document.getElementById("row");

var column = <HTMLInputElement>document.getElementById("col");

function view() {
  let rowValue = parseInt(row?.value);
  console.log(rowValue);
  let colValue = parseInt(column?.value);
  console.log(colValue);

  for (let i = 1; i <= rowValue; i++) {
    // console.log("its working");

    for (let j = 1; j <= colValue; j++) {
      const divElement = document.createElement("div");
      divElement.classList.add("divStyle");
      bodyElement.append(divElement);
      console.log(divElement);
    }
    
    if(rowValue === colValue){
        document.write("<br>");
    }
    
  }
}
