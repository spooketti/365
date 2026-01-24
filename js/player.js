let canJump = false
let posX = 0
let posY = 0
let moveSpeed = 3 //consider if air speed should be the same

function applyForces()
{

}

function addForce()
{

}

function removeForce()
{
    
}

function getPosition()
{
    return [posX,posY]
}

function setPosition(x,y)
{
    posX = x
    posY = y
    document.getElementById("player").style.left = posX
    document.getElementById("player").style.top = posY
}

document.addEventListener('tick365', function(e) {
    // console.log("breh")
    // console.log(getPosition())
    //did this break down
    setPosition(100*Math.cos(Date.now()/1000)+300,100*Math.sin(Date.now()/1000)+500)
});
