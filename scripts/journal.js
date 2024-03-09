function openJournal() {
    let journal = document.getElementById("journalScreen");
    journal.showModal();
}

function closeJournal() {
    let journal = document.getElementById("journalScreen");
    saveJournal();
    journal.close();
}

function setUpJournalScreen() {
    let journalScreen = document.getElementById("journalScreen");
    let closeButton = document.getElementById("closeJournalButton");
    
    
    closeButton.addEventListener("click", () => {
        closeJournal();
    });


}

function saveJournal() {
    let journalText = document.getElementById("journalEntry").value;
    localStorage.setItem("journal", journalText);
}