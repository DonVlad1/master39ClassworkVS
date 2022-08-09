const bookPrices = [2.5, 4.5, 3.5, 6.0, 8.0];

const salePrice = bookPrices.map((price) => 
{
    return price * 0.5;
})

console.log(salePrice)