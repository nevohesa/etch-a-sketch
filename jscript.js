const reset = document.getElementById('resetButton');
const container = document.getElementById('container');

// let gridSize = 16;
reset.addEventListener('click', event => {

    document.querySelectorAll('.div-item').forEach(item => {
        item.classList.remove('active');
    });
    gridSize = prompt('Enter grid Size:');
    if (gridSize > 64 || gridSize < 1) {
        alert("Too big or small, your computer will sweat");
    } else {
        startGrid(gridSize, gridSize);
    }

})



function startGrid(rows = 16, cols = 16) {
    container.style.setProperty("--grid-row", rows)
    container.style.setProperty("--grid-col", cols);
    for (i = 0; i < rows * cols; i++) {
        const gridDiv = document.createElement('div');
        gridDiv.classList.add('div-item');
        console.log(i);
        container.appendChild(gridDiv);
    }

    document.querySelectorAll('.div-item').forEach(item => {
        item.addEventListener('mouseenter', event => {
            item.classList.add('active');
        })
    });

}



startGrid();