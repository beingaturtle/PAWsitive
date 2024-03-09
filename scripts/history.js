document.getElementById('btnExercise').addEventListener('click', function () {
    document.getElementById('contentExercise').style.display = 'block'; // Show content A
    document.getElementById('contentJournal').style.display = 'none'; // Hide content B
});

document.getElementById('btnJournal').addEventListener('click', function () {
    document.getElementById('contentJournal').style.display = 'block'; // Show content B
    document.getElementById('contentExercise').style.display = 'none'; // Hide content A
});
