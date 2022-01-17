import AnimLetter from "./components/AnimLetter";
import Loader from "./components/Loader";
import Background from "./components/HomeBackground";

import { useState } from "react";

import Caroussel from "./components/Caroussel";
import Form from "./components/Form";
import Skills from "./components/skills";
import ProfilModal from "./components/ProfilModal";
import Menu from "./components/Menu";

const Home = () => {
  /*  const [CV, setCV] = useState(false); */
  const [carousel, setCarousel] = useState(false);
  const [form, setForm] = useState(false);
  const [skills, setSkills] = useState(false);
  const [profil, setProfil] = useState(false);

  /*   const [langue, setLangue] = useState("FR"); */

  return (
    <div className="content">
      {/*     {CV && (
        <div>
          <MonCV
            setCV={setCV}
            setCarousel={setCarousel}
            setForm={setForm}
            setSkills={setSkills}
          />
        </div>
      )} */}
      {carousel && (
        <div>
          <Caroussel
            setCarousel={setCarousel}
            /*  setCV={setCV} */
            setForm={setForm}
            setSkills={setSkills}
            /*  langue={langue} */
          />
        </div>
      )}
      {form && (
        <div>
          <Form
            setCarousel={setCarousel}
            /*  setCV={setCV} */
            setForm={setForm}
            setSkills={setSkills}
          />
        </div>
      )}
      {profil && (
        <div>
          <ProfilModal setProfil={setProfil} />
        </div>
      )}
      {skills && (
        <div>
          <Skills
            setCarousel={setCarousel}
            /*  setCV={setCV} */
            setForm={setForm}
            setSkills={setSkills}
          />
        </div>
      )}

      <div className="menu">
        <Menu
          setSkills={setSkills}
          /* setCV={setCV} */
          setCarousel={setCarousel}
          setForm={setForm}
        />{" "}
      </div>
      <div className="titleBox">
        <div className="loader-box">
          <div>
            <Loader setProfil={setProfil} />
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
