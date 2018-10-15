document.addEventListener("keydown", function(event) {
    if (event.keyCode == 37) {
        moveLeft()
    }
    else if (event.keyCode == 38) {
        moveUp()
    }
    else if (event.keyCode == 39) {
        moveRight()
    }
    else if (event.keyCode == 40) {
        moveDown();
    }
    else{
        return;
    }
    if(tileMoved){
        addCell()
    }
    tileMoved = false;
    drawGrid()
    console.table(grid)
})

let grid = [
    [null,null,null,null],
    [null,null,null,null],
    [null,null,null,null],
    [null,2,2,null]
]
let tileMoved = true;

function addCell(){
    while(true){
        var row = Math.floor(Math.random() * 4);
        var col = Math.floor(Math.random() * 4);
        if(!grid[row][col]){
            var val = 2 * Math.ceil(Math.random() * 2);
            grid[row][col] = val;
            console.table(grid);
            return;
        }
    }
}

function moveLeft(){
    var i,j,coll;
    for(i=0;i< 4;i++){
        for(j=0;j<4;j++){
            if(grid[i][j]){
                coll = j;
                while (coll - 1 >= 0) {
                    if (!grid[i][coll - 1]) {
                        //If cell to left is empty
                        grid[i][coll - 1] = grid[i][coll];
                        grid[i][coll] = null;
                        coll--;
                        tileMoved = true;
                    } 
                    else if (grid[i][coll] == grid[i][coll - 1]) {
                        //if cell to left matches
                        grid[i][coll - 1] *= 2;
                        grid[i][coll] = null;
                        tileMoved = true;
                        break;
                    } 
                    else { break; }
                }
            }
        }
    }
    console.log('Left')
}

function moveUp(){
    var i, j, row;
    for(j = 0; j < 4; j++) {
        for(i = 1; i < 4; i++) {
        if(grid[i][j]) {
            row = i;
            while (row > 0) {
            if(!grid[row - 1][j]) {
                grid[row - 1][j] = grid[row][j];
                grid[row][j] = null;
                row--;
                tileMoved = true;
            } else if (grid[row][j] == grid[row - 1][j]) {
                grid[row - 1][j] *= 2;
                grid[row][j] = null;
                tileMoved = true;
                break;
            } else {
                break; 
            }
            }
        }
        }
    }
    console.log('Up')
}

function moveRight(){
    var i, j;
    var coll;
    for(i = 0; i < 4; i++) {
        for(j = 4 - 2; j >= 0; j--) {
        if(grid[i][j]) {
            coll = j;
            while (coll + 1 < 4) {
            if (!grid[i][coll + 1]) {
                grid[i][coll + 1] = grid[i][coll];
                grid[i][coll] = null;
                coll++;
                tileMoved = true;
            } else if (grid[i][coll] == grid[i][coll + 1]) {
                grid[i][coll + 1] *= 2;
                grid[i][coll] = null;
                tileMoved = true;
                break;
            } else {
                break;
            }
            }
        }
        }
    }
    console.log('Right')
}

function moveDown(){
    var i, j, row;
    for(j = 0; j < 4; j++) {
        for(i = 4 - 2; i >= 0; i--) {
        if(grid[i][j]) {
            row = i;
            while (row + 1 < 4) {
            if (!grid[row + 1][j]) {
                grid[row + 1][j] = grid[row][j];
                grid[row][j] = null;
                row++;
                tileMoved = true;
            } else if (grid[row][j] == grid[row + 1][j]) {
                grid[row + 1][j] *= 2;
                grid[row][j] = null;
                tileMoved = true;
                break;
            } else {
                break; 
            }
            }
        }
        }
    }
    console.log('Down')
}

function drawGrid(){
    var i,j;
    for(i=0;i< 4;i++){
        for(j=0;j<4;j++){
            var cell = document.querySelector(`.grid-item[row='${i}'][col='${j}']`)
            var value = grid[i][j];
            cell.innerHTML = value;
            cell.setAttribute("value",value)
            
        }
    }
}
console.table(grid)
drawGrid();