class MentalTask extends Task {

    #mood; // int 1-3 (sad, neutral, happy)
    #promptResponse; // String

    constructor(randomNum) {
        super(TaskType.MENTAL);
        this.setTaskPrompt(TaskType.MENTAL[randomNum]);
    }

    // Getters and Setters
    getMood() {
        return this.#mood;
    }
    
    getPromptResponse() {
        return this.#promptResponse;
    }
    
    setMood(mood) {
        this.#mood = mood;
    }
    
    setPromptResponse(response) {
        this.#promptResponse = response;
    }
}