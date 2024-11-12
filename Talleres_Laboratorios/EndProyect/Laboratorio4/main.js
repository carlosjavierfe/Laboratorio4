// Función para alternar el modo oscuro
const toggleDarkMode = () => {
    const body = document.body;
    body.classList.toggle('dark-mode');
    
    // Guardar la preferencia del usuario en localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.setItem('dark-mode', 'disabled');
    }
};

// Comprobar la preferencia del usuario al cargar la página
if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
}

// Obtener el botón y agregar el evento de clic
const darkModeToggleButton = document.getElementById('dark-mode-toggle');
darkModeToggleButton.addEventListener('click', toggleDarkMode);
