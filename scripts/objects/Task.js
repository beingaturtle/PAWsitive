class Task {
    
    // private fields marked with #
    #taskDescription; // String
    #taskType; // TaskType enum
    #completed; // Boolean

    // public constructor
    constructor(taskType) {
        this.#taskType = taskType;
        this.#completed = false;
        this.#taskDescription = this.#pickTaskDescription(taskType);
    }

    // Getters and Setters
    getTaskDescription() {
        return this.#taskDescription;
    }

    getTaskType() {
        return this.#taskType;
    }

    getCompletionStatus() {
        return this.#completed;
    }

    setCompletionStatus(boolValue) {
        this.#completed = boolValue;
    }

    // private pick task description method
    #pickTaskDescription(taskType) {
        if (taskType == TaskType.PHYSICAL) {
            let randomNum = Math.random() * Object.keys(PHYSICAL_TASKS).length;
            return PHYSICAL_TASKS[Object.keys(PHYSICAL_TASKS)[randomNum]];
        }
        let randomNum = Math.floor(Math.random() * MENTAL_TASKS.length);
        return MENTAL_TASKS[randomNum];
    }
}
