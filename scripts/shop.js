// main body for functionality
document.addEventListener("DOMContentLoaded", () => {
  localStorage.setItem("currency", 1000); // temp to test gacha
  populateCurrency();
  initializeButtons();
});

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
    let currency = parseInt(localStorage.getItem("currency"));
    currency -= 10;
    localStorage.setItem("currency", currency);
    updateCurrency(currency);
    if (currency < ONE_PULL_COST) {
      onePull.disabled = true;
    }
    openPullScreen(1);
  });

  tenPull.addEventListener("click", () => {
    let currency = parseInt(localStorage.getItem("currency"));
    currency -= 100;
    localStorage.setItem("currency", currency);
    updateCurrency(currency);
    if (currency < ONE_PULL_COST) {
      onePull.disabled = true;
    }
    if (currency < ONE_PULL_COST * 10) {
      tenPull.disabled = true;
    }
    openPullScreen(12);
  });

  document.getElementById("interact").addEventListener("click", () => {
    document.getElementById("pullScreen").close();
  });
}

// function for opening gacha screen pulls
async function openPullScreen(pullAmount) {
  let pullScreen = document.getElementById("pullScreen");
  let pullScreenDiv = pullScreen.children[0];

  // index key: 0 = pullResult (image), 1 = pullResultMessage, 2 = interact
  for (let i = 0; i < pullAmount; i++) {
    // make clothing object
    let item;
    let rand = Math.random();

    // establish the probability of getting a certain item
    if (rand < 0.05) {
      item = new Clothing(ClothingType.pet);
    } else if (rand < 0.3) {
      let clothingTypes = ["hair", "shirt", "pants", "shoes"];
      let randomType =
        clothingTypes[Math.floor(Math.random() * clothingTypes.length)];
      item = new Clothing(ClothingType[randomType]);
    } else {
      item = new Clothing(ClothingType.coin);
    }
    console.log(rand);

    // check if item is a coin
    if (item.getClothingName() == "coin") {
      let currency = parseInt(localStorage.getItem("currency"));
      currency += 3;
      localStorage.setItem("currency", currency);
      populateCurrency(currency);
    }

    // set image and message
    pullScreenDiv.children[0].src = item.getClothingType();
    pullScreenDiv.children[1].innerHTML = `You got a ${item.getClothingName()}`;

    // set interact button to close if last item
    if (i == pullAmount - 1) {
      pullScreenDiv.children[2].innerHTML = "Close" + " " + "[" + (i + 1) + "]";
    } else {
      // set interact button to next if not last item
      pullScreenDiv.children[2].innerHTML = "Next" + " " + "[" + (i + 1) + "]";
    }

    pullScreen.showModal();
    await pause();
  }
}

// function to pause in for loop
function pause() {
  return new Promise((resolve) => {
    let playbuttonclick = function () {
      document
        .getElementById("interact")
        .removeEventListener("click", playbuttonclick);
      resolve("resolved");
    };
    document
      .getElementById("interact")
      .addEventListener("click", playbuttonclick);
  });
}
