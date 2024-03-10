
function addEventListenerToDressingBtn() {
    const dressingBtns = document.querySelectorAll("#wardrobeContainer .dressBtn");
    dressingBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            updateClassName(btn.id);
            showClassImg(btn.id);
        });
    });
}

function updateClassName(btnID) {
    const dressingBtns = document.querySelectorAll("#wardrobeContainer .dressBtn");
    dressingBtns.forEach(btn => {
        btn.classList.remove("activated");
    });
    document.getElementById(btnID).classList.add("activated");
    console.log(btnID)
}

function showClassImg(btnID){
    
}

// Call the function to add event listeners to dressing buttons
addEventListenerToDressingBtn();



