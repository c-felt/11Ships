// add links to HTML
const myNav = document.querySelector('nav');
const myViewer = document.querySelector('main');


// go grab the data and wait for the result
fetch("../data/starships.json")
  .then((response) => response.json())
  .then((shipArray) => {
    console.log(shipArray)
    populateNav(shipArray)
  })

// populate the nav bar
function populateNav(allShips) {
  console.log(allShips)
  allShips.forEach(ship => {
    let myButton = document.createElement('button')
    console.log(ship.name)
    myButton.textContent = ship.name
    myButton.addEventListener('click', () => showShip(ship))
    myNav.appendChild(myButton)
  })// end of loop
  
}// end of nav populate

// ship viewer
function showShip(shipData) {
  console.log(shipData)
//   create a figure and its parts
let myFigure = document.createElement('figure')
let myImage = document.createElement('img')
let myCaption = document.createElement('figcaption')
// assign data to the figure
console.log(shipData.url)
let urlArray = shipData.url.split ('/')// this splits the url so you can then choose a peice of it you want
console.log(urlArray[5])
myImage.src = `https://starwars-visualguide.com/assets/img/starships/${urlArray[5]}.jpg`
myCaption.textContent = shipData.name

// error checking the images
myImage.addEventListener('error', () => {
    myImage.src = "https://starwars-visualguide.com/assets/img/big-placeholder.jpg"
    myCaption.textContent = `The ${shipData.name} is in dock for repairs`
})


// assemble the figure
myFigure.appendChild(myImage)
myFigure.appendChild(myCaption)
// add the figure to the html


myViewer.textContent = ' '// this part gets rid of the previous picture it displayed so when you choose another button it doesnt display two images
myViewer.appendChild(myFigure)// because if you dont make the 'main' tag viewable by appending it then nothign in the main would show up either duh
}// end of ship viewer

