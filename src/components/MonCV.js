import Modal from "./modal";
import Sliders from "./sliders";

const MonCV = ({ setCV, setCarousel, setForm, setSkills }) => {
  return (
    <div>
      <Modal
        setCV={setCV}
        setCarousel={setCarousel}
        setForm={setForm}
        setSkills={setSkills}
      >
        <div>EN cours</div>
      </Modal>
    </div>
  );
};

export default MonCV;
