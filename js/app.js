const btnBrightness = document.querySelector('#btnDarkMode')

btnBrightness.addEventListener('click', function() {
    const pagina = document.querySelector('.content')
    const isDarkMode = pagina.classList.contains("dark-mode")

    pagina.classList.toggle("dark-mode")

    if(isDarkMode === true) {
        btnBrightness.textContent = "Modo Escuro"
    } else {
        btnBrightness.textContent = "Modo Claro"
    }
})