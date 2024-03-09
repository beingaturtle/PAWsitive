document.addEventListener("DOMContentLoaded", () => {
    displayIcon();
    initializeButtons();
    populateCurrency();
});

function displayIcon() {
    let physicalCompleted = localStorage.getItem("physicalCompleted");
    let mentalCompleted = localStorage.getItem("mentalCompleted");
    let checkmarkIcon = document.getElementById("checkIcon");
    let alertIcon = document.getElementById("alertIcon");

    if (physicalCompleted === "true" && mentalCompleted === "true") {
        checkmarkIcon.style.display = "block";
        alertIcon.style.display = "none";
    } else if (physicalCompleted === "false" && mentalCompleted === "false") {
        document.getElementById("completePhysicalButton").disabled = false;
        document.getElementById("openJournalButton").disabled = false;
        document.getElementById("physicalDaily").checked = false;
        document.getElementById("mentalDaily").checked = false;
        alertIcon.style.color = "black";
        checkmarkIcon.style.display = "none";
        alertIcon.style.display = "block";
    } else {
        checkmarkIcon.style.display = "none";
        alertIcon.style.display = "block";
        alertIcon.style.color = "yellow";
    }
}

function initializeButtons() {
    let dailyButton = document.getElementById("dailyBox");

    dailyButton.addEventListener("click", () => {
        document.getElementById("dailyScreen").showModal();
        setupDailyScreen();
    });
}

// timer for daily reset, runs on 8s for the sake of demo
setInterval(() => { 
    localStorage.setItem("physicalCompleted", "false");
    localStorage.setItem("mentalCompleted", "false"); 
    let physicalDaily = randomizePhysicalDailies();
    let mentalDaily = randomizeMentalDailies();
    setDailies();
    displayIcon();
}, 5000);

// cycler for cycling between physical task types
function* cycle(...items) {
    while(true)
      yield* items;
  }