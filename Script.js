const games = ["math", "guess", "memory", "color", "typing"];

function login() {
  const name = document.getElementById("nameInput").value;
  const pass = document.getElementById("passwordInput").value;
  if (name && pass === "12345678") {
    localStorage.setItem("playerName", name);
    document.getElementById("playerName").innerText = name;
    document.getElementById("loginScreen").classList.add("hidden");
    document.getElementById("spinnerScreen").classList.remove("hidden");
  } else {
    alert("Invalid credentials");
  }
}

function spinWheel() {
  const wheel = document.getElementById("ferrisWheel");
  const selectedIndex = Math.floor(Math.random() * games.length);
  const degrees = 360 * 5 + (selectedIndex * 72); // 5 full spins + final position
  wheel.style.animation = "none"; // reset idle animation
  wheel.style.transform = `rotate(${degrees}deg)`;

  const result = games[selectedIndex];
  document.getElementById("result").innerText = "🎉 Selected: " + result.toUpperCase();

  setTimeout(() => {
    window.location.href = result + ".html";
  }, 4000);
}
