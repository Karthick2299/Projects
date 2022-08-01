// function copyText(Element){
//     var textToCopy = Element.innerText;

//     var myTenporaryInputElement = document.createElement("input");
//     myTenporaryInputElement.type = "text";
//     myTenporaryInputElement.value = textToCopy;

//     document.body.appendChild(myTenporaryInputElement);

//     myTenporaryInputElement.select();
//     document.execCommand("Copy");

//     document.body.removeChild(myTenporaryInputElement);

// }

const copyBtn = document.getElementById("copyBtn");
const copyText = document.getElementById("copyText");

copyBtn.onclick = () => {
    copyText.select();
    document.execCommand("copy");
}