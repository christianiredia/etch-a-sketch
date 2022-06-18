let container = document.querySelector(".container")
let resetButton = document.querySelector(".reset")


function createGrid(amountOfGrids) {
    const wrapper = document.createElement("div")
    wrapper.classList.add("wrapper")

function randomRGB() {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)

    return {r, g, b}
}

  for ( let i = 0; i < amountOfGrids; i++) {
      let { r, g, b} = randomRGB()
      let row = document.createElement("div")
      row.classList.add("grid-row")

      for (let j = 0; j < amountOfGrids; j++) {
          let widthAndHeight = 960 / amountOfGrids
          let gridBox = document.createElement("div")
          gridBox.classList.add("grid-box")
          gridBox.style.width = `${widthAndHeight}px`
          gridBox.style.height = `${widthAndHeight}px`

          gridBox.addEventListener("mouseenter", function() {
              let bgColor = "rgb(" + r + "," + g + "," + b + ")";
          gridBox.style.background = bgColor;
          })
          row.appendChild(gridBox)
      }
      wrapper.appendChild(row)
  }
  container.appendChild(wrapper)
}

resetButton.addEventListener("click", function() {
    let userSize = Number(prompt("How many Squares do you want to draw with?"))

    while (userSize > 100) {
        userSize = Number(prompt("Please pick another number less than or equal to 100."))
    }

    let wrapper = document.querySelector(".wrapper")

    if (!wrapper) {
        createGrid(userSize)
    } else {
        wrapper.remove()
    }
})
