var btnTranslate = document.querySelector('#btn-translate');
var txtInput = document.querySelector('#input-text');

//function eventHandler
function eventHandler() {
    console.log("clicked!");
    console.log("input",txtInput.value);
};
//connecting button with event-handler;
btnTranslate.addEventListener("click", eventHandler);