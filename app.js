var btnTranslate = document.querySelector('#btn-translate');//reference the button
var txtInput = document.querySelector('#input-text');//reference the input i.e. our textarea tag
var outputDiv = document.querySelector('#output-txt');//referencing the output

//function eventHandler
function eventHandler() {
    //we created  a block for output and we're writing the input what we've taken from the user in the ouput div
    outputDiv.innerText = txtInput.value;
};
//connecting button with event-handler;
//If don't specify the whole function after the event in addEventListener then we just need to specify the nsame of the function.
//note:- we don't need to call the function we just need to specify the name of that function.

//Adding EventListener to the button and also a giving a callback function to perform certain task on clicking the button
btnTranslate.addEventListener("click", eventHandler);

//queryselector for different css-selectors
/**
 * 1. for anytag name= document.querySelector("textarea");
 * 2. for classNAme= document.querySelector(".btn-primary");
 * 3. for idName = document.querySelector("#input-btn");
 * 4. for an element with an attribute = document.querySelector('input[name ='translator']');
 */