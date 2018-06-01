// Create a grid using for loops and creating an unique id for each cell
const createGrid = (num) => {
  const table = document.createElement('table')
  document.querySelector('.grid').append(table)

  for (let i = 1; i <= num; i++) {
    let j = 1;
    const row = document.createElement('tr')
    table.append(row)
    for (j; j <= num; j++){
      const cell = document.createElement('td')
      cell.setAttribute('id', `${i}x${j}`)
      row.append(cell)
    }
  }
}

createGrid(30)


// Create a color palette based on an array of colors
const arrayOfColors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'brown', 'gray', 'black', 'white']
const colorPalette = document.querySelector('.color-palette')
for (let i = 0; i < arrayOfColors.length; i++){
  const divOfColor = document.createElement('div')
  divOfColor.setAttribute('class','color-box')
  divOfColor.setAttribute('id', arrayOfColors[i])
  divOfColor.style.backgroundColor = arrayOfColors[i]
  colorPalette.appendChild(divOfColor)
}


// coloring the cell based on the color picked
let color = ''
const cells = Array.from(document.querySelectorAll('td'))
const colorPicker = document.querySelector('#color-picker')
const allColors = Array.from(document.querySelectorAll('.color-box'))
const currentColor = document.querySelector('.current-color')

const selectColor = () => {
  color = event.target.id
  displayCurrentColor()
}

const displayCurrentColor = () => {
  // currentColor.style.backgroundColor = color
  currentColor.style.backgroundColor = colorPicker.value
}

const changeColor = () => {
  let id = event.target.id
  let element = document.getElementById(id)
  // element.style.backgroundColor = color
  element.style.backgroundColor = colorPicker.value
}

allColors.forEach(singleColor => {
  addEventListener('click', selectColor)
})

cells.forEach(cell => {
  cell.addEventListener('click', changeColor)
})
