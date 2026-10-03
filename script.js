const toggle  = document.querySelector(".toggle")
const screenValue = document.querySelector(".screen-value")
const btns = Array.from(document.querySelectorAll("button"))
const body = document.querySelector("body")
const main = document.querySelector("main")
console.log(btns)

main.addEventListener("dblclick",(e)=>{
    e.preventDefault()
})

toggle.addEventListener("click",()=>{
    if( body.classList.contains("normal")){
        body.classList.remove("normal")
        body.classList.add("dark")
    }
    else if(body.classList.contains("dark")){
        body.classList.remove("dark")
    }
    else{
        body.classList.add("normal")
    }

})

btns.map((btn)=>{
    btn.addEventListener("click",()=>{
        if(btn.textContent.trim() === "reset"){
            screenValue.textContent = "0"
        }
        else if(btn.textContent.trim().toLowerCase() === "del"){
            screenValue.textContent = screenValue.textContent.slice(0,-1) || "0"
        }
        else if(btn.textContent.trim() === "="){
            screenValue.textContent = eval(screenValue.textContent)
        }
        else if(screenValue.textContent.trim() ===  "0"){

            screenValue.textContent = btn.textContent
        }
        else{
            screenValue.textContent += btn.textContent
        }
    })
})