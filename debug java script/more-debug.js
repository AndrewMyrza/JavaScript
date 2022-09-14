// const people = [
//     {id:1, name: 'Andrew', age: 27},
//     {id:2, name: 'Andrew1', age: 22},
//     {id:3, name: 'Andrew2', age: 23},
//     {id:4, name: 'Andrew3', age: 24}
// ]
//
// console.table(people)

console.time('timer')
const item = []
for(let i = 0; i < 1000000; i++) {
    item.push({el: i + 1})
}
console.timeEnd('timer')