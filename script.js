//make flexbox for horizontal rows
//make flexbox containing horizontal flexbox rows

const containerAll = document.getElementById('containerall');
const sizeBtn = document.getElementById('sizebtn');
let gridSize = 16;
sizeBtn.addEventListener("click", function(){gridSize = prompt("Enter Desired Grid Size:"); addItems(gridSize)});


addItems(gridSize);

function addItems(size) {
    for (i=1; i<=size; i++) {
        const horizontalRow = document.createElement('div');
        horizontalRow.classList.add('horizontalrow');
        containerAll.appendChild(horizontalRow);
        for (j=1; j<=size; j++) {
            const colorDiv = document.createElement('div');
            colorDiv.classList.add('colordiv');
            horizontalRow.appendChild(colorDiv);
        }
    }
}

const pixels = document.querySelectorAll('.colordiv');
const bgChange = "blackbg";

function changeColor(pxl, bgChange) {
    [].forEach.call(pixels, function(pixel) {
        if (pixel.className === bgChange) {
            pixel.classList.remove(bgChange);
        }
    });
    pxl.classList.add(bgChange);
}

[].forEach.call(pixels, function(pixel) {
    pixel.addEventListener("click", function() {
        changeColor(this, bgChange);
    });
});
