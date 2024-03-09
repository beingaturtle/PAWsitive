document.addEventListener("DOMContentLoaded", () => {
    populateCurrency();
})

// populate currency
function populateCurrency() {
    // set currency box to 
    document.getElementById("currency").innerHTML = localStorage.getItem("currency");
}