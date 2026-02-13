class Player extends Rigidbody {
    canJump = false
    moveSpeed = 3 //consider if air speed should be the same
    constructor(posX,posY,element)
    {
        super(posX,posY,element)
    }
}

player = new Player(0,300,document.getElementById("player"))

document.addEventListener('tick365', function(e) {
        // console.log("breh")
        // console.log(getPosition())
        //sad
        //did this break down pixelated a
        //very sad
        // player.setPosition(100 * Math.cos(Date.now() / 1000) + 300, 100 * Math.sin(Date.now() / 1000) + 500)
        // console.log(intersectsByAABB(player.element, document.getElementById("TEST")))
        player.applyForces()
    });