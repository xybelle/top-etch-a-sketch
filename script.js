const grid = document.querySelector(".grid-container");

function createGrid(gridSize = 16) {
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        grid.appendChild(row);
        for (let j = 0; j < gridSize; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            row.appendChild(square);

            square.addEventListener("mouseover", () => {
                square.classList.add("active");
            })
        }
    }
}

const btn = document.querySelector("#btn");
btn.addEventListener("click",() => {
    let newSize = getNumber();
    removeGrid();
    createGrid(newSize, newSize);
})

function getNumber() {
    let number;
    do {
        number = prompt("Please enter an integer between 1 and 100:");
        if (number === null) return 16;
    } while (number < 1 || number > 100);
    return number;
}

function removeGrid() {
    grid.innerHTML = "";
}

createGrid();