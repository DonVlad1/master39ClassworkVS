const input = document.getElementById("input")
const button = document.getElementById("submit")
const removeButton = document.getElementById("remove")
const keyCode = document.getElementById("keyCode")


button.addEventListener("click", (event) => {
    keyCode.textContent = event.key
})

// removeButton.addEventListener("click", () => {
//     let listItem = document.querySelector("li:last-child")
//     let list = document.getElementsByTagName("ul")[0]
//     list.removeChild(listItem)
// })



document.addEventListener("click", (event) =>
{
    console.log(event)
    console.log(event.target)
})


list.addEventListener("mouseover", (event) =>
{
    event.target.textContent = event.target.textContent.toUpperCase()
})

list.addEventListener("mouseout", (event) => 
{
    event.target.textContent = event.target.textContent.toLowerCase()
})
