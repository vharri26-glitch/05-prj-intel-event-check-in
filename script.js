// Get the form inputs
const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");

// Get the attendance display elements
const attendeeCount = document.getElementById("attendeeCount");
const progressBar = document.getElementById("progressBar");
const greeting = document.getElementById("greeting");
const attendeeList = document.getElementById("attendeeList");

// Get the team counter elements
const waterCount = document.getElementById("waterCount");
const zeroCount = document.getElementById("zeroCount");
const powerCount = document.getElementById("powerCount");
// Track attendance
// Load saved attendance or begin at zero
let count = Number(localStorage.getItem("count")) || 0;
const maxCount = 50;

// Load saved team totals
waterCount.textContent = localStorage.getItem("waterCount") || "0";
zeroCount.textContent = localStorage.getItem("zeroCount") || "0";
powerCount.textContent = localStorage.getItem("powerCount") || "0";

// Display the saved total and progress
attendeeCount.textContent = count;

const savedPercentage =
  Math.min(Math.round((count / maxCount) * 100), 100) + "%";

progressBar.style.width = savedPercentage;

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
  const percentage = Math.min(Math.round((count / maxCount) * 100), 100) + "%";
  // Find the counter for the selected team
  const teamCounter = document.getElementById(team + "Count");

  // Convert its current text into a number
  const current = parseInt(teamCounter.textContent);

  // Increase the team's attendance
  const newTotal = current + 1;
  teamCounter.textContent = newTotal;

  // Save all attendance totals
  localStorage.setItem("count", count);
  localStorage.setItem("waterCount", waterCount.textContent);
  localStorage.setItem("zeroCount", zeroCount.textContent);
  localStorage.setItem("powerCount", powerCount.textContent);

  // Display the updated total attendance
  attendeeCount.textContent = count;

  // Update the progress bar
  progressBar.style.width = percentage;

  // Display a personalized greeting
  greeting.textContent = `Welcome, ${name} from ${teamName}!`;
  greeting.classList.add("success-message");
  greeting.style.display = "block";

  // Add the attendee to the list
  const attendeeItem = document.createElement("li");
  attendeeItem.textContent = `${name} — ${teamName}`;
  attendeeList.appendChild(attendeeItem);

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
