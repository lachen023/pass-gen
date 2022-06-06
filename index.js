let genBtn = document.getElementById("gen-btn")
let clearBtn = document.getElementById("clear-btn")
let passContainer = document.querySelector(".container")
let charArr = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const passwordLen = 15
let passArr = []


genBtn.addEventListener("click", function() {
    // runs randomPass 4 times 
    for(let i= 0; i < 4; i++) {
        randomPass()
    }
    renderPass()
})

clearBtn.addEventListener("click", function() {
    passContainer.textContent = ""
    passArr = []
})



/*
Generates passwords randomly with a length of 15 
Adds the generated passwords to passArr 
*/
function randomPass() {
    let password = ""
    for(let i = 0; i < passwordLen; i++) {
        let random = Math.floor(Math.random() * charArr.length)
        password += charArr.charAt(random)
    }
    if (passArr.length < 4) {
        passArr.push(password)
        passContainer.textContent = password
    }
    
}

/*
Render the passwords from the passwords generated and added to the array 
*/
function renderPass() {
    let passDOM = ""
    for(let i = 0; i < passArr.length; i++) {
        passDOM += `<input class="gen-pass" type="button" value="${passArr[i]}" ></input>`
    }
    passContainer.innerHTML = passDOM
    
    /* copying the generated passwords to clipboard via button clicks*/
    let inputBtn = document.querySelector(".gen-pass")
    inputBtn.addEventListener("click", function() {
    
        if(navigator.clipboard){
            navigator.clipboard.writeText(document.querySelector(".gen-pass").value)
            .then(() => {
                console.log(`Copied to clipboard! ${document.querySelector(".gen-pass").value}`)
            })
        }
    })
}


