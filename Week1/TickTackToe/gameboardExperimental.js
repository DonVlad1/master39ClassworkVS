function makeGrid(gameBoardPlayPositions)
{
	const maxBlocks = 3;
	const maxRows = 3;
	let playGrid = "";

	for (let blockIndex = 0; blockIndex < maxBlocks; blockIndex++) 
	{
		for (let rowIndex = 0; rowIndex < maxRows; rowIndex++) 
		{
			if (rowIndex % 2 == 1) 
				playGrid += `\n  ${gameBoardPlayPositions[blockIndex*3]}  |  ${gameBoardPlayPositions[blockIndex*3+1]}  |  ${gameBoardPlayPositions[blockIndex*3+2]}  `;
			else
				playGrid += `\n     |     |     `;
		}
		if (blockIndex < 2) 
			playGrid += "\n- - - - - - - - -";
	}

	return playGrid
}

function playGame()
{
	const maxTurns = 9;
	const options = ["X","O"];
	let gameBoardPlayPositions = [];

	for (let turnIndex = 0; turnIndex < maxTurns; turnIndex++) 
	{
		const randomNumber = Math.round(Math.random());
		gameBoardPlayPositions.push(options[randomNumber]);
	}

	return makeGrid(gameBoardPlayPositions)
}

let result = playGame();
console.log(result);