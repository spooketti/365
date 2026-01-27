class Rigidbody {
    posX = 0
    posY = 0
    element = null
    constructor(posX, posY, element) {
        this.posX = posX
        this.posY = posY
        this.element = element
    }


    applyForces() {

    }

    addForce() {

    }

    removeForce() {

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