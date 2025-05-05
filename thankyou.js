
  document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const rating = params.get("rating");
    document.getElementById("rating").textContent = rating;
  });