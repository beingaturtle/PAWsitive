class Task {
    // private fields marked with #
    #taskType; // TaskType enum
    #taskPrompt; // String
    #completed; // boolean

    // public constructor
    constructor(taskType) {
        this.#taskType = taskType;
    }

    // Getters and Setters
    getTaskType() {
        return this.#taskType;
    }

    getTaskPrompt() {
        return this.#taskPrompt;
    }

    getCompleted() {
        return this.#completed;
    }

    setTaskPrompt(prompt) {
        this.#taskPrompt = prompt;
    }

    setCompleted(boolean) {
        this.#taskPrompt = boolean;
    }

}
