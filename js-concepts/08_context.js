const person = {
    surname: 'Stark',
    knows: function (what, name) {
        console.log(`Ты ${what} знаешь, ${name} ${this.surname}`)
    }
}

const john = {surname: 'Snou'}

// person.knows('все', 'Bran')
// person.knows.call(john, 'ничего не', 'Jhon')
// person.knows.apply(john, ['ничего не', 'Jhon'])
// person.knows.call(john, ...['ничего не', 'Jhon'])
// const bound = person.knows.bind(john, 'ничего не', 'Jhon')
// bound()

//==================

// function Person(name, age) {
//     this.name = name
//     this.age = age
//
//     console.log(this)
// }
//
// const elena = new Person('Andrew', 27)

// // ================ явный
// function logThis() {
//     console.log(this)
// }
//
// const obj = {num: 42}
// logThis.apply(obj)
// logThis.call(obj)
// logThis.bind(obj)()
//
// //================ неявный
// const animal = {
//     legs: 4,
//     logThis: function() {
//         console.log(this)
//     }
// }
//
// animal.logThis()

function Cat(color) {
    this.color = color
    console.log('This', this)
    ;( () => console.log('Arrow this', this))()
}

new Cat('red')