const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (acc, curr) {
    return acc + curr
}, 0)
const myTotal2 = myNums.reduce((acc, curr) => {
    return acc + curr
}, 0)
const myTotal3 = myNums.reduce((acc, curr) => (acc + curr)
, 0)

// console.log(myTotal3);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const cartTotal = shoppingCart.reduce( (acc, item) => {
    return acc + item.price 
}, 0)

console.log(cartTotal);