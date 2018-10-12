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
    addCell()
    console.table(grid)
})

let grid = [
    [null,null,null,null],
    [null,null,null,null],
    [null,null,null,null],
    [null,2,2,null]
]

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
                    } 
                    else if (grid[i][coll] == grid[i][coll - 1]) {
                        //if cell to left matches
                        grid[i][coll - 1] *= 2;
                        grid[i][coll] = null;
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
    console.log('Up')
}

function moveRight(){
    console.log('Right')
}

function moveDown(){
    console.log('Down')
}

console.table(grid)