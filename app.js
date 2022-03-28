document.addEventListener('DOMContentLoaded', () => {
    var grid = document.querySelector(".grid");
    const ScroeDisplay = document.querySelector('#score');
    const StartBtn = document.querySelector('#start-button')
    const width = 10
    const height = 20

    function makeGameBoard() {
        var squares = []
        for (var i = 0; i < 200; i ++) {
            let square = document.createElement("div");
            grid.appendChild(square);
            squares.push(square);
        }
        console.log(squares)
    }

    makeGameBoard();
})