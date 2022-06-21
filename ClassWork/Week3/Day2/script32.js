let isTriangle = (a, b, c) => 
{
    if ((a + b > c) && (a + c > b) && (b + c > a))
    {
        console.log(`Triangle with sides ${a}, ${b}, ${c} can form a triangle`)
    }
    else if ((a == 0) || (b == 0) || (c == 0))
    {
        console.log(`Triangle has one or more sides with size of 0, please input values above 0`)
    }
    else
    {
        console.log(`Triangle with sides ${a}, ${b}, ${c} can't form a triangle`)
    }
}
    
isTriangle(1, 2, 2) // will return true
isTriangle(7, 2, 2) // will return false