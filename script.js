// Get the form inputs
const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");

// Get the attendance display elements
const attendeeCount = document.getElementById("attendeeCount");
const progressBar = document.getElementById("progressBar");
const greeting = document.getElementById("greeting");

// Get the team counter elements
const waterCount = document.getElementById("waterCount");
const zeroCount = document.getElementById("zeroCount");
const powerCount = document.getElementById("powerCount");
// Track attendance
let count = 0;
const maxCount = 50;
 // Handle form submission
form.addEventListener("submit", function (event) {
  // Keep the page from refreshing
  event.preventDefault();

  // Get the attendee's name and selected team
  const name = nameInput.value.trim();
  const team = teamSelect.value;
  const teamName = teamSelect.selectedOptions[0].text;

  // Stop if either field is empty
  if (name === "" || team === "") {
    return;
  }
  // Increase the total attendance
  count++;

  // Calculate progress toward the goal
  const percentage =
    Math.min(Math.round((count / maxCount) * 100), 100) + "%";
    // Find the counter for the selected team
  const teamCounter = document.getElementById(team + "Count");

  // Convert its current text into a number
  const current = parseInt(teamCounter.textContent);

  // Increase the team's attendance
  const newTotal = current + 1;
  teamCounter.textContent = newTotal;
  // Display the updated total attendance
  attendeeCount.textContent = count;

  // Update the progress bar
  progressBar.style.width = percentage;

  // Display a personalized greeting
  greeting.textContent = `Welcome, ${name} from ${teamName}!`;
  greeting.classList.add("success-message");
  greeting.style.display = "block";

  // Clear the form for the next attendee
  form.reset();
// Display the updated total attendance
  attendeeCount.textContent = count;

  // Update the progress bar
  progressBar.style.width = percentage;

  // Display a personalized greeting
  greeting.textContent = `Welcome, ${name} from ${teamName}!`;
  greeting.classList.add("success-message");
  greeting.style.display = "block";

  // Clear the form for the next attendee
  form.reset();
});
