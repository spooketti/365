class Rigidbody {
    posX = 0
    posY = -200
    dX = 0
    dY = 0 //
    velX = 0
    velY = 0
    element = null
    mass = 1 //kg
    forces = {
        "sampleForce": [0, 0] //x,y both in terms of N
    }
    impulses =
        {
            "sampleImplse": [0.05, -0.05, 0] //this is just a force that is only applied for 1 frame my spine hurts really bad
        }
    constructor(posX, posY, element) {
        this.posX = posX
        this.posY = posY
        this.element = element
        this.setForce("gravity", 0, 0.001) //calc this manually
        this.setImpulse("skibidi", 1, 0)
    }

    applyForces() {
        let netF = this.getNetForce()
        this.clearImpulses()
        console.log(netF)
        let netX = netF[0]
        let netY = netF[1]
        netX /= this.mass
        netY /= this.mass
        this.velX += netX * ((1000) / fps) //vf=vi+at
        this.velY += netY * ((1000) / fps)
        this.dX = this.posX
        this.dY = this.posY
        this.posX += (this.velX) * ((1000) / fps) //v=x/t, x=(v*t)
        this.posY += (this.velY) * ((1000) / fps)
        this.setPosition(this.posX, this.posY)
    }

    setForce(forceName, Nx, Ny) {
        this.forces[forceName] = [Nx, Ny]
    }

    setImpulse(forceName, Nx, Ny) {

    }

    clearImpulses() {
        this.impulses = {}
    }

    removeForce(forceName) {
        delete forces[forceName]
    }

    getPosition() {
        return [this.posX, this.posY]
    }

    getVelocity() {
        return [this.velX, this.velY]
    }

    getForces() {
        return this.forces
    }

    getNetForce() {
        let netX = 0
        let netY = 0
        for (const [forceName, N] of Object.entries(this.forces)) {
            netX += N[0]
            netY += N[1]
        }
        for (const [ipulseName, N] of Object.entries(this.impulses)) {
            netX += N[0]
            netY += N[1]
        }
        return [netX, netY]
    }

    setPosition(x, y) {
        this.posX = x
        this.posY = y
        this.element.style.left = this.posX
        this.element.style.top = this.posY
    }
}