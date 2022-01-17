import Modal from "./modal";

const MonCV = ({ /* setCV,  */ setCarousel, setForm, setSkills }) => {
  return (
    <div>
      <Modal
        /* setCV={setCV} */
        setCarousel={setCarousel}
        setForm={setForm}
        setSkills={setSkills}
      >
        <div>
          <img
            alt=""
            src="https://res.cloudinary.com/dyj84szrx/image/upload/v1642068251/Mon%20site/marineCorbel-CV_wj9o2l.png"
          />
        </div>
      </Modal>
    </div>
  );
};

export default MonCV;
