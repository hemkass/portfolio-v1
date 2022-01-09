import { useState, useEffect } from "react";
import CarousselCard from "./Caroussel-Card";
import carouselJson from "../Media/carousel.json";
import Modal from "./modal";

const Caroussel = ({ setCarousel, setCV }) => {
  const [cellsRange, setCellsRange] = useState("4");

  let carousel = document.getElementsByClassName("carousel");
  console.log("caroussel", carousel);

  let cells = document.getElementsByClassName("carousel__cell");
  /*   console.log("cells", cells); */
  let cellCount;
  let selectedIndex = 0;
  let cellWidth = carousel[0]?.offsetWidth;
  console.log("test", carousel[0]?.offsetWidth);
  let cellHeight = carousel[0]?.offsetHeight;

  let rotateFn = "rotateY";
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
    console.log("coucou " + cellWidth);

    for (var i = 0; i < cells.length; i++) {
      /*  console.log("cells", cells[i]); */
      var cell = cells[i];
      if (i < cellsRange) {
        // visible cell

        cell.style.opacity = 1;
        var cellAngle = theta * i;
        cell.style.transform =
          rotateFn + "(" + cellAngle + "deg) translateZ(" + radius + "px)";
        /*    console.log("transf", cellAngle, radius); */
      } else {
        // hidden cell

        cell.style.opacity = 0;
        cell.style.transform = "none";
      }
    }

    rotateCarousel();
  }

  useEffect(() => {
    setCellsRange(4);
    changeCarousel();
  }, []);
  console.log("test2", carouselJson);
  return (
    <div className="caroussel-global">
      <Modal setCV={setCV} setCarousel={setCarousel}>
        <div className="caroussel-box">
          <div
            className="caroussel-left"
            onClick={() => {
              selectedIndex--;
              changeCarousel();
            }}
          >
            <img
              className="caroussel"
              src="https://res.cloudinary.com/dyj84szrx/image/upload/v1640876054/Mon%20site/BLACKprevious3_m5wc9o.png"
              alt="next button"
            ></img>
          </div>
          <div className="middle-content">
            <div className="carousel-options">
              <div>
                <label>
                  <p>Nombre de faces :</p>
                  <input
                    className="cells-range"
                    type="range"
                    min="3"
                    max="5"
                    value={cellsRange}
                    onChange={(event) => {
                      setCellsRange(event.target.value);

                      changeCarousel();
                    }}
                  />
                </label>
              </div>
            </div>
            <div
              className="scene"
              onMouseMove={(event) => {
                console.log(event);
              }}
            >
              <div className="carousel">
                <CarousselCard />
              </div>
            </div>
          </div>

          <div
            className="caroussel-right"
            onClick={() => {
              selectedIndex++;
              changeCarousel();
            }}
          >
            <img
              src="https://res.cloudinary.com/dyj84szrx/image/upload/v1640874930/Mon%20site/testnext_opiaml.png"
              alt="next button"
            ></img>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Caroussel;
