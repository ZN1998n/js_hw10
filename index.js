let arr = ['amir', 'zokir', 'ravshan', 'jamshud', 'alex']

let evenNames = []
let oddNames = []

arr.forEach((names) => {
    if (names.length % 2 === 0) {
        evenNames.push(names)
    } else {
        oddNames.push(names)
    }
})

if (evenNames > oddNames) {
    console.log("Четных имен больше")
} else if (evenNames < oddNames) {
    console.log("Нечетных имен больше")
}

console.log(
    evenNames, oddNames
)



let arrTwo = [
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut au`tem",
        "completed": false
    },
    {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
    },
    {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
    },
    {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",

        "completed":
            true
    },
    {
        "userId": 1,
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
    },
    {
        "userId": 1,
        "id": 6,
        "title": "qui ullam ratione quibusdam voluptatem quia omnis",
        "completed": false
    },
    {
        "userId": 1,
        "id": 7,
        "title": "illo expedita consequatur quia in",
        "completed": false
    },
    {
        "userId": 1,
        "id": 8,
        "title": "quo adipisci enim quam ut ab",
        "completed": true
    },
    {
        "userId": 1,

        "id": 9,
        "title": "molestiae perspiciatis ipsa",
        "completed": false
    },
    {
        "userId": 1,
        "id": 10,
        "title": "illo est ratione doloremque quia maiores aut",
        "completed": true
    },
]
let a = {
    count: 0,
    arr: []
}

let b = {
    count: 0,
    arr: []
}

arrTwo.forEach((bolean) => {
    if (bolean.completed === true) {
        a.arr.push(bolean)
    } else if (bolean.completed === false) {
        b.arr.push(bolean)
    }
})

console.log(
    a, b
)