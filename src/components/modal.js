import Caroussel from "../components/Caroussel";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Modal = ({ children, setCV, setCarousel }) => {
  const handleClose = () => {
    setCV(false);
    setCarousel(false);
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
