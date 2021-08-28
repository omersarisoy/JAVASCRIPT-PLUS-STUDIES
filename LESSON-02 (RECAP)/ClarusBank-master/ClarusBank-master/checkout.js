/* const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);
console.log(urlParams);

const firstname = urlParams.get("firstname");
const lastname = urlParams.get("lastname");
alert(`Welcome ${firstname} ${lastname}`) */


//////////////////////////////////////////////////////////////

const updateProductQuantity = function(quantityinput){
    alert(quantityinput.value)
}

document.querySelectorAll(".product-quantity input").forEach(function(input) {
    input.addEventListener("change", function() {
        updateProductQuantity(this);
    });
});

const removeProduct = function(removebutton){
    let productRow = removebutton.parentElement.parentElement;
    productRow.remove();
}

document.querySelectorAll(".product-removal button").forEach(function(button) {
    button.addEventListener("click", function() {
        removeProduct(this);
    });
});