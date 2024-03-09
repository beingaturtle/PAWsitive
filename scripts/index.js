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
        document.getElementById("completeMentalButton").disabled = false;
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

function setupDailyScreen() {
    let dailyScreen = document.getElementById("dailyScreen");
    let closeButton = document.getElementById("closeButton");
    let physicalDaily = document.getElementById("physicalDaily");
    let mentalDaily = document.getElementById("mentalDaily");
    let completePhysicalButton = document.getElementById("completePhysicalButton");
    let completeMentalButton = document.getElementById("completeMentalButton");
    setDailies();

    closeButton.addEventListener("click", () => {
        dailyScreen.close();
    });

    completePhysicalButton.addEventListener("click", () => {
        physicalDaily.checked = true;
        completePhysicalButton.disabled = true;
        localStorage.setItem("physicalCompleted", "true");
        displayIcon();
    });

    completeMentalButton.addEventListener("click", () => {
        mentalDaily.checked = true;
        completeMentalButton.disabled = true;
        localStorage.setItem("mentalCompleted", "true");
        displayIcon();
    });
}

function setDailies() {
    let physicalDaily = randomizePhysicalDailies();
    let mentalDaily = randomizeMentalDailies();
    let physicalDailyPrompt = document.getElementById("physicalDailyPrompt");
    let mentalDailyPrompt = document.getElementById("mentalDailyPrompt");
    mentalDailyPrompt.innerHTML = mentalDaily.getTaskPrompt();
    physicalDailyPrompt.innerHTML = physicalDaily.getTaskPrompt();
}

function randomizeMentalDailies() {
    return new MentalTask();

}

function randomizePhysicalDailies() {
    let randomNum = Math.floor(Math.random() * Object.keys(TaskType.PHYSICAL).length);
    return new PhysicalTask(randomNum);
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