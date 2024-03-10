function initializeDailyScreen(physicalDaily, mentalDaily) {
    let closeButton = document.getElementById("closeButton");
    let dailyScreen = document.getElementById("dailyScreen");
    let physicalCheckbox = document.getElementById("physicalDaily");
    let completePhysicalButton = document.getElementById("completePhysicalButton");
    let openJournalButton = document.getElementById("openJournalButton");
    
    closeButton.addEventListener("click", () => {
        dailyScreen.close();
    })

    completePhysicalButton.addEventListener("click", () => {
        physicalDaily.completed = true;
        completePhysicalButton.disabled = true;
        physicalCheckbox.checked = true;
        localStorage.setItem("physicalDaily", JSON.stringify(physicalDaily));
        updateDailyScreen();
    })

    openJournalButton.addEventListener("click", () => {
        document.getElementById("journalScreen").showModal();
    })

    setDailyPrompts(physicalDaily, mentalDaily);
}

function updateDailyScreen() {
    // read localStorage for daily completion status
    let physicalDaily = JSON.parse(localStorage.getItem("physicalDaily"));
    let mentalDaily = JSON.parse(localStorage.getItem("mentalDaily"));

    // update physical daily
    let physicalCheckbox = document.getElementById("physicalDaily");
    let completePhysicalButton = document.getElementById("completePhysicalButton");
    if (physicalDaily.completed) {
        physicalCheckbox.checked = true;
        completePhysicalButton.disabled = true;
    } else {
        physicalCheckbox.checked = false;
        completePhysicalButton.disabled = false;
    }
    // update mental daily
    let mentalCheckbox = document.getElementById("mentalDaily");
    let openJournalButton = document.getElementById("openJournalButton");
    if (mentalDaily.completed) {
        mentalCheckbox.checked = true;
        openJournalButton.disabled = true;
    } else {
        mentalCheckbox.checked = false;
        openJournalButton.disabled = false;
    }
    displayDailyButtonIcon(physicalDaily, mentalDaily);
}

function setDailyPrompts(physicalDaily, mentalDaily) {
    document.getElementById("physicalDailyPrompt").innerHTML = physicalDaily.prompt;
    document.getElementById("mentalDailyPrompt").innerHTML = mentalDaily.prompt;
}

// dataType will either be physicalDaily or mentalDaily
function saveToLocalStorage(dataType, extractedData) {
    localStorage.setItem(dataType, JSON.stringify(extractedData));
}

function generateMentalDailies() {
    let randomNum = Math.floor(Math.random() * TaskType.MENTAL.length)
    return new MentalTask(randomNum);
}

function generatePhysicalDailies() {
    let randomNum = Math.floor(Math.random() * Object.keys(TaskType.PHYSICAL).length);
    return new PhysicalTask(randomNum);
}

function extractPhysicalDailyData(physicalDaily) {
    let extractedData = {
        workout : physicalDaily.getWorkout(),
        completed : physicalDaily.getCompleted(),
        taskMaximum : physicalDaily.getTaskMaximum(),
        prompt: physicalDaily.getTaskPrompt()
    }
    return extractedData;
}

function extractMentalDailyData(mentalDaily) {
    let extractedData = {
        prompt : mentalDaily.getTaskPrompt(),
        completed : mentalDaily.getCompleted(),
        promptResponse : mentalDaily.getPromptResponse(),
        mood : mentalDaily.getMood()
    }
    return extractedData;
}

function generateDailiesJSON() {
    let physicalDaily = generatePhysicalDailies();
    let mentalDaily = generateMentalDailies();
    saveToLocalStorage("physicalDaily", extractPhysicalDailyData(physicalDaily));
    saveToLocalStorage("mentalDaily", extractMentalDailyData(mentalDaily));
}