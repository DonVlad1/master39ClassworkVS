// const heading = document.querySelectorAll("#heading");
// const list = document.querySelectorAll(".list-parent");
// const listItems = document.querySelectorAll("li");
// const green = document.querySelectorAll(".green");

// console.log(heading);
// console.log(list);
// console.log(listItems);
// console.log(green);


const items = document.querySelectorAll("li")
const colours = ["blue", "green", "yellow", "purple", "brown", "grey", "orange"]

for (let index = 0; index < items.length; index++) {
    items[index].style.color = colours[Math.round(Math.random()*10)]
}
