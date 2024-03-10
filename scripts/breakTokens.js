// populate break tokens
function populateBreakToken() {
    // set break tokens 
    let breakTokenCount = localStorage.getItem("breakTokens");
    document.getElementById("breakTokens").innerHTML = `${breakTokenCount}/2 skips`

}

function fetchBreakTokenCount() {
    return Number(localStorage.getItem("breakTokens"));
}

function updateBreakToken(newTokens) {
    localStorage.setItem("breakTokens", newTokens);
    document.getElementById("breakTokens").innerHTML = `${newTokens}/2 skips`
}