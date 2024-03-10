// Constants for physical tasks, and how much user needs to do
const PHYSICAL_TASKS = {
    "Jogging" : [2, "km"],
    "Sit-ups" : [50, "reps"],
    "Push-ups" : [50, "reps"],
    "Squats" : [50, "reps"],
    "Plank" : [2, "minutes"],
    "Jumping Jacks" : [100, "reps"],
    "Burpees" : [25, "reps"],
    "Lunges" : [50, "reps"],
    "Bicycle Crunches" : [50, "reps"],
    "Mountain Climbers" : [50, "reps"],
    "Leg Raises" : [50, "reps"],
    "High Knees" : [100, "reps"],
    "Butt Kicks" : [100, "reps"],
    "Arm Circles" : [100, "reps"],
    "Calf Raises" : [100, "reps"],


}

// Constants for list of mental task prompts
const MENTAL_TASKS = [
    "How are you feeling today?",
    "What would you rate your day today?",
    "What are you feeling grateful for today?",
    "What are some goals you have for today?",
    "How did you take care of yourself today?",
    "What are some things you want to accomplish today?",
    "What is one way you plan to relax and unwind this evening?",
    "What are the highlights of your day?",
    "What is something you did that you're proud of?",
    "What is something you learned today?",
    "What is something you're looking forward to do?",
    "How would you describe your day in a sentence?",
    "What is something you want to improve on?",
    "What is something you want to do more of?"
];

const TaskType = Object.freeze({
    PHYSICAL : PHYSICAL_TASKS,
    MENTAL : MENTAL_TASKS
});
