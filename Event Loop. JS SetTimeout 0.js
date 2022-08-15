console.log('Start')

console.log('Start 2')

function timeout2sec() {
    console.log('timeout2sec')
}

window.setTimeout(function() {
    console.log('Inside timeout, after 2000 seconds')
}, 0)

window.setTimeout(timeout2sec, 0)

console.log('End')
