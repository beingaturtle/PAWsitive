
// main body for functionality
document.addEventListener("DOMContentLoaded", () => {
    localStorage.setItem("currency", 120); // temp to test gacha
    populateCurrency();
    initializeButtons();
})

// add event listeners to clickables
function initializeButtons() {
    const ONE_PULL_COST = 10;

    // get buttons
    let onePull = document.getElementById("onePull");
    let tenPull = document.getElementById("tenPull");
    let currency = localStorage.getItem("currency");

    // enable buttons based on currency
    if (currency >= ONE_PULL_COST * 10) {
        tenPull.disabled = false;
        onePull.disabled = false;
    } else if (currency >= ONE_PULL_COST) {
        onePull.disabled = false;
    } else {
        tenPull.disabled = true;
        onePull.disabled = true;
    }

    // add event listeners to button
    onePull.addEventListener("click", () => {
        currency -= 10;
        updateCurrency(currency);
        if (currency < ONE_PULL_COST) {
            onePull.disabled = true;
        }
    })

    tenPull.addEventListener("click", () => {
        currency -= 100;
        updateCurrency(currency);
        if (currency < ONE_PULL_COST) {
            onePull.disabled = true;
        }
        if (currency < ONE_PULL_COST * 10) {
            tenPull.disabled = true;
        }
    })
}