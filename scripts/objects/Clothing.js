class Clothing {
    // private fields marked with #
    #clothingType; // String for image file path (key = clothing type)

    // public constructor for randomization
    constructor(clothingType) {
        this.#clothingType = clothingType || this.#pickClothingType();
    }

    // Getters and Setters
    getClothingType() {
        return this.#clothingType;
    }

    getClothingName() {
        return Object.keys(ClothingType).find(key => ClothingType[key] === this.#clothingType);
    }

    setClothingType(clothingType) {
        this.#clothingType = clothingType;
    }

    // private methods
    #pickClothingType() {
        let randomNum = Math.floor(Math.random() * Object.keys(ClothingType).length);
        return ClothingType[Object.keys(ClothingType)[randomNum]];
    }
}