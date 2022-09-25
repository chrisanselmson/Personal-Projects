let val1 = [];
let val2 = [];
let dotCount = 0;
let method = "";
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

key1.addEventListener("click", () => {
    displayResult(1);
});
key2.addEventListener("click", () => {
    displayResult(2);
});
key3.addEventListener("click", () => {
    displayResult(3);
});
key4.addEventListener("click", () => {
    displayResult(4);
});
key5.addEventListener("click", () => {
    displayResult(5);
});
key6.addEventListener("click", () => {
    displayResult(6);
});
key7.addEventListener("click", () => {
    displayResult(7);
});
key8.addEventListener("click", () => {
    displayResult(8);
});
key9.addEventListener("click", () => {
    displayResult(9);
});
key0.addEventListener("click", () => {
    displayResult(0);
});


/*Clear display*/
const clearDisplay = () => {
    const allSpan = display.querySelectorAll("span");
    for(elem of allSpan){
        elem.remove();
    }
    dotCount = 0;
};
/*Reset all*/
keyAC.addEventListener("click", () => {
    clearDisplay();
    method = "";
    val1 = [];
    val2 = [];
    dotCount = 0;
    console.clear();
});


/*Arithmetic methods*/
keySum.addEventListener("click", () => {
    method = "sum";   
    storeInVal1();
    clearDisplay();                                                 
});
keySub.addEventListener("click", () => {
    method = "sub";
    storeInVal1();
    clearDisplay(); 
});
keyMult.addEventListener("click", () => {
    method = "mult";
    storeInVal1();
    clearDisplay();
});
keyDiv.addEventListener("click", () => {                
    method = "div";             //A bit useless since the division is accessed via else statement
    storeInVal1();
    clearDisplay();
});
keyDot.addEventListener("click", () => {
    if(dotCount < 1 && val1.length == 0){
        displayResult(".");
        dotCount++;
    }
    else{
        //Do nothing
    }
    if(dotCount < 1 && val2.length == 0){
        displayResult(".");
        dotCount++;
    }
    else{
        //Do nothing
    }
});

/*Compute Resolution - Function calling*/
keyEqual.addEventListener("click", () => {
    storeInVal2();
    if(val1.length == 0 || val2.length == 0 || method == "" ){
        //Do nothing
    }
    else if(method === "sum"){
        res = addition(val1, val2);
        clearDisplay();
        displayResult(res);
    }
    else if(method === "sub"){
        res = subtraction(val1, val2);
        clearDisplay(); 
        displayResult(res);
    }
    else if(method === "mult"){
        res = multiplication(val1, val2);
        clearDisplay();
        displayResult(res);
    }
    else{
        res = division(val1, val2);
        clearDisplay();
        displayResult(res);
    }

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

/*Storing the value shown in the display*/
const storeInVal1 = () =>{
    const allSpan = display.querySelectorAll("span");
    for(elem of allSpan){                               //Run a search of all the spans in the display
        val1.push(elem.innerText);                      //read and store the htmlText in val1
    }                                            
    val1 = val1.toString().replaceAll(",", "");
}

const storeInVal2 = () =>{
    const allSpan = display.querySelectorAll("span");
    for(elem of allSpan){                               //Run a search of all the spans in the display
        val2.push(elem.innerText);                      //read and store the htmlText in val1
    }                                            
    val2 = val2.toString().replaceAll(",","");
};

const displayResult = (value) =>{
    const span = document.createElement("span");
    span.textContent = value;
    display.appendChild(span);
};