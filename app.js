document.addEventListener('DOMContentLoaded', () => {
    function makeGameBoard() {
        var grid = document.querySelector(".grid");

        for (var i = 0; i < 200; i ++) {
            let square = document.createElement("div");
            grid.appendChild(square);
        }
    }

    makeGameBoard();
})