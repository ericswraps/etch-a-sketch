const container = document.querySelector('#container');

function createGrid(gridSize) {
    container.innerHTML = '';
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const square = document.createElement("div");
            square.classList.add('square');
            square.style.width = `${100 / gridSize}%`;
            square.style.height = `${100 / gridSize}%`;
            square.addEventListener('mouseover', function () {
                // Perform an action when the square is clicked
                square.style.backgroundColor = 'grey';
                // You can replace console.log with any action you want to perform
            });
            container.appendChild(square);
        }

    }
}

createGrid(16);

const btn = document.querySelector('#btn');
btn.addEventListener('click', function () {
    const input = prompt('How many squares per side would you like for the new grid');
    createGrid(parseInt(input));
});




