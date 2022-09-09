// if (
//     xValue - 1 >= 0 &&
//     xValue + 1 < rowLength &&
//     yValue - 1 >= 0 &&
//     yValue + 1 <= columnLength
//   ) {
//     console.log("If condition is working!!!");
//     console.log(` Xvalue is : ${xValue}, Yvalue is : ${yValue}`);
//     console.log(`identifier : ${xValue - 1}`);

//     var divTag1 = <HTMLDivElement>(
//       document.getElementById(`divId${xValue - 1}`)
//     );
//     // divTag1.innerText = `${++count}`;
//     console.log(`identifier : ${identifier}`);

//     // divTag1.style.margin = "4px";
//     // divTag1.style.color = "red";

//     var divTag2 = <HTMLDivElement>(
//       document.getElementById(`divId${xValue + 1}`)
//     );
//     // divTag2.innerHTML = "1";

//     // if (isBomb === true) {
//     //top
//     if (xValue >= 0 && yValue - 1 >= 0) {
//       console.log("1");

//       console.log("top identifier " + (identifier - 3));
//       // document.getElementById(`divId${identifier - 3}`)?.innerHTML = ;
//     }
//     //left
//     if (xValue - 1 >= 0 && yValue >= 0) {
//       console.log("2");
//       console.log("left id : " + (identifier - 1));
//     }
//     //right
//     if (xValue + 1 >= 0 && yValue >= 0) {
//       console.log("3");
//       console.log("right id : " + (identifier + 1));
//     }
//     //bottom
//     if (xValue >= 0 && yValue + 1 >= 0) {
//       console.log("4");
//       console.log("bottom id : " + (identifier + 3));
//     }
//     //bottom right
//     if (
//       xValue + 1 >= 0 &&
//       xValue <= rowLength &&
//       yValue + 1 >= 0 &&
//       yValue <= columnLength
//     ) {
//       // document.getElementById(`divId${identifier}`)?.classList.add("red");
//       console.log("5");
//       console.log("bottom right id : " + (identifier + 4));
//     }
//     //bottom left
//     if (xValue - 1 >= 0 && yValue + 1 >= 0) {
//       console.log("6");
//       console.log("bottom left id : " + (identifier + 2));
//     }

//     //top left
//     if (xValue - 1 >= 0 && yValue - 1 >= 0) {
//       console.log("7");
//       console.log("top left id : " + (identifier - 4));
//     }
//     //top right
//     if (xValue + 1 >= 0 && yValue + 1 >= 0) {
//       console.log("8");
//       console.log("top right id : " + (identifier - 2));
//     }
//   }