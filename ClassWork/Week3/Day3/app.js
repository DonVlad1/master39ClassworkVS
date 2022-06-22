const input = document.getElementById("input")
const button = document.getElementById("submit")
const removeButton = document.getElementById("remove")
const keyPress = document.getElementById("keyPress")
const keyCode = document.getElementById("keyCode")
const keyWhich = document.getElementById("keyWhich")
const kickSound = document.getElementById("kick")

// boomSound.play()

button.addEventListener("keypress", (event) => {
    keyPress.textContent = event.key
    if (event.key == "w")
    {
        kickSound.play()
    }


})


// button.addEventListener("keypress", (event) => {
//     keyPress.textContent = event.key
//     keyCode.textContent = event.code
//     keyWhich.textContent = event.which
// })


