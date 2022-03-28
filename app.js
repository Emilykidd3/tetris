document.addEventListener('DOMContentLoaded', () => 
    function makeGameBorad() {
        var grid = document.querySelector(".grid")

        for (var i = 0; i < 200; i ++) {
            let square = document.createElement("div");
            gameBoard.appendChild(square);
        }
    }
})