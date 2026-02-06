const noBtn = document.querySelector(".no-btn");
const yesBtns = document.querySelectorAll(".yes-btn");
const message = document.getElementById("message");

// Make "No" button dodge
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100; // horizontal move
  const y = Math.random() * 150 - 75;  // vertical move
  noBtn.style.transform = `translate(${x}px, ${y}px) rotate(${Math.random()*20-10}deg)`;
});

// Reset No button position when mouse leaves
noBtn.addEventListener("mouseout", () => {
  noBtn.style.transform = `translate(0,0) rotate(0deg)`;
});

// Yes button reactions
yesBtns[0].addEventListener("click", () => {
  message.textContent = "That makes me really happy 🥰";
});

yesBtns[1].addEventListener("click", () => {
  message.textContent = "Okay wow… I’m smiling now 😳💗";
});
