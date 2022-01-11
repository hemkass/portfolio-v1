import Modal from "./modal";
const MonCV = ({ setCV, setCarousel, setForm, setSkills }) => {
  return (
    <div>
      <Modal
        setCV={setCV}
        setCarousel={setCarousel}
        setForm={setForm}
        setSkills={setSkills}
      >
        <div>MonCV</div>
      </Modal>
    </div>
  );
};

export default MonCV;
