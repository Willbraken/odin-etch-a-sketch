//make flexbox for horizontal rows
//make flexbox containing horizontal flexbox rows

const containerAll = $('div.containerall');
const horizontalRow = document.createElement('div');
horizontalRow.classList.add('horizontalrow');



addItems(16);

function addItems(size) {
    for (i=1; i<=size; i++) {
        containerAll.append(horizontalRow);
    }
}

