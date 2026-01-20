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