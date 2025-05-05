
const ratingBtns = document.querySelectorAll(".rating-button");
let selectedRating = null;

// Handle button clicks
ratingBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Reset styles for all buttons
    ratingBtns.forEach((button) => {
      button.style.backgroundColor = "hsl(212, 20%, 25%)";
      button.style.color = "hsl(217, 12%, 63%)";
    });

    // Set style for selected button
    btn.style.backgroundColor = "hsl(0, 0%, 100%)";
    btn.style.color = "hsl(216, 12%, 8%)";

    // Store selected rating
    selectedRating = btn.textContent;
    document.getElementById("ratingInput").value = selectedRating;
  });
});

// Optional: prevent form submission if no rating is selected
document.querySelector("form").addEventListener("submit", function (e) {
  if (!selectedRating) {
    e.preventDefault();
    alert("Please select a rating before submitting.");
  }
});