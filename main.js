document.addEventListener("DOMContentLoaded", function () {
    var squares = document.querySelectorAll(".square");
    var boardColor = '#adadad';
    var selectColor = '#959595';
    var clickColor = '#737373';
    var isX = true;

    squares.forEach(
        function (square) {

            function squareMouseOver() {
                square.style.backgroundColor = selectColor;
            }

            function squareMouseLeave() {
                square.style.backgroundColor = boardColor;
                if (square.classList.contains('clicked-square')) {
                    square.classList.remove('clicked-square');
                }
            }

            function squareMouseDown() {
                 //change background immediately (no ease)
                 square.classList.toggle('clicked-square');
            }

            function squareMouseUp() {
                //add toggled image
                if (square.classList.contains('clicked-square')) {
                    var newImage = document.createElement('img');
                    if (isX) {
                        newImage.src = "images/x.png";
                    } else {
                        newImage.src = "images/o.png";
                    }
                    isX = !isX
                    newImage.classList.add('board-image');
                    square.appendChild(newImage);

                    square.classList.add('filled-square')
                    square.classList.remove('square');
                }
                if (square.classList.contains('clicked-square')) {
                    square.classList.remove('clicked-square');
                }


    
                square.style.backgroundColor = boardColor;


                //remove square from possible selections
                squares = document.querySelectorAll(".square");

                square.removeEventListener('mouseover', squareMouseOver);
                square.removeEventListener('mouseleave', squareMouseLeave);
                square.removeEventListener('mousedown', squareMouseDown);
                square.removeEventListener('mouseup', squareMouseUp);
            }

            //change background when selected
            square.addEventListener('mouseover', squareMouseOver);
            

            //change background back to normal
            square.addEventListener('mouseleave',squareMouseLeave);

            //press mouse down
            square.addEventListener('mousedown', squareMouseDown);
            
            square.addEventListener('mouseup', squareMouseUp);
    });
});