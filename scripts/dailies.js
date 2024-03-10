function initializeDailyScreen(physicalDaily, mentalDaily) {
  let closeButton = document.getElementById("closeButton");
  let dailyScreen = document.getElementById("dailyScreen");
  let taskJustCompleted = false;

  let physicalCheckbox = document.getElementById("physicalDaily");
  let completePhysicalButton = document.getElementById(
    "completePhysicalButton"
  );
  let openJournalButton = document.getElementById("openJournalButton");
  let skipDailyButton = document.getElementById("skipDailyButton");

  // add event listener for close button
  closeButton.addEventListener("click", () => {
    dailyScreen.close();
  });

  // add event listener for physical daily completion button
  completePhysicalButton.addEventListener("click", () => {
    physicalDaily.completed = true;
    physicalCheckbox.checked = true;
    saveToLocalStorage("physicalDaily", physicalDaily);
    updateDailyScreen();
  });

  // add event listener for button to open journal
  openJournalButton.addEventListener("click", () => {
    document.getElementById("journalScreen").showModal();
  });

  setDailyPrompts(physicalDaily, mentalDaily);

  // add event listener to skip button
  skipDailyButton.addEventListener("click", () => {
    physicalDaily.completed = true;
    mentalDaily.completed = true;
    mentalDaily.mentalCheckbox = true;
    updateBreakToken(fetchBreakTokenCount() - 1);
    saveToLocalStorage("physicalDaily", physicalDaily);
    saveToLocalStorage("mentalDaily", mentalDaily);
    skipDailyButton.disabled = true;
    physicalCheckbox.checked = true;
    updateDailyScreen();
  });
  if (
    fetchBreakTokenCount() == 0 ||
    (physicalDaily.completed && mentalDaily.completed)
  ) {
    skipDailyButton.disabled = true;
  }
}

function updateSkipDailyButton(physicalDaily, mentalDaily) {
  // handle skip daily button logic
  let breakTokenCount = fetchBreakTokenCount();

  if (
    breakTokenCount == 0 ||
    (physicalDaily.completed && mentalDaily.completed)
  ) {
    skipDailyButton.disabled = true;
  } else {
    // re-enabled button after reset
    skipDailyButton.disabled = false;
  }
}

async function updateDailyScreen() {
  // read localStorage for daily completion status
  let physicalDaily = JSON.parse(localStorage.getItem("physicalDaily"));
  let mentalDaily = JSON.parse(localStorage.getItem("mentalDaily"));
  console.log(physicalDaily);

  // update physical daily
  let physicalCheckbox = document.getElementById("physicalDaily");
  let completePhysicalButton = document.getElementById(
    "completePhysicalButton"
  );

  if (physicalDaily.completed === true) {
    physicalCheckbox.checked = true;
    completePhysicalButton.disabled = true;
  } else {
    physicalCheckbox.checked = false;
    completePhysicalButton.disabled = false;
  }
  // update mental daily
  let mentalCheckbox = document.getElementById("mentalDaily");
  let openJournalButton = document.getElementById("openJournalButton");

  if (mentalDaily.completed === true) {
    mentalCheckbox.checked = true;
    openJournalButton.disabled = true;
  } else {
    mentalCheckbox.checked = false;
    openJournalButton.disabled = false;
  }

  setDailyPrompts(physicalDaily, mentalDaily);

  updateSkipDailyButton(physicalDaily, mentalDaily);

  displayDailyButtonIcon(physicalDaily, mentalDaily);
}

function setDailyPrompts(physicalDaily, mentalDaily) {
  document.getElementById("physicalDailyPrompt").innerHTML =
    physicalDaily.prompt;
  document.getElementById("mentalDailyPrompt").innerHTML = mentalDaily.prompt;
}

// dataType will either be physicalDaily or mentalDaily
function saveToLocalStorage(dataType, extractedData) {
  localStorage.setItem(dataType, JSON.stringify(extractedData));
}

function generateMentalDailies() {
  let randomNum = Math.floor(Math.random() * TaskType.MENTAL.length);
  return new MentalTask(randomNum);
}

function generatePhysicalDailies() {
  let randomNum = Math.floor(
    Math.random() * Object.keys(TaskType.PHYSICAL).length
  );
  return new PhysicalTask(randomNum);
}

function extractPhysicalDailyData(physicalDaily) {
  let extractedData = {
    workout: physicalDaily.getWorkout(),
    completed: physicalDaily.getCompleted(),
    taskMaximum: physicalDaily.getTaskMaximum(),
    prompt: physicalDaily.getTaskPrompt(),
  };
  return extractedData;
}

function extractMentalDailyData(mentalDaily) {
  let extractedData = {
    prompt: mentalDaily.getTaskPrompt(),
    completed: mentalDaily.getCompleted(),
    promptResponse: mentalDaily.getPromptResponse(),
    mood: mentalDaily.getMood(),
  };
  return extractedData;
}

function generateDailiesJSON() {
  let physicalDaily = generatePhysicalDailies();
  let mentalDaily = generateMentalDailies();
  saveToLocalStorage("physicalDaily", extractPhysicalDailyData(physicalDaily));
  saveToLocalStorage("mentalDaily", extractMentalDailyData(mentalDaily));
}
