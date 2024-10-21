//dommanipulation

//querySelector()
const title = document.querySelector('#Main-heading')
title.style.color = 'red'
console.log(title)


//create elements
const ul = document.querySelector('ul')
//adding elements
const li = document.createElement('li')


//modify text contnent
const firstListItem = document.querySelector('Main-heading')
console.log(firstListItem.textContent)
console.log(firstListItem.innerHTML)
console.log(firstListItem.innerText)



ul.append(li)

