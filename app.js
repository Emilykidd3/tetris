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

    const zTetromino = [
        [0,width,width+1,width*2+1],
        [width+1, width+2,width*2,width*2+1],
        [0,width,width+1,width*2+1],
        [width+1, width+2,width*2,width*2+1]
    ]
    
    const tTetromino = [
        [1,width,width+1,width+2],
        [1,width+1,width+2,width*2+1],
        [width,width+1,width+2,width*2+1],
        [1,width,width+1,width*2+1]
    ]
    
    const oTetromino = [
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1]
    ]
    
    const iTetromino = [
        [1,width+1,width*2+1,width*3+1],
        [width,width+1,width+2,width+3],
        [1,width+1,width*2+1,width*3+1],
      [width,width+1,width+2,width+3]
    ]
    
    const theTetrominoes = [ltetromino, zTetromino, tTetromino, oTetromino, iTetromino];

    let currentPosition = 4
    let currentRotation = 0

    let random = Math.floor(Math.random()*theTetrominoes.length)
    let current = theTetrominoes[random][currentRotation];
    console.log(current);


    function makeGameBoard() {
        var squares = []
        for (var i = 0; i < 200; i ++) {
            let square = document.createElement("div");
            grid.appendChild(square);
            squares.push(square);
        }
        for (var i = 0; i < 10; i ++) {
            let square = document.createElement("div");
            grid.appendChild(square);
            squares.push(square);
        }
        return squares;
    }
    
    var squares = makeGameBoard();
    
    function draw() {
        current.forEach(index => {
            squares[currentPosition + index].classList.add('tetromino')
        })
    }

    function undraw() {
        current.forEach(index => {
            squares[currentPosition + index].classList.remove('tetromino')
        })
    }

    timerId = setInterval(moveDown, 1000);

    function moveDown(){
        undraw();
        currentPosition += width
        draw();
    }
})