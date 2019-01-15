let gridContainer = document.querySelector('#grid');

// Creation of initial grid
let div;
for (i = 0; i < 256; i++) {
    div = document.createElement('div');
    div.classList.add('emptySquare');
    gridContainer.appendChild(div);
}

// Adding functionality to grid squares
let gridDiv = Array.from(document.querySelectorAll('.emptySquare'));
gridDiv.forEach(div => div.addEventListener('mouseover', addColor));


function addColor(e) {
    e.target.setAttribute('class', 'fillSquare');
}

function createGrid() {
    let gridSize = +prompt('What size square grid? e.g. 50 x 50. (Only first value needed. Values under 200 recommeded.)', '');
    if (isNaN(gridSize) === true) {
        alert('Enter a numerical value.');
        createGrid();
        return;
    }
    let gridArea = gridSize * gridSize;
    gridContainer.remove();
    gridContainer = document.createElement('div');
    gridContainer.setAttribute('class', 'newGridContainer');
    document.getElementById('container').appendChild(gridContainer);
    gridContainer.style.gridTemplateColumns = 'repeat(' + gridSize + ', 1fr)';

    for (i = 0; i < gridArea; i++) {
        div = document.createElement('div');
        div.classList.add('emptySquare');
        gridContainer.appendChild(div);
    }
    let newGridDiv = Array.from(document.querySelectorAll('.emptySquare'));
    newGridDiv.forEach(div => div.addEventListener('mouseover', addColor));

}

let button = document.querySelector('#new-grid');
button.addEventListener('click', () => {
    createGrid();
});