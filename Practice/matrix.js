//for practicing multi dimensional array in ts
// var mat:number[][] = [[1,2,3], [4,5,6]];
// console.log(mat);
// console.log(mat[0][2]);
//get input value from User
var bodyElement = document.getElementById("app");
var row = document.getElementById("row");
var column = document.getElementById("col");
function view() {
    var rowValue = parseInt(row === null || row === void 0 ? void 0 : row.value);
    console.log(rowValue);
    var colValue = parseInt(column === null || column === void 0 ? void 0 : column.value);
    console.log(colValue);
    for (var i = 1; i <= rowValue; i++) {
        // console.log("its working");
        for (var j = 1; j <= colValue; j++) {
            var divElement = document.createElement("div");
            divElement.classList.add("divStyle");
            bodyElement.append(divElement);
            console.log(divElement);
        }
        if (rowValue === colValue) {
            document.write("<br>");
        }
    }
}
