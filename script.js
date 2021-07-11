const chk = document.getElementById("chk");

    // Obtenemos el modo actual.
    if (localStorage.getItem('dark-mode') === 'true') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }

chk.addEventListener("change", () => {
    const Body = document.body;
    
    Body.classList.toggle('dark');
    if (Body.className == 'dark') {
      localStorage.setItem('dark-mode', 'true');
    } else {
      localStorage.setItem('dark-mode', 'false');
    }
});


