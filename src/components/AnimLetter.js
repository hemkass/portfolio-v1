import ReactAnime from "react-animejs";
import { useState } from "react/cjs/react.development";

const AnimLetter = () => {
  const { Anime, stagger } = ReactAnime;

  return (
    <div>
      <Anime
        type="button" // <------ Like this
        id="self"
        style={{
          top: 10,

          /*   left: 100, */
          width: 610,
          height: 150,
          background: "#d5d5d5",
        }}
        initial={[
          {
            targets: "#self2",
            height: "70px",
            width: "500px",

            /* translateX: 100,
            translateY: 150, */
            easing: "spring",
          },
        ]}
        _onClick={[
          {
            targets: "#self",
            scale: 0.5,
            easing: "easeInOutSine",
          },
        ]}
        _onMouseEnter={[
          /*    {
            targets: "#self",
            background: "#d3d",
            easing: "easeInOutQuad",
            direction: "alternate",
            duration: 2000,
          }, */
          {
            targets: "#letter1",
            background: "#756",
            easing: "easeInOutQuad",
          },
          {
            targets: "#self3",
            background: "#5ba",
            easing: "easeInOutQuad",
            width: 300,
            translateX: 350,
            translateY: 30,
            direction: "alternate",
          },
          {
            targets: "#self",
            scale: 0.8,
            easing: "easeInOutQuad",
          },
        ]}
        /* _onMouseLeave={[
          {
            targets: "#self3",
            background: "#5ba",
            easing: "easeInOutQuad",
            translateX: -50,
            translateY: -50,
            direction: "alternate",
          }, 
        ]}*/
      >
        <div id="self2">
          <h2>
            <span id="letter1"> D</span>
            <span>EVELOPPER</span>
          </h2>
        </div>

        <div id="self3">
          <h3>
            <span>FULL-STACK</span>
          </h3>
        </div>

        {/*        <h2>
          <span id="letter1">D</span>
          <span id="letter2">E</span>
          <span id="letter3">Y</span>
          <span>L</span>
          <span>I</span>
          <span>S</span>
          <span>H</span>
        </h2> */}
      </Anime>
    </div>
  );
};

export default AnimLetter;
