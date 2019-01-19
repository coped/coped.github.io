// Creation of initial grid
let grid = document.querySelector('.grid');
grid.style.gridTemplateColumns = 'repeat(16, 1fr)';
generateGridSquares(256);

function generateGridSquares(numberOfSquares) {
    for (i = 0; i < numberOfSquares; i++) {
        let gridSquare = document.createElement('div');
        gridSquare.classList.add('empty-square');
        grid.appendChild(gridSquare);
    }

    // Adding functionality to grid squares
    let gridArray = Array.from(document.querySelectorAll('.empty-square'));
    gridArray.forEach(div => div.addEventListener('mouseover', addColor));

    function generateRgb() {
        return Math.floor(Math.random() * 255);
    }
    function addColor(e) {
        e.target.style.backgroundColor = 'rgb(' + generateRgb() + ', ' + generateRgb() + ', ' + generateRgb() + ')';
        e.target.setAttribute('class', 'fill-square');
    }
}
// For creating new grids
let button = document.querySelector('#new-grid-button');
button.addEventListener('click', () => {
    createNewGrid();
});

function createNewGrid() {
    let gridSize = +prompt('How many squares per row/ column? (Values under 200 recommeded.)', '');
    if (isNaN(gridSize) === true) {
        alert('Enter a numerical value.');
        createNewGrid();
        return;
    } else if (gridSize == false) {
        return;
    }
    grid.remove();
    grid = document.createElement('div');
    grid.setAttribute('class', 'grid');
    document.getElementById('grid-container').appendChild(grid);
    grid.style.gridTemplateColumns = 'repeat(' + gridSize + ', 1fr)';
    let gridArea = gridSize * gridSize;

    generateGridSquares(gridArea);
}
