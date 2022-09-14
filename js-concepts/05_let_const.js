// // Let
// let a = 'Variable a'
// let b = 'Variable b'
// {
//     a = 'New Variable A'
//     let b = 'Local Variable B'
//     console.log('Scope A', a)
//     console.log('Scope B', b)
//     console.log('Scope C', c)
//     let c = 'Something'
// }
// console.log('A:', a)
// console.log('B:', b)

//Const
const PORT = 8080
const array = ['Javascript', 'is', 'Awesome']
array.push('!')
array[0] = 'JS'
console.log(array)

const obj = {}
obj.name = 'Andrew'
obj.age = 27

console.log(obj)

delete obj.name

console.log(obj)
