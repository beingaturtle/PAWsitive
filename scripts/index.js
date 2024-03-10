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
    generateDailiesJSON();
    updateDailyScreen();
}, 50000);