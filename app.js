document.addEventListener('DOMContentLoaded', () => {
    var grid = document.querySelector(".grid");
    var miniGrid = document.querySelector(".mini-grid");
    const ScroeDisplay = document.querySelector('#score');
    const StartBtn = document.querySelector('#start-button')
    const width = 10
    let nextRandom = 0;

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
            square.classList.add("taken")
            grid.appendChild(square);
            squares.push(square);
        }
        return squares;
    }

    function makeMiniGrid(){
        var squares = []
        for (var i = 0; i < 16; i ++) {
            let square = document.createElement("div");
            miniGrid.appendChild(square);
            squares.push(square);
        }
        return squares;
    }
    
    var squares = makeGameBoard();
    var miniSquare = makeMiniGrid();
    
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

    timerId = setInterval(moveDown, 500);

    function control(e){
        if(e.keyCode === 37) {
            moveLeft()
        } else if (e.keyCode === 38){
            rotate()
        } else if (e.keyCode === 39){
            moveRight()
        } else if (e.keyCode === 40){
            moveDown()
        }
    }
    document.addEventListener('keyup', control)

    function moveDown(){
        undraw();
        currentPosition += width
        draw();
        freeze()
    }

    function freeze() {
        if (current.some(index => squares[currentPosition + index + width].classList.contains('taken'))) {
            current.forEach(index => squares[currentPosition + index].classList.add("taken"))
            random = nextRandom
            // start a new tet falling
            nextRandom = Math.floor(Math.random() * theTetrominoes.length)
            current = theTetrominoes[random][currentRotation]
            currentPosition = 4
            draw()
            displayShape()
        }
    }

    function moveLeft() {
        undraw()
        const isAtLeftEdge = current.some(index => (currentPosition + index) % width === 0)

        if(!isAtLeftEdge) currentPosition-=1;
        if(current.some(index => squares[currentPosition 
        + index].classList.contains('taken'))){
            currentPosition+=1
        }

        draw()
    }

    function moveRight() {
        undraw()
        const isAtRightEdge = current.some(index => (currentPosition +
             index) % width === width - 1)

             if(!isAtRightEdge) currentPosition+=1

             if(current.some(index => squares[currentPosition+index].classList.contains('taken'))){
                 currentPosition-=1
             }

             draw()
    }

    function rotate() {
        undraw()
        currentRotation++
        if (currentRotation === current.length) {
            currentRotation = 0;
        }
        current = theTetrominoes[random][currentRotation]
        draw()
    }

    const displaySquares = document.querySelectorAll('.mini-grid div')
    const displayWidth = 4
    let displayIndex = 0

    // tets without rotations
    const upNextTetrominoes = [
        [1, displayWidth+1, displayWidth*2+1,2],
        [0, displayWidth, displayWidth+1, displayWidth*2+1],
        [1, displayWidth, displayWidth+1, displayWidth+2],
        [0, 1, displayWidth, displayWidth+1],
        [1, displayWidth+1, displayWidth*2+1, displayWidth*3+1]
    ]

    // display shape in mini grid
    function displayShape() {
        displaySquares.forEach(square => {
            square.classList.remove('tetromino')
        })
        upNextTetrominoes[nextRandom].forEach(index=> {
            displaySquares[displayIndex + index].classList.add('tetromino')
        })
    }
})