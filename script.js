const chk = document.getElementById("chk");
const ground = document.getElementById("back");
const ball = document.getElementById("ball");
const contBall = document.getElementById("container-icon");

chk.addEventListener("change", () => {
  const ground = document.getElementById('back');
    const ball = document.getElementById('ball');

    document.body.classList.toggle('dark');
    if (ground.className == 'icon') {
      ground.classList.add('night');
      ball.className = 'moon ball';
      localStorage.setItem('dark-mode', 'true');
    } else {
      ground.classList.remove('night');
      ball.className = 'ball';
      localStorage.setItem('dark-mode', 'false');
    }
});
