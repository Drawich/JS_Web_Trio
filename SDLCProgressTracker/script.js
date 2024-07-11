// Get DOM elements
const progressContainer = document.getElementById("progress-container");
const progress = document.getElementById("progress");
const taskBox = document.getElementById("task-box");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

// Initialize variables
let circles = [];
let currentStep = 1;

// Assign text to text boxes
const titleBox = ["Software Development Lifecycle"];
const steps = [
  "Step 1: Requirements Gathering: Gather and analyze requirements from stakeholders and users. ",
  "Step 2: System Design: Define the software architecture and detailed design based on requirements.",
  "Step 3: Implementation: Write code and integrate components to build the software.",
  "Step 4: Testing: Verify and validate the software to ensure it works correctly and meets quality standards.",
  "Step 5: Deployment: Release the software for use in the production environment.",
  "Step 6: Maintenance: Provide ongoing support, fix issues, and make updates as needed after deployment.",
];

// Initialize title (static)
const title = titleBox[0];

// Function to initialize progress steps
function initProgressSteps(numSteps) {
  for (let i = 1; i <= numSteps; i++) {
    const circle = document.createElement("div");
    circle.classList.add("circle");
    circle.textContent = i;
    circles.push(circle);
    progressContainer.appendChild(circle); // Append circle directly to progressContainer
  }
}

// Initial setup
numbersOfSteps = 6; // number of steps or circles you need
initProgressSteps(numbersOfSteps);
update();

// Event listeners for next and previous buttons
next.addEventListener("click", () => {
  currentStep++;
  if (currentStep > circles.length) {
    currentStep = circles.length;
  }
  update();
});

prev.addEventListener("click", () => {
  currentStep--;
  if (currentStep < 1) {
    currentStep = 1;
  }
  update();
});

// Update UI based on current step
function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentStep) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  prev.disabled = currentStep === 1;
  next.disabled = currentStep === circles.length;

  document.getElementById("title-box").textContent = title;

  const task = steps[currentStep - 1];
  document.getElementById("task-box").textContent = task;
}
