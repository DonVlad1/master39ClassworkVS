const input = document.getElementById("input");
const button = document.getElementById("submit");

button.addEventListener("click", function()
{
    let listItem = document.createElement("li")
    listItem.textContent = input.value
    list.appendChild(listItem)
})



// const input = document.getElementById("input")
// const button = document.getElementById("submit")

// button.addEventListener("click", () => {
//     let listItem = document.createElement("li")
//     listItem.textContent = input.value
//     list.appendChild(listItem)
// })
