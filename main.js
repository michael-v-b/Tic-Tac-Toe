document.addEventListener("DOMContentLoaded", function () {
    var squares = document.querySelectorAll(".square");
    var boardColor = '#adadad';
    var selectColor = '#959595';
    var clickColor = '#737373';

    console.log(squares)
    squares.forEach(
        function (square) {
            square.addEventListener('mouseover',
                function () {
                    square.style.backgroundColor = selectColor;
                }
            );

            square.addEventListener('mouseleave',
                function () {
                    square.style.backgroundColor = boardColor;
                    if (square.classList.contains('clicked-square')) {
                        square.classList.remove('clicked-square');
                    }
                }
            );

            square.addEventListener('mousedown',
                function () {
                    
                    square.classList.toggle('clicked-square');
                
                }
            );
            square.addEventListener('mouseup',
                function () {
                    square.classList.toggle('clicked-square');
                }
            )
    });
});