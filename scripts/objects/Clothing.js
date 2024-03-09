class Clothing {
    // private fields marked with #
    #clothingType; // ClothingType Enum
    #imageReference; // String
    #color; // String (for hex code)

    // public constructor for randomization
    constructor() {
        this.#clothingType = this.#pickClothingType();
        this.#color = this.#pickClothingColor();
        this.#imageReference = this.#pickImageReference(this.#clothingType);
    }

    // Getters and Setters
    getClothingType() {
        return this.#clothingType;
    }

    getClothingColor() {
        return this.#color;
    }

    getImageReference() {
        return this.#imageReference;
    }

    setClothingType(clothingType) {
        this.#clothingType = clothingType;
    }

    setImageReference(imageReference) {
        this.#imageReference = imageReference;
    }

    setClothingColor(color) {
        this.#color = color;
    }

    // private methods
    #pickClothingType() {
        let randomNum = Math.random() * Object.keys(ClothingType).length;
        return PHYSICAL_TASKS[Object.keys(ClothingType)[randomNum]];
    }

    #pickImageReference(clothingType) {
        switch(clothingType) {
            case ClothingType.HAT:
                return "images/hats/Bunny.gif"
            case ClothingType.SCARF:
                return "images/scarves/Bunny.gif"
            case ClothingType.NECKLACE:
                return "images/necklaces/Bunny.gif"
            case ClothingType.SHIRT:
                return "images/shirts/Bunny.gif"
            case ClothingType.PANTS:
                return "images/pants/Bunny.gif"
            case ClothingType.SHOES:
                return "images/shoes/Bunny.gif"
            case ClothingType.PET:
                return "images/pets/Bunny.gif"
            case ClothingType.GLOVES:
                return "images/gloves/Bunny.gif"
            case ClothingType.GLASSES:
                return "images/glasses/Bunny.gif"
        }
    }

    #pickClothingColor() {
        let randomNum = Math.random() * Object.keys(colors).length;
        return PHYSICAL_TASKS[Object.keys(ClothingType)[randomNum]];
    }
}