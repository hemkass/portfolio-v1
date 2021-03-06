import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Modal = ({ children, /* setCV, */ setCarousel, setForm, setSkills }) => {
  const handleClose = () => {
    /*  setCV(false); */
    setCarousel(false);
    setForm(false);
    setSkills(false);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <FontAwesomeIcon
          className="closebutton"
          icon="times"
          onClick={handleClose}
        />
        <div> {children}</div>
      </div>
    </div>
  );
};

export default Modal;
