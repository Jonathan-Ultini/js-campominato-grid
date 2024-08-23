// Selezioniamo gli elementi dal DOM
const playButton = document.getElementById('play');
const gridContainer = document.getElementById('grid');

// Aggiungiamo un event listener al bottone play
playButton.addEventListener('click', function () {
  generateGrid();
});

// Funzione per generare la griglia
function generateGrid() {
  gridContainer.innerHTML = ''; // Puliamo il contenitore della griglia

  for (let i = 1; i <= 100; i++) {
    const cell = document.createElement('div');
    cell.classList.add('grid-item');
    cell.innerHTML = i;

    // Aggiungiamo l'evento di click su ogni cella
    cell.addEventListener('click', function () {
      cell.classList.add('clicked');
      console.log(`Hai cliccato sulla cella numero: ${i}`);
    });

    gridContainer.appendChild(cell);
  }
}
