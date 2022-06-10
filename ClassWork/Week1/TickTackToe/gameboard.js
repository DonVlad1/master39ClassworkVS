let player1 = "O";
let player2 = "X";
let noPlayer = " ";
let gameBoardPlay = [player1, player2, noPlayer]; // this is the array I will be using to decide witch players gets what position on the board
let grid = "";
let randomNumber1 = "0";
let randomNumber2 = "0";
let randomNumber3 = "0";

for (let row = 0; row < 3; row++) {
	for (let lineIndex = 0; lineIndex < 3; lineIndex++) 
	{
		// += is concatination but faster, it essentially means grid = grid + "\n     |     |     "

		if (lineIndex % 2 == 1) {
			// this statement is used to position the move in the correct place on the grid
			randomNumber1 = Math.round(Math.random() * 2);
			randomNumber2 = Math.round(Math.random() * 2);
			randomNumber3 = Math.round(Math.random() * 2);

			// decides where the move position is and randmly decides which player puts a move on there
			grid += `\n  ${gameBoardPlay[randomNumber1]}  |  ${gameBoardPlay[randomNumber2]}  |  ${gameBoardPlay[randomNumber3]}`;
		} 
		else 
		{
			grid += `\n     |     |     `;
		}
	}
	if (row < 2) 
	{
		// this condition will mean that it will stop making a horizontal entry once the last block of verticals has been made
		grid += "\n- - - - - - - - -";
	} 
	else 
	{

	}
}
console.log(grid);