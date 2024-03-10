// item is any clothing item
function savePull(clothing) {
    let wardrobe = JSON.parse(localStorage.getItem("wardrobe"));
    let clothingName = clothing.getClothingName();
    if (wardrobe == null) {
        wardrobe = {};
        wardrobe[clothingName] = 1;
        localStorage.setItem("wardrobe", JSON.stringify(wardrobe));
        return
    }
    if (wardrobe[clothingName] == null) {
        wardrobe[clothingName] = 1;
    } else {
        wardrobe[clothingName] += 1;
    }
    localStorage.setItem("wardrobe", JSON.stringify(wardrobe));
}