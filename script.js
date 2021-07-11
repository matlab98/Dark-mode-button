const chk = document.getElementById("chk");
const ground = document.getElementById("back");
const ball = document.getElementById("ball");

    // Obtenemos el modo actual.
    if (localStorage.getItem('dark-mode') === 'true') {
      document.body.classList.add('dark');
      ground.classList.add('night');
      ball.className = 'moon ball';
    } else {
      document.body.classList.remove('dark');
      ground.classList.remove('night');
      ball.className = 'ball';
    }

chk.addEventListener("change", () => {

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


