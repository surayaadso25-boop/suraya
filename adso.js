function updateBar(habitId) {
    // Get the habit container element
    const habit = document.getElementById(habitId);
    
    // Get all checkboxes within the habit
    const checkboxes = habit.querySelectorAll(".habit-checkbox");
    
    // Get the progress bar element
    const bar = document.getElementById(habitId + "-bar");
    
    // Get the streak text element
    const streakText = document.getElementById(habitId + "-streak");
    
    // Count the number of checked checkboxes
    const count = Array.from(checkboxes).filter(c => c.checked).length;
    
    // Update the streak text
    streakText.textContent = "Streak: " + count;
    
    // Reset the progress bar class to default
    bar.className = "progress-bar";
    
    // Apply color based on streak count
    if (count === 1) {
        bar.classList.add("red");
    } else if (count === 2 || count === 3) {
        bar.classList.add("yellow");
    } else if (count >= 4) {
        bar.classList.add("green");
    }
}
