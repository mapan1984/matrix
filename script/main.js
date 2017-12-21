class Matrix {

    constructor() {
        this.streams = []
        this.charSize = Char.size
        this.canvas = document.querySelector('#matrix')
        this.context = this.canvas.getContext('2d')
        this.height = window.innerHeight
        this.width = window.innerWidth
        this.setup()
    }

    setup() {
        this.context.fillStyle = "green"
        this.context.strokeStyle = "blue"
        this.context.font = this.charSize + 'px serif'
        for (let i = 0; i <= this.width / this.charSize; i++) {
            let x = i * this.charSize
            let stream = new Stream(x);
            this.streams.push(stream);
        }
    }

    clean() {
        this.context.clearRect(0, 0, this.height, this.width)
    }

    draw() {
        for (let stream of this.streams) {
            stream.render(this.context)
        }
    }

    update() {
        this.clean()
        this.draw()
        for (let stream of this.streams) {
            stream.update()
        }
    }

    start() {
        this.update()
        setTimeout(this.start.bind(this), 1000/this.fps)
    }
}

Matrix.fps = 1

let matrix = new Matrix()
matrix.start()
