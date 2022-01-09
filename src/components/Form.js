import { useState } from "react";
import Modal from "./modal";

const Form = ({ setCV, setCarousel, setForm }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [mess, setMess] = useState("");

  return (
    <div className="global-contact-div">
      <Modal setCV={setCV} setCarousel={setCarousel} setForm={setForm}>
        <h1>CONTACT</h1>
        <div className="form-box">
          <div className="other-contacts"></div>
          <div className="form-div">
            <form>
              <div className="info">
                <input
                  onChange={(event) => setFirstname(event.target.value)}
                  type="text"
                  placeholder="Firstname"
                  value={firstname}
                ></input>{" "}
                <input
                  onChange={(event) => setLastname(event.target.value)}
                  type="text"
                  placeholder="Lastname"
                  value={lastname}
                ></input>
              </div>
              <div className="info">
                {" "}
                <input
                  required="required"
                  onChange={(event) => setEmail(event.target.value)}
                  type="email"
                  placeholder="Email"
                  value={email}
                ></input>
                <input
                  onChange={(event) => setTel(event.target.value)}
                  type="text"
                  placeholder="Your phone"
                  value={tel}
                ></input>
              </div>

              <textarea
                className="mess"
                required="required"
                onChange={(event) => setMess(event.target.value)}
                type="text"
                placeholder="Your Message"
                value={mess}
              ></textarea>
              <div className="submit-button">
                <button>Envoyer mon message</button>
              </div>
              <div className="submit-button"></div>
            </form>
            <h4>mon mail : marinecorbel@yahoo.fr </h4>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Form;
