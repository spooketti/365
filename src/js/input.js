let horizontalInput = 0;
let verticalInput = 0;

let heldKeyMap = {};
//TODO: rebindable keys by extension
//i guess thats doable with just another mapx`

const inputType = {
    Keyboard:'Keyboard',
    Controller:'Controller' //i dont know exactly how i'll do this with smth like play station or if i even want to
}

function changeMap(e, isHeld)
{
    heldKeyMap[e.key] = isHeld
}

window.addEventListener("keydown", function (e) {
    changeMap(e,true)
})

window.addEventListener("keyup", function (e) {
    changeMap(e,false)
})

//this is not necessary for something for the joystick since its physically impossible to do on a joystick
//on a keyboard where holding a and d at the same time is possible you can only pick one joystick
//furthermore the joystick (can be roughly modeled) as a circle of input
//the wasd inputs would thhen allow for something where because w and a can be held at the same time
//the triangle would be like
/*
hypot: sqrt(2)
     /    |
    /     |
   /      |
  /       |  1
 /        |
/         |
__________|
    1

    that triangle in size was probably unnecessary

*/
function normalizeMovementInput(input)
{
    let calcVerticalInput = 0;
    let calcHorizontalInput = 0;
    if(input == inputType.Controller)
    {
        return;
    }

    if(heldKeyMap['ArrowUp'])
    {
       calcVerticalInput++;
    }

    if(heldKeyMap['ArrowDown'])
    {
        calcVerticalInput--;
    }

    if(heldKeyMap["ArrowRight"])
    {
        calcHorizontalInput++;
    }

    if(heldKeyMap["ArrowLeft"])
    {
        calcHorizontalInput--;
    }

    let inputHypot = Math.hypot(calcHorizontalInput,calcVerticalInput)
    if(inputHypot > 1)
    {
        let normalMultiplier = (1/inputHypot)
        calcHorizontalInput *= normalMultiplier;
        calcVerticalInput *= normalMultiplier;
    }
    horizontalInput = calcHorizontalInput;
    verticalInput = calcVerticalInput;
    console.log("vertical: " + verticalInput)
    console.log("horizontal: " + horizontalInput)
}

document.addEventListener('tick365', function(e) {
    normalizeMovementInput(inputType.Keyboard)
});

