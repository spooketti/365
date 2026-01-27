//general stuff

function convertToCSSCoordinate(x, y,) {

}

function getElementAtCoordinate(x, y) {
    return document.elementsFromPoint(x, y)
}

function intersectsByAABB(element1, element2) {
    rect1 = element1.getBoundingClientRect()
    rect2 = element2.getBoundingClientRect()

    return rect1.right > rect2.left &&
        rect1.left < rect2.right &&
        rect1.bottom > rect2.top &&
        rect1.top < rect2.bottom

}


//maybe ill leave code comments actually maybe not because it is just going to be an easy excuse for having un
//meaningful commits
//but if i were to do this i would have the date 1/8/2026 of writing it as scatterd thoughts across the codebase
//that will probably get annoying to remove
//but this is a lot harder than i thoguht itd be when life gets so full

//can't break the streak ahh commit //(cooked repo)