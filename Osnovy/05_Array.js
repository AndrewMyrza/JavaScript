const cars = ['Мазда', 'Форд', 'БМВ', 'Мерседес']
// const people = [
//     {name:'Andrew', Budget: 4200},
//     {name:'Elena', Budget: 3500},
//     {name:'Victoria', Budget: 1700}
// ]
const fib = [1, 1, 2, 3, 5, 8, 13]

//Function
function addItemToEnd() {
    
}

// Method
// cars.push('Рено')
// cars.unshift('Волга')

// const firstCar = cars.shift()
// const lastCar = cars.pop()
// console.log(firstCar)
// console.log(lastCar)
// console.log(cars)

// console.log(cars.reverse())
// console.log(cars)
// const index = cars.indexOf('БМВ')
// cars[index] = 'Porsche'
// console.log(cars)
// let findedPerson
// for (const person of people) {
//     if(person.Budget === 3500) {
//         findedPerson = person
//     }
// }

// console.log(findedPerson)

// const index = people.findIndex(function(person) {
//     return person.Budget === 3500
// })
// const person = people.find(function(person) {
//     return person.Budget === 3500
// })
// const person = people.find(person => person.Budget === 3500)
// console.log(person)

// console.log(cars.includes('Мазда!'));

// const upperCaseCars = cars.map(car => {
//     return car.toUpperCase()
// })

const pow2 = num => num ** 2
// const sqrt = num => Math.sqrt(num)

// const pow2Fib = fib.map(pow2).map(Math.sqrt)
// console.log(pow2Fib)
// const pow2Fib = fib.map(pow2)
// const filteredNumbers = pow2Fib.filter(num => num > 20)
// console.log(pow2Fib)
// console.log(filteredNumbers)

// Задача 1
// const text = 'Привет, мы изучаем JavaScript'
// const reverseText = text.split('').reverse().join('')
// console.log(reverseText)

const people = [
    {name:'Andrew', Budget: 4200},
    {name:'Elena', Budget: 3500},
    {name:'Victoria', Budget: 1700}
]

const allBudget = people
.filter(person => person.Budget > 2000)
.reduce((acc, person) => {
    acc += person.Budget
    return acc
}, 0)

console.log(allBudget)


// const displayItems = allItems.filter(item => item.name.contains('phone'))
// const displayItems = allItems.filter(item => item.name.indeOf('phone') !== -1)

