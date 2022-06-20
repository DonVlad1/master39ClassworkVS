const image = document.getElementById("cat");
const button = document.getElementById("submit");

button.addEventListener("click", function()
{
    if (image.hidden == false)
    {
        image.hidden = true
    }
    else
    {
        image.hidden = false        
    }
})

