import { set } from "animejs";
import { useState } from "react";

const Cube = () => {
  const [selected, setSelected] = useState("front");

  const [front, setFront] = useState(false);
  const [back, setBack] = useState(false);
  const [right, setRight] = useState(false);
  const [left, setLeft] = useState(false);
  const [top, setTop] = useState(false);
  const [bottom, setBottom] = useState(false);

  /*   const handleChecked = () => {
    console.log(elem);
   document.getElementById(`cube__face--${elem.ID}`).className =
      "carousel__cell-zoom"; 
  }; */

  console.log("select", selected);
  return (
    <div>
      <div>
        <div className={`cube show-${selected}`}>
          <div className="cube__face cube__face--front">front</div>
          <div className="cube__face cube__face--back">back</div>
          <div className="cube__face cube__face--right">right</div>
          <div className="cube__face cube__face--left">left</div>
          <div className="cube__face cube__face--top">top</div>
          <div className="cube__face cube__face--bottom">bottom</div>
        </div>{" "}
        <p className="radio-group">
          <label>
            <input
              type="radio"
              name="rotate-cube-side"
              value={front}
              onChange={(event) => {
                setFront("front");
                setSelected(front);
              }}
            />
            front
          </label>
          <label>
            <input
              type="radio"
              name="rotate-cube-side"
              value={right}
              onChange={(event) => {
                setRight("right");

                setSelected(right);

                /*     if (event.target.value === false) {
                {
                  console.log("hello");
                }
                setSelected(event.target.value);
              } else {
                setRight(false);
              } */
              }}
            />
            right
          </label>
          <label>
            <input
              type="radio"
              name="rotate-cube-side"
              value={back}
              onChange={() => {
                setBack("back");

                setSelected(back);
              }}
            />{" "}
            back
          </label>
          <label>
            <input
              type="radio"
              name="rotate-cube-side"
              value={left}
              onChange={() => {
                setLeft("left");
                setSelected(left);
              }}
            />{" "}
            left
          </label>
          <label>
            <input
              type="radio"
              name="rotate-cube-side"
              value={top}
              onChange={() => {
                setTop("top");
                setSelected(top);
              }}
            />
            top
          </label>
          <label>
            <input
              type="radio"
              name="rotate-cube-side"
              value={bottom}
              onChange={() => {
                setBottom("bottom");
                setSelected(bottom);
              }}
            />
            bottom
          </label>
        </p>
      </div>
    </div>
  );
};

export default Cube;
