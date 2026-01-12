let testbox = document.getElementById("TEST")

document.addEventListener("dblclick",function(e)
{
    testbox.querySelector(".faceContent").style.display = "none"
    testbox.querySelector(".codeContent").querySelector("code").textContent = testbox.querySelector(".faceContent").outerHTML
    testbox.querySelector(".codeInput").value = testbox.querySelector(".faceContent").outerHTML
    hljs.highlightAll()
})

document.addEventListener("input",function(e){
    let codebox = e.target.parentElement.querySelector(".codeContent").querySelector("code")
    try{
    delete codebox.dataset.highlighted
    }
    catch{}
    codebox.textContent = testbox.querySelector(".codeInput").value
    hljs.highlightElement(codebox)
    console.log(testbox.querySelector(".codeInput").value)
})