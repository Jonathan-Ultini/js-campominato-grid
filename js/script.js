// Selezioniamo gli elementi dal DOM
const playButton = document.getElementById('play');
const gridContainer = document.getElementById('grid');

// Aggiungiamo un event listener al bottone play
playButton.addEventListener('click', function () {
  generateGrid();
});

// Funzione per generare la griglia
function generateGrid() {
  gridContainer.innerHTML = '';

  for (let i = 1; i <= 100; i++) {
    const cell = document.createElement('div');
    cell.classList.add('grid-item');
    cell.innerHTML = i;
    gridContainer.appendChild(cell);
  }
}
