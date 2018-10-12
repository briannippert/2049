document.addEventListener("keydown", function(event) {
    if (event.keyCode == 37) {
        moveLeft()
    }
    if (event.keyCode == 38) {
        moveUp()
    }
    if (event.keyCode == 39) {
        moveRight()
    }
    if (event.keyCode == 40) {
        moveDown();
    }
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
    grid.forEach(function(row){
        for (col in row){
            if(!row[col + 1] || col == 3){
                continue;
            }
            if(row[col])
            console.log(row[col])
            
        }
    })
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