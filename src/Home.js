import AnimLetter from "./components/AnimLetter";
import Loader from "./components/Loader";
import Background from "./components/HomeBackground";

import { useState } from "react";

import MonCV from "./MonCV";
import Caroussel from "./components/Caroussel";

const Home = () => {
  const [modal, setModal] = useState(false);
  const [CV, setCV] = useState(false);
  const [carousel, setCarousel] = useState(false);

  const handleClose = () => {
    setModal(false);
  };

  /*   const handleOpen = () => {
    setModal(true);
  }; */

  const handleCV = () => {
    setCV(true);
  };

  return (
    <div className="content">
      {CV && (
        <div>
          <MonCV setCV={setCV} setCarousel={setCarousel} />
        </div>
      )}
      {carousel && (
        <div>
          <Caroussel setCarousel={setCarousel} setCV={setCV} />
        </div>
      )}

      <div className="menu">
        <div
          className="title1"
          onClick={() => {
            setCarousel(true);
          }}
        >
          <h1>My PORTFOLIO</h1>
        </div>
        <div className="title1" onClick={handleCV}>
          <h1>Curriculum Vitae</h1>
        </div>
        <div className="title2">
          <h3>My SKILLS</h3>
        </div>
        <div className="title4" onClick={handleCV}>
          <h1>Contact Me</h1>
        </div>
      </div>
      <div className="titleBox">
        <div className="loader-box">
          <div>
            <Loader />
          </div>
          <div className="developper">
            <AnimLetter />
          </div>
        </div>
        <Background />
      </div>
    </div>
  );
};

export default Home;
