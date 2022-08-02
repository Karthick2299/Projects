const colors = ['red',"steelblue","orange","black", "maroon","indigo","violet"];
const viewColor = document.getElementById("color");
const bodyElement = document.getElementsByTagName("body");



function changeColor(){
    const getRandom = gettingRandom();

    document.body.style.backgroundColor = colors[getRandom];
    viewColor.textContent = colors[getRandom];

}

function gettingRandom(){
    return Math.floor(Math.random() * colors.length);
}