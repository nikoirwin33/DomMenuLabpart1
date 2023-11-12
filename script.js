// Menu data structure
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '/catalog'},
  {text: 'orders', href: '/orders'},
  {text: 'account', href: '/account'},
];

// TASK 1.0 - Select and cache the <main>element in a variable named mainEl
/////////////////////////////////////////////////////

const mainEl = document.querySelector('#main')

// TASK 1.1 - Set the background color of mainElto the value stored in the --main-bgCSS custom property.
/////////////////////////////////////////////////////

mainEl.style.backgroundColor = '#4a4e4d'

// TASK 1.2 - Set the content of mainElto <h1>SEI Rocks!</h1>
/////////////////////////////////////////////////////

const h1 = document.createElement('h1')
h1.innerHTML = 'SEI Rocks!'
mainEl.appendChild(h1)

// TASK 1.3 - Add a class of flex-ctr to mainEl 
/////////////////////////////////////////////////////

mainEl.className = "flex-ctr"

// TASK 2.0 - Select and cache the <nav id="top-menu">element in a variable named topMenuEl
/////////////////////////////////////////////////////

const topMenuEl = document.querySelector('#top-menu')

// TASK 2.1 - Set the height topMenuElelement to be 100%
/////////////////////////////////////////////////////

topMenuEl.style.height = '100%'

// TASK 2.2 - Set the background color of topMenuElto the value stored in the --top-menu-bgCSS custom property
/////////////////////////////////////////////////////

topMenuEl.style.backgroundColor = '#0e9aa7'

// TASK 2.3 - Add a class of flex-around to topMenuEl
/////////////////////////////////////////////////////

topMenuEl.className = 'flex-around'

// TASK 3.0 - Copy the data structure to the top of page (its located at top of page)
////////////////////////////////////////////////////
// TASK 3.1 - Iterate over the entire menuLinksarray and for each "link" object:
/////////////////////////////////////////////////////
  // Create an <a> element.
  // On the new element, add an href attribute with its value set to the href property of the "link" object.
  // Set the new element's content to the value of the text property of the "link" object.
  // Append the new element to the topMenuElelement

menuLinks.forEach((arr, i)=>{
  const aTag = document.createElement('a')
  const link = document.createTextNode(menuLinks[i].text)
  aTag.appendChild(link)
  aTag.href = menuLinks[i].href
  topMenuEl.appendChild(aTag)
})

