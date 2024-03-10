function setupDailyScreen() {
    let dailyScreen = document.getElementById("dailyScreen");
    let closeButton = document.getElementById("closeButton");
    let physicalDaily = document.getElementById("physicalDaily");
    let mentalDaily = document.getElementById("mentalDaily");
    let completePhysicalButton = document.getElementById("completePhysicalButton");
    let openJournalButton = document.getElementById("openJournalButton");
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

    openJournalButton.addEventListener("click", () => {
        mentalDaily.checked = true;
        openJournalButton.disabled = true;
        setUpJournalScreen();
        openJournal();
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