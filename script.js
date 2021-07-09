const chk = document.getElementById("chk");
const ground = document.getElementById("back");
const ball = document.getElementById("ball");
const contBall = document.getElementById("container-icon");

chk.addEventListener("change", () => {
  document.body.classList.toggle("dark");

  if (ground.getAttribute("src") == "light.jpeg") {
    ground.src = "night.jpeg";
    ground.className = "icon-dark";
	contBall.className="ball moon-shadow";
    ball.src = "moon.svg";
	ball.className = "moon";
  } else {
    ground.src = "light.jpeg";
    ground.className = "icon-light";
	contBall.className="ball sun-shadow";
    ball.src = "https://img.icons8.com/128/fluent/000000/weather.png";


    ball.className = "sun";
  }
});
