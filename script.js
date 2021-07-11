const chk = document.getElementById("chk");
const ground = document.getElementById("back");
const ball = document.getElementById("ball");

chk.addEventListener("change", () => {

    document.body.classList.toggle('dark');
    if (ground.class == 'icon') {
      ground.classList.add('night');
      ball.class = 'moon ball';
      localStorage.setItem('dark-mode', 'true');
    } else {
      ground.classList.remove('night');
      ball.class = 'ball';
      localStorage.setItem('dark-mode', 'false');
    }
});
