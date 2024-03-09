// Constants for physical tasks, and how much user needs to do
const PHYSICAL_TASKS = {
    "Jogging" : [2, "km"],
    "Sit-ups" : [50, "reps"],
    "Push-ups" : [50, "reps"]
}

// Constants for list of mental task prompts
const MENTAL_TASKS = (
    "How are you feeling today?",
    "What would you rate your day today?",
    "What are you feeling grateful for today?"
);

const TaskType = Object.freeze({
    PHYSICAL : PHYSICAL_TASKS,
    MENTAL : MENTAL_TASKS
});
