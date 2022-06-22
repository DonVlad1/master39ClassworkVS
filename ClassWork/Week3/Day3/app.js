const input = document.getElementById("input")
const button = document.getElementById("submit")
const removeButton = document.getElementById("remove")
const keyPress = document.getElementById("keyPress")
const keyCode = document.getElementById("keyCode")
const keyWhich = document.getElementById("keyWhich")
const boomkSound = document.getElementById("boom")
const clapSound = document.getElementById("clap")
const hiHatSound = document.getElementById("hiHat")
const kickound = document.getElementById("kick")
const openHatSound = document.getElementById("openHat")
const rideSound = document.getElementById("ride")
const snareSound = document.getElementById("snare")
const tinkSound = document.getElementById("tink")
const tomSound = document.getElementById("tom")

// boomSound.play()

button.addEventListener("keypress", (event) => {
    keyPress.textContent = event.key
    if (event.key == "q")
    {
        boomkSound.play()
    }

    if (event.key == "w")
    {
        clapSound.play()
    }

    if (event.key == "e")
    {
        hiHatSound.play()
    }

    if (event.key == "r")
    {
        kickound.play()
    }

    if (event.key == "t")
    {
        openHatSound.play()
    }

    if (event.key == "y")
    {
        rideSound.play()
    }

    if (event.key == "u")
    {
        snareSound.play()
    }

    if (event.key == "i")
    {
        tinkSound.play()
    }

    if (event.key == "o")
    {
        tomSound.play()
    }


})


// button.addEventListener("keypress", (event) => {
//     keyPress.textContent = event.key
//     keyCode.textContent = event.code
//     keyWhich.textContent = event.which
// })


