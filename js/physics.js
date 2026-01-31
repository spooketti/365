let g = 9.8
let meterToPixelConversion = (1/1000) //1 meter / amount of pixels, this value needs to be tuned

function raycast(originX,originY,dir,magnitude)
{
    tis
}

//just going to cover the daily hhere but theres a lot of ways to handle collision

//for now nothing's expected to rotate, that sounds like a question for another day

//look into minkowski sums but i dont think they'd wrok as the players position function is never going to be
//easy enough to model with just functions

//actually maybe it's possible, take the position they were just at one frame ago which will be referred to for now as
//df and f will be the current frame

//draw a stright line between df and f's positions and then you have a straight line ideally
//then do the minkowski sum or wtv
//or a possible idea, represent the line as a bounding box
//to do a lump check to see if anything was in the lines bounding box
//if it is, do some precise math stuff
//perhaps order would be

//check one frame in the future's position is intersecting any objects
//albiet this fails to consider extremeley high velocities where one frame later is miles away
//then check the line between df and F (or actually df could be the future frame given how applyForces works)
//and do the intersection math