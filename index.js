let sizeOfGrid = 16
let container = document.querySelector(".container")

function createGrid(amountOfGrids) {
  for ( let i = 0; i < amountOfGrids; i++) {
      let row = document.createElement("div")
      row.classList.add("grid-row")

      for (let j = 0; j < amountOfGrids; j++) {
          let widthAndHeight = 960 / sizeOfGrid
          let gridBox = document.createElement("div")
          gridBox.classList.add("grid-box")
          gridBox.style.width = `${widthAndHeight}px`
          gridBox.style.height = `${widthAndHeight}px`
          gridBox.addEventListener("mouseenter", function() {
              gridBox.style.background = "#008751";
              gridBox.style.border = "1px sold white"
          })
          row.appendChild(gridBox)
      }

      container.appendChild(row)
  }
}
createGrid(sizeOfGrid)