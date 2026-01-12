let testbox = document.getElementById("TEST")

document.addEventListener("dblclick",function(e)
{
    testbox.querySelector(".faceContent").style.display = "none"
    testbox.querySelector(".codeContent").querySelector("code").innerText = testbox.querySelector(".faceContent").outerHTML
    hljs.highlightAll()
})

document.addEventListener("input",function(e){
    try{
    delete e.target.dataset.highlighted
    }
    catch{}
})