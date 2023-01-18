const goods = {
    1: {
        id: 1,
        name: 'Наименование 1',
        description: 'Описание',
        sizes: [],
        price: 100,
        available: true,
    },
    2: {
        id: 2,
        name: 'Наименование 2',
        description: 'Описание',
        sizes: [],
        price: 100,
        available: true,
    },
    3: {
        id: 3,
        name: 'Наименование 3',
        description: 'Описание',
        sizes: [],
        price: 100,
        available: true,
    },
    4: {
        id: 4,
        name: 'Наименование 4',
        description: 'Описание',
        sizes: [],
        price: 100,
        available: true,
    },
    5: {
        id: 5,
        name: 'Наименование 5',
        description: 'Описание',
        sizes: [],
        price: 100,
        available: true,
    },
}

let basket = [
    {
        good: 2, 
        amount: 2,
    },
    {
        good: 3, 
        amount: 2,
    },
]

function addGood(goodId, amount) {
    basket.push({
        good: goodId,
        amount: amount,})
}

function delGood(index) {
    basket.splice(index, 1)
}

function delAllGood() {
    basket.splice(0, basket.length)
}

function getTotalBasket(basket, goods) {
    totalAmount = 0
    totalSumm = 0
    for(i = 0; i < basket.length; i++) {
        totalAmount = totalAmount + basket[i].amount
        totalSumm = totalSumm + goods[basket[i].good].price * basket[i].amount
    }
    total = {
        totalAmount: totalAmount,
        totalSumm: totalSumm,
    }
    return total
}

addGood(1, 2)
addGood(2, 2)
console.log(basket)

console.log(getTotalBasket(basket, goods))

delGood(basket.length - 1)
console.log(basket)

delAllGood()
console.log(basket)