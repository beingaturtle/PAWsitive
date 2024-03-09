class Task {
    
    // private fields marked with #
    #taskType; // TaskType dictionary
    #physicalType; // String, null if mental type

    // public constructor
    constructor(taskType) {
        this.#taskType = taskType;
        this.#taskDescription = this.#pickTaskDescription(taskType);
    }

    // Getters and Setters
    getTaskDescription() {
        return this.#taskDescription;
    }

    getTaskType() {
        return this.#taskType;
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
