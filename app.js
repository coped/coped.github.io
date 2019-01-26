// Creation of initial grid
let grid = document.querySelector('.grid');
grid.style.gridTemplateColumns = 'repeat(16, 1fr)';
generateGridSquares(256);
blackWhiteMode();

function generateGridSquares(numberOfSquares) {
    for (i = 0; i < numberOfSquares; i++) {
        let gridSquare = document.createElement('div');
        gridSquare.classList.add('empty-square');
        grid.appendChild(gridSquare);
    }
}

// Adding grid interactivity
function colorMode() {
    let gridArray = Array.from(document.querySelectorAll('.empty-square, .full-square'));
    gridArray.forEach(gridSquare => gridSquare.addEventListener('mouseover', addColor));
    
    function generateRgb() {
        return Math.floor(Math.random() * 255);
    }
    function addColor(e) {
        e.target.style.backgroundColor = 'rgb(' + generateRgb() + ', ' + generateRgb() + ', ' + generateRgb() + ')';
        e.target.setAttribute('class', 'full-square');
    }

    document.getElementById('grid-container').setAttribute('class', 'color-mode');
}

function blackWhiteMode() {
    let emptyGridArray = Array.from(document.querySelectorAll('.empty-square, .full-square'));
    emptyGridArray.forEach(gridSquare => gridSquare.addEventListener('mouseover', addBlackWhite));

    function addBlackWhite(e) {
        e.target.style.backgroundColor = 'black';
        e.target.setAttribute('class', 'full-square');
    }

    document.getElementById('grid-container').setAttribute('class', 'black-white-mode');
}

function createNewGrid() {
    let gridSize = +prompt('How many squares per row/ column? (Values under 200 recommeded.)', '');
    if (isNaN(gridSize) === true) {
        alert('Enter a numerical value.');
        createNewGrid();
    } else if (gridSize == false) {
        return;
    } else {
        grid.remove();
        grid = document.createElement('div');
        grid.setAttribute('class', 'grid');
        document.getElementById('grid-container').appendChild(grid);
        grid.style.gridTemplateColumns = 'repeat(' + gridSize + ', 1fr)';
        let gridArea = gridSize * gridSize;
        
        generateGridSquares(gridArea);
        
        if (document.getElementById('grid-container').classList == 'color-mode') {
            colorMode();
        } else {
            blackWhiteMode();
        }
    }
}

// For creating new grids
let newGridButton = document.querySelector('#new-grid-button');
newGridButton.addEventListener('click', () => {
    createNewGrid();
});

// Black and color mode buttons
let blackWhiteButton = document.querySelector('#black-white-button');
blackWhiteButton.addEventListener('click', () => {
    blackWhiteMode();
});

let colorButton = document.querySelector('#color-button');
colorButton.addEventListener('click', () => {
    colorMode();
})
