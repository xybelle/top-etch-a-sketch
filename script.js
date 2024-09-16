const grid = document.querySelector(".grid-container");

function createGrid() {
    const numberOfRows = 16;
    const column = 16;
    for (let i = 0; i < numberOfRows; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        grid.appendChild(row);
        for (let j = 0; j < column; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            row.appendChild(square);
        }
    }
}

createGrid();