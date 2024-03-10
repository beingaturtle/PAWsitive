document.addEventListener('DOMContentLoaded', () => {

    addItems("hairStyleBtn");

    function addEventListenerToDressingBtn() {
        const dressingBtns = document.querySelectorAll("#wardrobeContainer .dressBtn");
        dressingBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                updateClassName(btn.id);
            });
        });
    }
    
    function updateClassName(btnID) {
        const dressingBtns = document.querySelectorAll("#wardrobeContainer .dressBtn");
        dressingBtns.forEach(btn => {
            btn.classList.remove("activated");
        });
        document.getElementById(btnID).classList.add("activated");
        
        addItems(btnID);
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
                items = ['./images/wardrobe/bald small.png','./images/wardrobe/hair small.png'];
                break;
            case 'shirtBtn':
                items = ['./images/wardrobe/Tshirt small.png','./images/wardrobe/hoodie small.png'];
                break;
            case 'pantsBtn':
                items = ['./images/wardrobe/shorts small.png','./images/wardrobe/pants small.png'];
                break;
            case 'shoeBtn':
                items = ['./images/wardrobe/nothing shoes small.png', './images/wardrobe/shoes small.png'];
                break;
            case 'petBtn':
                items = ['./images/wardrobe/nothing pet small.png', './images/wardrobe/dog small.png'];
                break;
        }
        
        items.forEach(item => {
            let owned = checkedOwned(btnID);
            const itemImg = document.createElement("img");
            if (!owned) {
                itemImg.src = item;
                itemImg.style.width = '20%'; // set width to 50%
                itemImg.style.border = '1px solid #5A3DBD';
                itemImg.style.borderRadius = '5px';
                itemImg.style.margin = '5px';
                itemImg.style.filter = 'grayscale(100%)';
                itemImg.style.opacity = '0.3';
                itemCategories.appendChild(itemImg);
            } else {
                itemImg.src = item;
                itemImg.style.width = '20%'; // set width to 50%
                itemImg.style.border = '1px solid #5A3DBD';
                itemImg.style.borderRadius = '5px';
                itemImg.style.margin = '5px';
                itemImg.classList.add("owned");
                itemCategories.appendChild(itemImg);
                itemImg.style.filter = 'grayscale(0%)';
                itemImg.style.opacity = '1';
            }
            itemImg.id = item;
            if (item === './images/wardrobe/bald small.png') {
                itemImg.style.filter = 'grayscale(0%)';
                itemImg.style.opacity = '1';
                itemImg.classList.add("owned");
            };
            if (item === './images/wardrobe/Tshirt small.png') {
                itemImg.style.filter = 'grayscale(0%)';
                itemImg.style.opacity = '1';
                itemImg.classList.add("owned");
            }
            if (item === './images/wardrobe/shorts small.png') {
                itemImg.style.filter = 'grayscale(0%)';
                itemImg.style.opacity = '1';
                itemImg.classList.add("owned");
            }
            if (item === './images/wardrobe/nothing shoes small.png') {
                itemImg.style.filter = 'grayscale(0%)';
                itemImg.style.opacity = '1';
                itemImg.classList.add("owned");
            }
            if (item === './images/wardrobe/nothing pet small.png') {
                itemImg.style.filter = 'grayscale(0%)';
                itemImg.style.opacity = '1';
                itemImg.classList.add("owned");
            }
    })};
    
    function checkedOwned(btnID) {
        let ownedItems = JSON.parse(localStorage.getItem("wardrobe"));
        if (ownedItems == null) {
            return false;
        }
        let itemType;
        switch (btnID) {
            case 'hairStyleBtn':
                itemType = "hair"
                break;
            case 'shirtBtn':
                itemType = "shirt"
                break;
            case 'pantsBtn':
                itemType = "pants"
                break;
            case 'shoeBtn':
                itemType = "shoes"
                break;
            case 'petBtn':
                itemType = "pet"
                break;
        }
        if (ownedItems[itemType]) {
            return true;
        }
        return false;
    }
})
