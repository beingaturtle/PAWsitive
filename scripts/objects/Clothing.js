class Clothing {
    // private fields marked with #
    #clothingType; // String for image file path (key = clothing type)
    #color; // String (for hex code)

    // public constructor for randomization
    constructor() {
        this.#clothingType = this.#pickClothingType();
        this.#color = this.#pickClothingColor();
    }

    // Getters and Setters
    getClothingType() {
        return this.#clothingType;
    }

    getClothingColor() {
        return this.#color;
    }

    setClothingType(clothingType) {
        this.#clothingType = clothingType;
    }

    setClothingColor(color) {
        this.#color = color;
    }

    // private methods
    #pickClothingType() {
        let randomNum = Math.floor(Math.random() * Object.keys(ClothingType).length);
        return ClothingType[Object.keys(ClothingType)[randomNum]];
    }

    #pickClothingColor() {
        let randomNum = Math.floor(Math.random() * Object.keys(colors).length);
        return ClothingType[Object.keys(ClothingType)[randomNum]];
    }
}