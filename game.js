document.addEventListener("keypress", function(event) {
    if (event.keyCode == 97) {
        console.log('Left')
    }
    if (event.keyCode == 119) {
        console.log('Up')
    }
    if (event.keyCode == 100) {
        console.log('Right')
    }
    if (event.keyCode == 115) {
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