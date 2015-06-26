//main.js
//
//Copyright Lucas Manning
//

import Maze from './maze.js'
import Display from './display.js'

let canvas = document.getElementById("main")
let button = document.getElementById("solve")
const tile_size = 10
const delay = 20

let myDisplay = new Display(tile_size, canvas)

let myMaze = new Maze(tile_size, canvas.width, canvas.height, myDisplay, delay)

myMaze.gen_random()
myDisplay.render(myMaze)

button.addEventListener("click", () => {
    console.log("solving...")
    myMaze.a_star_search()
})

