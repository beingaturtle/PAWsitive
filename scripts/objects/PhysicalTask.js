class PhysicalTask extends Task {
  
    #workout;
    #taskMaximum;
    #taskUnits;
    #taskType

    constructor(randomNum) {
        super(TaskType.PHYSICAL);
        let workoutData = this.#retrieveWorkoutData(randomNum);
        this.#taskMaximum = workoutData[0];
        this.#taskUnits = workoutData[1];
        this.#taskType = workoutData[2];
        this.#workout = Object.keys(TaskType.PHYSICAL).find(key => TaskType.PHYSICAL[key] === workoutData);
        let prompt = `Complete ${this.#taskMaximum} ${this.#taskUnits} ${this.#workout}`;
        this.setTaskPrompt(prompt);
    }

    #retrieveWorkoutData(randomNum) {
        return TaskType.PHYSICAL[Object.keys(TaskType.PHYSICAL)[randomNum]];
    }

    // Getters and Setters
    getWorkoutType() {
        return this.#workout;
    }

    getTaskMaximum() {
        return this.#taskMaximum;
    }

    getTaskUnits() {
        return this.#taskUnits;
    }

    getTaskType() {
        return this.#taskType;
    }

}