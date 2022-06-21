const input = document.getElementById("input")
const button = document.getElementById("submit")
const removeButton = document.getElementById("remove")

button.addEventListener("click", () => {
    let listItem = document.createElement("li")
    let list = document.getElementsByTagName("ul")[0]
    listItem.textContent = input.value
    list.appendChild(listItem)
})

removeButton.addEventListener("click", () => {
    let listItem = document.querySelector("li:last-child")
    let list = document.getElementsByTagName("ul")[0]
    list.removeChild(listItem)
})