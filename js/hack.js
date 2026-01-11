let testbox = document.getElementById("TEST")

document.addEventListener("click",function(e)
{
    testbox.querySelector(".faceContent").style.display = "none"
    testbox.querySelector(".codeContent").innerText = testbox.querySelector(".faceContent").outerHTML
    hljs.highlightAll()
})