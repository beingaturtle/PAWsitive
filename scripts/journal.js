function initializeJournalScreen(physicalDaily, mentalDaily) {
    // get every button
    let journalScreen = document.getElementById("journalScreen");
    let happyButton = document.getElementById("happyButton");
    let neutralButton = document.getElementById("neutralButton");
    let sadButton = document.getElementById("sadButton");
    let journalEntry = document.getElementById("journalEntry");
    let closeJournalButton = document.getElementById("closeJournalButton");
    let mood;

    // add event listeners to every mood button
    happyButton.addEventListener("click", () => {
        // add some styling here
        mood = "happy";
    });
    neutralButton.addEventListener("click", () => {
        // add some styling here
        mood = "neutral";
    });
    sadButton.addEventListener("click", () => {
        // add some styling here
        mood = "sad";
    });

    // add event listener for finalize button
    closeJournalButton.addEventListener("click", () => {
        if (mood == null) mood = "neutral";

        if (!journalEntry.value) {
            mentalDaily.promptResponse = "You didn't write anything today!";
        } else {
            mentalDaily.promptResponse = journalEntry.value;
        }
        mentalDaily.mood = mood;
        mentalDaily.completed = true;
        saveToLocalStorage("mentalDaily", mentalDaily);
        journalScreen.close();
        
        // disable open journal button
        let openJournalButton = document.getElementById("openJournalButton");
        openJournalButton.disabled = true;
        updateDailyScreen();
    });
}