
// main body for functionality
document.addEventListener("DOMContentLoaded", () => {
    localStorage.setItem("currency", 1000); // temp to test gacha
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
        openPullScreen(1);
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
        openPullScreen(12);
    })

    document.getElementById("interact").addEventListener("click", () => {
        document.getElementById("pullScreen").close();
    })
}

// function for opening gacha screen pulls
async function openPullScreen(pullAmount) {
    let pullScreen = document.getElementById("pullScreen");
    // index key: 0 = pullResult (image), 1 = pullResultMessage, 2 = interact
    for (i = 0; i < pullAmount; i++) {
        // make clothing object
        let item = new Clothing();

        // set image and message
        pullScreen.children[0].src = item.getClothingType();
        pullScreen.children[1].innerHTML = `You got a ${item.getClothingName()}`;

        // set interact button to close if last item
        if (i == pullAmount - 1) {
            pullScreen.children[2].innerHTML = "Close";
        } else {
            // set interact button to next if not last item
            pullScreen.children[2].innerHTML = "Next";
        }

        pullScreen.showModal();
        await pause();
    }
}

// function to pause in for loop
function pause() {
    return new Promise(resolve => {
        let playbuttonclick = function () {
            document.getElementById("interact").removeEventListener("click", playbuttonclick);
            resolve("resolved");
        }
        document.getElementById("interact").addEventListener("click", playbuttonclick)
    })
}