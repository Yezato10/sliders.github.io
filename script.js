// Cargar el archivo JSON
fetch('data.json')
    .then(response => response.json())  // Leer el archivo JSON
    .then(data => {
        const games = data.games;       // Obtener los juegos del JSON
        const slider = document.querySelector('.slider');

        // Limpiar cualquier contenido existente en el slider
        slider.innerHTML = '';

        // Generar el HTML para cada juego
        games.forEach(game => {
            const gameDiv = document.createElement('div');
            gameDiv.classList.add('tab', game.category);  // Añadir clase con la categoría del juego

            const img = document.createElement('img');
            img.src = game.image;  // URL de la imagen desde el JSON
            img.alt = game.title;  // Título del juego como "alt" de la imagen

            const title = document.createElement('span');
            title.classList.add('titleG');
            title.textContent = game.title;  // Título del juego desde el JSON

            gameDiv.appendChild(img);    // Añadir imagen al div
            gameDiv.appendChild(title);  // Añadir título al div
            slider.appendChild(gameDiv); // Añadir el div al slider
        });

        // Filtro de categorías (el código que ya tienes)
        document.getElementById('filtro').addEventListener('change', function () {
            const selectedCategory = this.value;
            const tabs = document.querySelectorAll('.tab');

            // Mostrar u ocultar las imágenes según la categoría seleccionada
            tabs.forEach(tab => {
                if (selectedCategory === 'all') {
                    tab.style.display = 'block'; // Mostrar todas
                } else if (tab.classList.contains(selectedCategory)) {
                    tab.style.display = 'block'; // Mostrar solo las de la categoría seleccionada
                } else {
                    tab.style.display = 'none'; // Ocultar las que no pertenecen a la categoría
                }
            });
        });
    })
    .catch(error => console.error('Error al cargar el archivo JSON:', error));

