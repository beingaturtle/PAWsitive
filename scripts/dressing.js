
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

    
    
    addItems(btnID);
}

function showClassImg(btnID){
    
}

// Call the function to add event listeners to dressing buttons
addEventListenerToDressingBtn();

function addItems(btnID) {
        // items
        const itemCategories = document.getElementById("items");
    itemCategories.innerHTML = ''; // Clear the item container
    

    let items;
    switch (btnID) {
        case 'hairStyleBtn':
            items = ['./images/wardrobe/hair small.png'];
            break;
        case 'shirtBtn':
            items = ['./images/wardrobe/Tshirt small.png','./images/wardrobe/hoodie small.png'];
            break;
        case 'pantsBtn':
            items = ['./images/wardrobe/shorts small.png','./images/wardrobe/pants small.png'];
            break;
        case 'shoeBtn':
            items = ['./images/wardrobe/shoes small.png'];
            break;
        case 'petBtn':
            items = ['./images/wardrobe/dog small.png'];
            break;
    }

    items.forEach(item => {
        const itemImg = document.createElement("img");
        itemImg.src = item;
        itemImg.style.width = '20%'; // set width to 50%
        itemCategories.appendChild(itemImg);

    });

    
}
