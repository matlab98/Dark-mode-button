const chk = document.getElementById("chk");
const ground = document.getElementById("back");
const ball = document.getElementById("ball");

    // Obtenemos el modo actual.
    if (localStorage.getItem('dark-mode') === 'true') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }

chk.addEventListener("change", () => {

    document.body.classList.toggle('dark');
    if (ground.className == 'icon') {
      localStorage.setItem('dark-mode', 'true');
    } else {
      localStorage.setItem('dark-mode', 'false');
    }
});


