document.addEventListener("DOMContentLoaded", () => {
    let mentalDaily = JSON.parse(localStorage.getItem("mentalDaily"));
    let physicalDaily = JSON.parse(localStorage.getItem("physicalDaily"));

    // in case first time visit where nothing in local storage
    if (mentalDaily == null || physicalDaily == null) {
        generateDailiesJSON();
        mentalDaily = JSON.parse(localStorage.getItem("mentalDaily"));
        physicalDaily = JSON.parse(localStorage.getItem("physicalDaily"));
    }

    displayDailyButtonIcon(physicalDaily, mentalDaily);
    initializeButtons();
    initializeDailyScreen(physicalDaily, mentalDaily);
    updateDailyScreen();
    initializeJournalScreen(physicalDaily, mentalDaily);
    populateCurrency();
})

function displayDailyButtonIcon(physicalDaily, mentalDaily) {
    let checkmarkIcon = document.getElementById("checkIcon");
    let alertIcon = document.getElementById("alertIcon");

    if (physicalDaily.completed && mentalDaily.completed) {
        // show checkmark upon completion
        checkmarkIcon.style.display = "block";
        alertIcon.style.display = "none";
    } else if (!(physicalDaily.completed && mentalDaily.completed)) {
        // re-enable all buttons upon reset
        document.getElementById("openJournalButton").disabled = false;
        document.getElementById("completePhysicalButton").disabled = false;
        document.getElementById("openJournalButton").disabled = false;
        document.getElementById("physicalDaily").checked = false;
        document.getElementById("mentalDaily").checked = false;

        // change style back to default
        alertIcon.style.color = "black";
        checkmarkIcon.style.display = "none";
        alertIcon.style.display = "block";
    } else {
        // show warning to finish when only one is done
        checkmarkIcon.style.display = "none";
        alertIcon.style.display = "block";
        alertIcon.style.color = "yellow";
    }
}

function initializeButtons() {
    let dailyButton = document.getElementById("dailyBox");
    dailyButton.addEventListener("click", () => {
        document.getElementById("dailyScreen").showModal();
    })
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
    while (true)
        yield* items;
}

function addEventListenerToMoodBtn() {
    const moodBtns = document.querySelectorAll("#moodDiv .moodButton");
    moodBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            updateMoodClassName(btn.id);
        });
    });

}

function updateMoodClassName(btnID) {
    const Btns = document.querySelectorAll("#moodDiv .moodButton");
    Btns.forEach(btn => {
        btn.classList.remove("moodSelected");
        btn.firstElementChild.style.color = "white";
    });
    document.getElementById(btnID).classList.add("moodSelected");


}


// Call the function to add event listeners to dressing buttons
addEventListenerToMoodBtn();
