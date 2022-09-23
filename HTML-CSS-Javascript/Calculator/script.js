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
/*Mild Reset - after selecting any arithmetic operation key*/
const mildReset = () => {
    const allSpan = display.querySelectorAll("span");
    for(elem of allSpan){
        elem.remove();
    }
};

/*Arithmetic methods*/
keySum.addEventListener("click", () => {
    method = "sum";   
    const allSpan = display.querySelectorAll("span");
    for(elem of allSpan){                               //Run a search of all the spans in the display
        val1.push(elem.innerText);                      //read and store the htmlText in val1
    }                                            
    val1 = val1.toString().replaceAll(",", "");
    mildReset();                                                 
});
keySub.addEventListener("click", () => {
    method = "sub";
    const allSpan = display.querySelectorAll("span");
    for(elem of allSpan){                               //Run a search of all the spans in the display
        val1.push(elem.innerText);                      //read and store the htmlText in val1
    }
    mildReset(); 
});
keyMult.addEventListener("click", () => {
    method = "mult";
    const allSpan = display.querySelectorAll("span");
    for(elem of allSpan){                               //Run a search of all the spans in the display
        val1.push(elem.innerText);                      //read and store the htmlText in val1
    }
    mildReset();
});
keyDiv.addEventListener("click", () => {                //A bit useless since the division is accessed via else statement
    method = "div";
    const allSpan = display.querySelectorAll("span");
    for(elem of allSpan){                               //Run a search of all the spans in the display
        val1.push(elem.innerText);                      //read and store the htmlText in val1
    }
    mildReset();
});

/*Review and improve later the dot for float numbers*/
keyDot.addEventListener("click", () => {
    const span = document.createElement("span");
    span.textContent=".";
    display.appendChild(span)
});

/*Operations*/
function addition (val1, val2){
    const res = parseFloat(val1)+parseFloat(val2);
    return res;
};

function subtraction (val1, val2){
    const res = parseFloat(val1)-parseFloat(val2);
    return res;
};

function multiplication (val1,val2){
    const res = parseFloat(val1)*parseFloat(val2);
    return res;
};

function division (val1, val2){
    const res = parseFloat(val1)/parseFloat(val2);
    return res;
};

/*Compute Resolution - Function calling*/
keyEqual.addEventListener("click", () => {
    const allSpan = display.querySelectorAll("span");

    for(elem of allSpan){                               //Run a search of all the spans in the display
        val2.push(elem.innerText);                      //read and store the htmlText in val2
    }

    if(method === "sum"){
        res = addition(val1, val2);
    }
    else if(method === "sub"){
        res = subtraction(val1, val2);
    }
    else if(method === "mult"){
        res = multiplication(val1, val2);
    }
    else{
        res = division(val1, val2);
    }
    mildReset(); //Clear display so it cannot send any other number to the result

    const span = document.createElement("span");
    span.textContent=res;
    display.appendChild(span);
});


/* Known Bugs
- Negative numbers are not displayed
- Zero division
- cumulative operations
- Multiple comma operator fix
- Multiple equals results in NaN
*/
