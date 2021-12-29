import { useState } from "react";

const CarousselCard = () => {
  const [cellsRange, setCellsRange] = useState(9);
  /*   let cellWidth = 400; */
  let carousel = document.getElementsByClassName("carousel");
  console.log("caroussel", carousel);
  console.log("test", carousel[0]?.offsetWidth);
  let cells = document.getElementsByClassName("carousel__cell");
  console.log("cells", cells);
  let cellCount;
  let selectedIndex = 0;
  let cellWidth = carousel[0]?.offsetWidth;

  let cellHeight = carousel[0]?.offsetHeight;
  console.log("taille", cellWidth, cellHeight);
  let isHorizontal = true;
  let rotateFn = isHorizontal ? "rotateY" : "rotateX";
  let radius, theta;

  function rotateCarousel() {
    var angle = theta * selectedIndex * -1;
    carousel[0].style.transform =
      "translateZ(" + -radius + "px) " + rotateFn + "(" + angle + "deg)";
  }

  function changeCarousel() {
    theta = 360 / cellsRange;
    var cellSize = cellWidth;
    radius = Math.round(cellSize / 2 / Math.tan(Math.PI / cellsRange));
    for (var i = 0; i < cells.length; i++) {
      var cell = cells[i];
      if (i < cellsRange) {
        console.log("nombre", cellsRange);
        // visible cell
        cell.style.opacity = 1;
        var cellAngle = theta * i;
        cell.style.transform =
          rotateFn + "(" + cellAngle + "deg) translateZ(" + radius + "px)";
      } else {
        // hidden cell
        console.log("disp", cell.style.opacity);
        cell.style.opacity = 0;
        cell.style.transform = "none";
      }
    }

    rotateCarousel();
  }

  return (
    <div>
      <div className="scene">
        <div className="carousel">
          <div className="carousel__cell">1</div>
          <div className="carousel__cell">2</div>
          <div className="carousel__cell">3</div>
          <div className="carousel__cell">4</div>
          <div className="carousel__cell">5</div>
          <div className="carousel__cell">6</div>
          <div className="carousel__cell">7</div>
          <div className="carousel__cell">8</div>
          <div className="carousel__cell">9</div>
          <div className="carousel__cell">10</div>
          <div className="carousel__cell">11</div>
          <div className="carousel__cell">12</div>
          <div className="carousel__cell">13</div>
          <div className="carousel__cell">14</div>
          <div className="carousel__cell">15</div>
        </div>
      </div>
      <div className="carousel-options">
        <p>
          <label>
            Cells
            <input
              className="cells-range"
              type="range"
              min="3"
              max="15"
              value={cellsRange}
              onChange={(event) => {
                setCellsRange(event.target.value);
                selectedIndex--;
                changeCarousel();
              }}
            />
          </label>
        </p>
        <p>
          <button
            className="previous-button"
            onClick={() => {
              selectedIndex--;
              changeCarousel();
            }}
          >
            Previous
          </button>
          <button
            className="next-button"
            onClick={() => {
              selectedIndex++;
              changeCarousel();
            }}
          >
            Next
          </button>
        </p>
      </div>
    </div>
  );
};

export default CarousselCard;
