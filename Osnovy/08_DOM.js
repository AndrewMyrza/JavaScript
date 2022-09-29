const heading = document.getElementById('Hello')
// const heading2 = document.getElementsByTagName('h2') [0]
// const heading2 = document.getElementsByClassName('h2-class') [0]
// const heading2 = document.querySelector('.h2-class')
// const heading2 = document.querySelector('#sub-hello') // Всегда 1 элемент 
const heading2 = document.querySelector('h2')

// console.dir(heading2)

// const heading3 = heading2.nextElementSibling
const h2List = document.querySelectorAll('h2')
// console.log(h2List)
const heading3 = h2List[h2List.length - 1]
// console.log(heading3)

setTimeout(() => {
    addStylesTo(heading, 'JavaScript')
}, 1500)

const link = heading2.querySelector('a')

link.addEventListener( 'click', (event) => {
    event.preventDefault()
    console.log('Click on link', event.target.getAttribute('href'))
    const url = event.target.getAttribute('href')

    window.location = url
})

setTimeout(() => {
    addStylesTo(link, 'Практикуйся', 'blue')
}, 3000)

setTimeout(() => {
    addStylesTo(heading3, 'И все получится!', 'yellow' , '2rem')
}, 4500)



function addStylesTo(node, text, color = 'red', fontSize) {
    node.textContent = text
    node.style.color = color
    node.style.textAlign = 'Center'
    node.style.backgroundColor = 'green'
    node.style.padding = '2rem'
    node.style.display = 'block'
    node.style.width = '100%'


    // falsy: '', undefined, null, 0, false
    if(fontSize) {
        node.style.fontSize = fontSize
    }
}

//https://developer.mozilla.org/ru/docs/Web/Events

heading.onclick = () => {
    if(heading.style.color === 'red') {
        heading.style.color = '#000'
        heading.style.backgroundColor = '#fff'
    } else {
        heading.style.color = 'red'
        heading.style.backgroundColor = 'green'
    }
}



heading3.addEventListener('dblclick', () => {
    if(heading3.style.color === 'yellow') {
        heading3.style.color = '#000'
        heading3.style.backgroundColor = '#fff'
    } else {
        heading3.style.color = 'yellow'
        heading3.style.backgroundColor = 'green'
    }
})

