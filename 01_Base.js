//Переменные
//cameCase
// const firstName = 'Andrew'
// // const age = 27 //Number
// const isProgrammer = true //Boolean

// const _ = 'private'
// const $ = 'some value'

//const if = 'mkef' //err
// const withNum5 = '5'
// const 5withNum = '5' //err

// 2 Мутирование
// console.log('Имя человека: ' + firstName +', а возраст человека: ' + age)
// alert('Имя человека: ' + firstName +', а возраст человека: ' + age)

// const lastName = prompt('Введите Фамилию')
// alert(firstName + ' ' + lastName)

// 3 Операторы
// let currentYear = 2022
// const birthYear = 1995

// // const age = currentYear - birthYear

// const a= 10
// const b= 5

// let c = 32
// c = c + a
// c = c - a
// c = c * a
// c = c / a
// c += a
// c -= a
// c *= a
// c /= a

// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)
// console.log(++currentYear)
// console.log(--currentYear)
// console.log(c)

// 4 Типы Данных
// const isProgrammer = true
// const name = 'Andrew'
// const age = 27
// let x
// null
// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)
// console.log(null)

// 5 Приоритет операторов
// const fullAge = 27
// const birthYear = 1995
// const currentYear = 2022

// // > < >= <=
// const isFullAge = currentYear - birthYear >= fullAge //27>=28=>true
// console.log(isFullAge)

// 6 Условные операторы
// const courseStatus = 'fail' // ready, fail, pending

// if (courseStatus === 'ready') {
//     console.log('Курс уже готов и его можно проходить')
// } else if (courseStatus === 'pending') {
//     console.log('Курc пока находится в процессе разработки')
// } else{
//     console.log('Курc не получился')
// }

// const isReady = true

// if (isReady) {
//     console.log('Все готово!')
// } else{
//     console.log('Все не готово!') 
// }

// Тернарное выражение
// isReady? console.log('Все готово!') : console.log('Все не готово!')

// const num1 = 42 //number
// const num2 = '42' //string

// console.log(num1 === num2)

// 7 Булевая логика
//https://cgi.cse.unsw.edu.au/~cs2041/doc/MDN_javascript_reference/Web/JavaScript/Reference/Operators/Logical_Operators.html

// 8 Функции

// function calculateAge(year) {
//     return 2022 - year   
// }

// console.log(calculateAge(1995))
// console.log(calculateAge(1990))
// console.log(calculateAge(1992))

// function logInfoAbout(name, year) {
//     const age = calculateAge(year)

//     if (age > 0) {
//         console.log('Человек по имени ' + name + ' Сейчас имеет возраст ' + age) 
//     } else{
//         console.log('Вообще-то это уже будущее!') 
//     }
  
// }

// logInfoAbout('Андрей', 1995)
// logInfoAbout('Елена', 1993)
// logInfoAbout('Елена', 2022)

//9 Массивы
// const cars = ['Мазда', 'Мерседес','Форд']
//const cars = new Array ('Мазда', 'Мерседес','Форд')
// console.log(cars.length)
// console.log(cars[1])
// console.log(cars[0])
// console.log(cars[2])

// cars[0] = 'Porshe'
// cars[cars.length] = 'Mazda'
// console.log(cars)

// 10 Циклы
// const cars = ['Мазда', 'Мерседес', 'Форд', 'Porshe']
// for (let i = 0; i < cars.length; i++) {
//     const car = cars[i]
// console.log(car)    
// }

// for (let car of cars) {
//  console.log(car)       
// }

// 11 Объекты
const person = {
    firstName: 'Andrew',
    lastName: 'Myrza',
    year: 1995,
    languages: ['Ru','En','De'],
    hasWife: false,
    greet: function(){
        console.log('greet from person')
    }
}
console.log(person.firstName)
console.log(person['lastName'])
const key = 'year'
console.log(person[key])
person.hasWife = true
person.isProgrammer = true
console.log(person)
person.greet()





