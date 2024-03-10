document.addEventListener("DOMContentLoaded", function() {
    let isWardrobeOpen = false;

    function toggleWardrobe() {
        event.preventDefault();
        let wardrobe = document.getElementById("wardrobeScreen");
        if (isWardrobeOpen) {
            wardrobe.style.display="none";
            isWardrobeOpen = false;
        } else {
            wardrobe.style.display="block";
            isWardrobeOpen = true;
        }
    }

    // Click function for wardrobe
    let clothingButton = document.getElementById("clothingButton");
    if(clothingButton) {
        clothingButton.addEventListener("click", toggleWardrobe);
    }
});