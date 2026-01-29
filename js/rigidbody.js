class Rigidbody {
    posX = 0
    posY = 0
    velX = 0
    velY = 0
    element = null
    mass = 1 //kg
    forces = {
        "sampleForce": [0, 0] //x,y both in terms of N
    }
    constructor(posX, posY, element) {
        this.posX = posX
        this.posY = posY
        this.element = element
        this.setForce("gravity",0,0.001) //calc this manually
    }


    applyForces() {
        let netX = 0
        let netY = 0
        for (const [forceName, N] of Object.entries(this.forces)) {
            netX += N[0]
            netY += N[1]
        }
        netX /= this.mass
        netY /= this.mass
        this.velX += netX*((1000)/fps) //vf=vi+at
        this.velY += netY*((1000)/fps)
        this.posX += (this.velX)*((1000)/fps) //v=x/t, x=(v*t)
        this.posY += (this.velY)*((1000)/fps)
        this.setPosition(this.posX,this.posY)
    }

    setForce(forceName, Nx, Ny) {
        this.forces[forceName] = [Nx, Ny]
    }

    removeForce(forceName) {
        delete forces[forceName]
    }

    getPosition() {
        return [posX, posY]
    }

    setPosition(x, y) {
        this.posX = x
        this.posY = y
        this.element.style.left = this.posX
        this.element.style.top = this.posY
    }
}