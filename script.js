document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const feedback = document.getElementById("feedback");

  if (!name || !email || !message) {
    feedback.textContent = "Please fill in all fields.";
    feedback.style.color = "red";
    return;
  }

  // Basic email format check
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    feedback.textContent = "Please enter a valid email address.";
    feedback.style.color = "red";
    return;
  }

  feedback.textContent = "Message sent successfully!";
  feedback.style.color = "green";

  // Clear the form
  document.getElementById("contactForm").reset();
});
