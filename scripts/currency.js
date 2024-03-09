// populate currency
function populateCurrency() {
    // set currency box to 
    document.getElementById("currency").innerHTML = localStorage.getItem("currency");
}

function updateCurrency(newCurrency) {
    localStorage.setItem("currency", newCurrency);
    document.getElementById("currency").innerHTML = localStorage.getItem("currency");
}