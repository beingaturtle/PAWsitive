document.getElementById('btnExercise').addEventListener('click', function () {
    document.getElementById('contentExercise').style.display = 'block';
    document.getElementById('contentJournal').style.display = 'none';
    document.getElementById('btnExercise').style.color = '#5A3DBD';
    document.getElementById('btnExercise').style.backgroundColor = 'white'; 
    document.getElementById('btnJournal').style.color = 'white';
    document.getElementById('btnJournal').style.backgroundColor = '#5A3DBD';


});

document.getElementById('btnJournal').addEventListener('click', function () {
    document.getElementById('contentJournal').style.display = 'block';
    document.getElementById('contentExercise').style.display = 'none';
    document.getElementById('btnJournal').style.color = '#5A3DBD';
    document.getElementById('btnJournal').style.backgroundColor = 'white';
    document.getElementById('btnExercise').style.color = 'white';
    document.getElementById('btnExercise').style.backgroundColor = '#5A3DBD';
});
