// =============================
// Dark Mode Toggle
// =============================
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  themeToggle.textContent = 
    document.body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";
});

// =============================
// Counter Feature
// =============================
let count = 0;
const counterDisplay = document.getElementById("counter");
const incrementBtn = document.getElementById("increment-btn");
const resetBtn = document.getElementById("reset-btn");

incrementBtn.addEventListener("click", () => {
  count++;
  counterDisplay.textContent = count;
});

resetBtn.addEventListener("click", () => {
  count = 0;
  counterDisplay.textContent = count;
});

// =============================
// FAQ Toggle
// =============================
document.querySelectorAll(".faq-question").forEach((q) => {
  q.addEventListener("click", () => {
    q.nextElementSibling.classList.toggle("hidden");
  });
});

// =============================
// Tab Switching
// =============================
const tabs = document.querySelectorAll(".tab");
const panes = document.querySelectorAll(".tab-pane");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    // remove active from all
    tabs.forEach(t => t.classList.remove("active"));
    panes.forEach(p => p.classList.remove("active"));
    
    // add active to selected
    tab.classList.add("active");
    document.getElementById(tab.dataset.target).classList.add("active");
  });
});

// =============================
// Form Validation
// =============================
const form = document.getElementById("signup-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const formSuccess = document.getElementById("form-success");

// Validation functions
function validateName() {
  if (nameInput.value.trim() === "") {
    nameError.textContent = "⚠ Name is required.";
    return false;
  }
  nameError.textContent = "";
  return true;
}

function validateEmail() {
  const regex = /^[^@]+@[^@]+\.[^@]+$/;
  if (!regex.test(emailInput.value.trim())) {
    emailError.textContent = "⚠ Enter a valid email.";
    return false;
  }
  emailError.textContent = "";
  return true;
}

function validatePassword() {
  if (passwordInput.value.length < 6) {
    passwordError.textContent = "⚠ Password must be at least 6 characters.";
    return false;
  }
  passwordError.textContent = "";
  return true;
}

// Real-time validation
nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
passwordInput.addEventListener("input", validatePassword);

// On form submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const validName = validateName();
  const validEmail = validateEmail();
  const validPassword = validatePassword();

  if (validName && validEmail && validPassword) {
    formSuccess.textContent = "✅ Registration successful!";
    form.reset();
  } else {
    formSuccess.textContent = "";
  }
});
