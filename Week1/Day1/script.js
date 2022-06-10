// console.log("hello leon")
// console.log(2+3)
// console.log("hello" + " " + "there")
// console.log(true)
// console.log(false)

// console.log("HEllo"[0].toUpperCase())  // does same thing as bellow
// console.log("Hello".charAt(0).toUpperCase())

// for (let index = 0; index < 5; index++) {
//     console.log(Math.floor(Math.random() * 10))

// }

// I use this variable to store the grid as it's built by the functions
let grid = "";

// this loop breaks the grid down into 3 blocks (or however many times I want it in row < 3). 2 vertical bar rows and 1 horizontal per block is the intent
for (let row = 0; row < 3; row++) 
{
	for (let lineIndex = 0; lineIndex < 3; lineIndex++) 
	{
		// += is concatination but faster, it essentially means grid = grid + "\n     |     |     "
		grid += "\n     |     |     ";
	}
	if (row < 2) // this condition will mean that it will stop making a horizontal entry once the last block of verticals has been made
	{
		grid += "\n- - - - - - - - -";
	} 
	else
	{

	}
}
console.log(grid);


const firstName = "mohammed";
const nameWithCapital = firstName.charAt(0).toUpperCase() + firstName.slice(1);
console.log(nameWithCapital);




//console.log("hello".charAt(0).toUpperCase() + "ello World")
