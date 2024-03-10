function toggleWardrobe() {
    let wardrobe = document.getElementById("clothingButton");
    
    if (isWardrobeOpen) {
        wardrobe.style.display = "none";
        isWardrobeOpen = false;
    } else {
        wardrobe.style.display = "block";
        isWardrobeOpen = true;
    }
}

// Click function for wardrobe
document.getElementById("clothingButton").addEventListener("click", toggleWardrobe);

