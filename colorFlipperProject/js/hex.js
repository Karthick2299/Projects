const colors = [0,1,2,3,4,5,6,7,8,9,"A", "B", "C", "D", "E", "F"];
const viewColor = document.getElementById("color");
const bodyElement = document.getElementsByTagName("body");

function changeColor(){
    let hexColor = "#";

    for(let i = 0; i < 6; i++){
        hexColor += colors[getRandomNumber()];
    }

    viewColor.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
    viewColor.style.color = hexColor;

}

function getRandomNumber(){

    return Math.floor(Math.random() * colors.length);

}