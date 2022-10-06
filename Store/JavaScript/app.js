const shoppingCartDiv = document.querySelector("#cart-div");
const shoppingCart = document.querySelector("#shopping-cart");

shoppingCart.addEventListener("click", ()=>{
    if (shoppingCartDiv.style.display=="none") shoppingCartDiv.style.display="";
    else shoppingCartDiv.style.display="none";
});

