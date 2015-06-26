//display.js
//
//Copyright Lucas Manning
//

class Display {

    constructor(tile_size, canvas) {
        this.tile_size = tile_size
        this.canvas = canvas 
        this.ctx = this.canvas.getContext('2d')
        this.ctx.fillStyle = '#000000'
    }

    render(maze) {
        maze.tiles.forEach(tile => {
            if (tile.type === 1) {
               this.ctx.fillRect(tile.x*10, tile.y*10, 10, 10) 
            } else if (tile.type === 2) {
                this.ctx.fillStyle = '#00FF00'
                this.ctx.fillRect(tile.x*10, tile.y*10, 10, 10)
            } else if (tile.type === 3) {
                this.ctx.fillStyle = '#FF0000'
                this.ctx.fillRect(tile.x*10, tile.y*10, 10, 10)
            } else if (tile.type === 4) {
                this.ctx.fillStyle = '#0000FF'
                this.ctx.fillRect(tile.x*10, tile.y*10, 10, 10)
            } else if (tile.type === 5) {
                this.ctx.fillStyle = '#FFA500'
                this.ctx.fillRect(tile.x*10, tile.y*10, 10, 10)
            }
            this.ctx.fillStyle = '#000000'
        })
    }

    animate(maze) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.render(maze)
        window.requestAnimationFrame(() => {
            this.animate(maze)
        })     
    }
}

export default Display
