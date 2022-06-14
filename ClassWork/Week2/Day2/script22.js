function dataChecker(string, rank)
{
    if (string == "Codenation" && rank == 1)
    {
        console.log(`${string} is rank ${rank}`)
    }
    else if (string == "Codenation" && rank != 1)
    {
        console.log((`${string} is not rank 1, it's ${rank}`))
    }
    else
    {
        console.log("Invalid input")
    }
}




let string = "Codenation"
let rank = 2

dataChecker(string, rank)