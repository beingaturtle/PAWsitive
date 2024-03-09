class Task {
    // private fields marked with #
    #taskType; // TaskType enum
    #taskPrompt; // String

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

    setTaskPrompt(prompt) {
        this.#taskPrompt = prompt;
    }
}
