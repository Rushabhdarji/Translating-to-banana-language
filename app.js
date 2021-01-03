var btnTranslate = document.querySelector('#btn-translate');
var txtInput = document.querySelector('#input-text');

//function eventHandler
function eventHandler() {
    console.log("clicked!");
    console.log("input",txtInput.value);
};
//connecting button with event-handler;
//If don't specify the whole function after the event in addEventListener then we just need to specify the nsame of the function.
//note:- we don't need to call the function we just need to specify the name of that function.
btnTranslate.addEventListener("click", eventHandler);