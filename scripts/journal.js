function initializeJournalScreen(physicalDaily, mentalDaily) {
  // get every button
  let journalScreen = document.getElementById("journalScreen");
  let happyButton = document.getElementById("happyButton");
  let neutralButton = document.getElementById("neutralButton");
  let sadButton = document.getElementById("sadButton");
  let journalEntry = document.getElementById("journalEntry");
  let closeJournalButton = document.getElementById("closeJournalButton");
  let mentalCheckbox = document.getElementById("mentalDaily");
  let mood;

  // add event listeners to every mood button
  happyButton.addEventListener("click", () => {
    // add some styling here
    updateClassName(happyButton.id);
    mood = "happy";
  });
  neutralButton.addEventListener("click", () => {
    // add some styling here
    updateClassName(neutralButton.id);
    mood = "neutral";
  });
  sadButton.addEventListener("click", () => {
    // add some styling here
    updateClassName(sadButton.id);
    mood = "sad";
  });

  function updateClassName(btnID) {
    const moodBtns = document.querySelectorAll("#moodDiv .moodButton");
    moodBtns.forEach((btn) => {
      btn.classList.remove("moodSelected");
    });
    document.getElementById(btnID).classList.add("moodSelected");
  }

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
    mentalCheckbox.checked = true;
    saveToLocalStorage("mentalDaily", mentalDaily);
    journalScreen.close();

    // disable open journal button
    let openJournalButton = document.getElementById("openJournalButton");
    openJournalButton.disabled = true;
    updateSkipDailyButton(physicalDaily, mentalDaily);
    updateDailyScreen();
  });
}

// add active effect
