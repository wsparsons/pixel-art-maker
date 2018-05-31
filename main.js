let color = ''
const arrayOfColors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'brown', 'gray', 'black', 'white']
const colorPalette = document.querySelector('.color-palette')

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

createGrid(5)

const cells = Array.from(document.querySelectorAll('td'))

for (let i = 0; i < arrayOfColors.length; i++){
  const divOfColor = document.createElement('div')
  divOfColor.setAttribute('class','color-box')
  divOfColor.setAttribute('id', arrayOfColors[i])
  divOfColor.style.backgroundColor = arrayOfColors[i]
  colorPalette.appendChild(divOfColor)
}

const allColors = Array.from(document.querySelectorAll('.color-box'))


const selectColor = () => {
  color = event.target.id
  displayCurrentColor()
}

const changeColor = () => {
  console.log('hi')
  let id = event.target.id
  let element = document.getElementById(id)
  element.style.backgroundColor = color
}

allColors.forEach(singleColor => {
  addEventListener('click', selectColor)
})

cells.forEach(cell => {
  cell.addEventListener('click', changeColor)
})

const currentColor = document.querySelector('.current-color')
const displayCurrentColor = () => {
  currentColor.style.backgroundColor = color
}
