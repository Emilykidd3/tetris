document.addEventListener('DOMContentLoaded', () => {
    var grid = document.querySelector(".grid");
    const ScroeDisplay = document.querySelector('#score');
    const StartBtn = document.querySelector('#start-button')
    const width = 10

    // the shapes
    const ltetromino = [
        [1, width+1, width*2+1, 2],
        [width, width+1, width+2, width*2+2],
        [1, width+1, width*2+1, width*2],
        [width, width*2, width*2+1, width*2+2]
    ]

    function makeGameBoard() {
        var squares = []
        for (var i = 0; i < 200; i ++) {
            let square = document.createElement("div");
            grid.appendChild(square);
            squares.push(square);
        }
        return squares;
    }

    var squares = makeGameBoard();
    console.log(squares);
})