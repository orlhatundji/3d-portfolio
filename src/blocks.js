
window.addEventListener("load", () => {
  const blockContainer = document.getElementById("blocks");
  const blockSize = 50;
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const numCols = Math.ceil(screenWidth / blockSize) + 1;
  const numRows = Math.ceil(screenHeight / blockSize);
  const numBlocks = numCols * numRows + 400;

  function createBlocks() {
    for (let i = 0; i < numBlocks; i++) {
      const block = document.createElement("div");
      block.classList.add("block");
      block.dataset.index = i.toString();
      block.addEventListener("mouseenter", highlightRandomNeighbors);
      block.addEventListener("touchend", highlightRandomNeighbors);
      blockContainer.appendChild(block);
    }
  }

  function calculateNeighbors(index, numCols, numRows) {
    const neighbors = [];
    const row = Math.floor(index / numCols);
    const col = index % numCols;

    // Determine the possible shifts in rows and columns
    for (let dRow = -1; dRow <= 1; dRow++) {
      for (let dCol = -1; dCol <= 1; dCol++) {
        if (dRow === 0 && dCol === 0) continue; // Salta el bloque central

        const nRow = row + dRow;
        const nCol = col + dCol;

        // Check boundaries to ensure neighbors are within the grid
        if (nRow >= 0 && nRow < numRows && nCol >= 0 && nCol < numCols) {
          const nIndex = nRow * numCols + nCol;
          neighbors.push(nIndex);
        }
      }
    }

    return neighbors;
  }

  function highlightRandomNeighbors() {
    const index = parseInt(this.dataset.index);
    // console.log(index);

    const neighbors = calculateNeighbors(index, numCols, numRows);

    this.classList.add("highlight");
    setTimeout(() => this.classList.remove("highlight"), 500);

    shuffleArray(neighbors)
      .slice(0, 4)
      .forEach((nIndex) => {
        const neighbor = blockContainer.children[nIndex];
        if (neighbor) {
          neighbor.classList.add("highlight");
          setTimeout(() => neighbor.classList.remove("highlight"), 500);
        }
      });
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  }

  createBlocks();
  // window.addEventListener("resize", createBlocks);
});
