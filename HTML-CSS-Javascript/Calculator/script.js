/*Variable declaration*/
const key1 = document.querySelector("#key1");
const key2 = document.querySelector("#key2");
const key3 = document.querySelector("#key3");
const key4 = document.querySelector("#key4");
const key5 = document.querySelector("#key5");
const key6 = document.querySelector("#key6");
const key7 = document.querySelector("#key7");
const key8 = document.querySelector("#key8");
const key9 = document.querySelector("#key9");
const key0 = document.querySelector("#key0");
const keyDot = document.querySelector("#keyDot");
const keyAC = document.querySelector("#keyAC");
const keyEqual = document.querySelector("#keyEqual");
const keySum = document.querySelector("#keySum");
const keySub = document.querySelector("#keySub");
const keyMult = document.querySelector("#keyMult");
const keyDiv = document.querySelector("#keyDiv");
const display = document.querySelector("#display");
let val1 = [];
let val2 = [];
let method = "";

/*Display manipulation */
key1.addEventListener("click", () => {
    const span = document.createElement("span");
    span.textContent=1;
    display.appendChild(span)
});
key2.addEventListener("click", () => {
    const span = document.createElement("span");
    span.textContent=2;
    display.appendChild(span)
});
key3.addEventListener("click", () => {
    const span = document.createElement("span");
    span.textContent=3;
    display.appendChild(span)
});
key4.addEventListener("click", () => {
    const span = document.createElement("span");
    span.textContent=4;
    display.appendChild(span)
});
key5.addEventListener("click", () => {
    const span = document.createElement("span");
    span.textContent=5;
    display.appendChild(span)
});
key6.addEventListener("click", () => {
    const span = document.createElement("span");
    span.textContent=6;
    display.appendChild(span)
});
key7.addEventListener("click", () => {
    const span = document.createElement("span");
    span.textContent=7;
    display.appendChild(span)
});
key8.addEventListener("click", () => {
    const span = document.createElement("span");
    span.textContent=8;
    display.appendChild(span)
});
key9.addEventListener("click", () => {
    const span = document.createElement("span");
    span.textContent=9;
    display.appendChild(span)
});
key0.addEventListener("click", () => {
    const span = document.createElement("span");
    span.textContent=0;
    display.appendChild(span)
});

/*Reset all*/
keyAC.addEventListener("click", () => {
    const allSpan = display.querySelectorAll("span");
    for(elem of allSpan){
        elem.remove();
    }
    method = "";
    val1 = [];
    val2 = [];
});

/*Compute Resolution - Function calling*/
keyEqual.addEventListener("click", () => {
    if(method === "sum"){
        addition(val1, val2);
    }
    else if(method == "sub"){
        subtraction(val1, val2);
    }
    else if(method === "mult"){
        multiplication(val1, val2);
    }
    else{
        division(val1, val2);
    }
});

/*Arithmetic methods*/
keySum.addEventListener("click", () => {
   const allSpan = display.querySelectorAll("span");
    for(elem of allSpan){                               //Run a search of all the spans in the display
        val1.push(elem.innerText);                      //read and store the htmlText in val1
    }                                            
    val1 = val1.toString().replaceAll(",", "");
    method = "sum";                                                           
});

/*Review and improve later the dot for float numbers*/
keyDot.addEventListener("click", () => {
    const span = document.createElement("span");
    span.textContent=".";
    display.appendChild(span)
});

/*Operations*/
function addition (val1, val2){
    const res = toString(parseFloat(val1)+parseFloat(val2));
    const display = document.querySelector("#display");
    return display.innerHtmlText = res;
}

function subtraction (val1, val2){
    const res = toString(parseFloat(val1)-parseFloat(val2));
    const display = document.querySelector("#display");
    return display.innerHtmlText = res;
}

function multiplication (val1,val2){
    const res = toString(parseFloat(val1)*parseFloat(val2));
    const display = document.querySelector("#display");
    return display.innerHtmlText = res;
}

function division (val1, val2){
    const res = toString(parseFloat(val1)/parseFloat(val2));
    const display = document.querySelector("#display");
    return display.innerHtmlText = res;
}