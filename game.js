document.addEventListener("keydown", function(event) {
    if (event.keyCode == 37) {
        console.log('Left')
    }
    if (event.keyCode == 38) {
        console.log('Up')
    }
    if (event.keyCode == 39) {
        console.log('Right')
    }
    if (event.keyCode == 40) {
        console.log('Down')
    }
})

let grid = [
    [null,null,null,null],
    [null,null,null,null],
    [null,null,null,null],
    [null,2,2,null]
]
console.log(grid)