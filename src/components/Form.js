import { useState } from "react";
import Modal from "./modal";
import axios from "axios";

const Form = ({ setCV, setCarousel, setForm, setSkills }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [mess, setMess] = useState("");
  const [response, setResponse] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post(
      "https://m-c-portfolio-back.herokuapp.com/form",
      {
        email: `${email}`,
        firstname: `${firstname}`,
        lastname: `${lastname}`,
        telephone: `${tel}`,
        message: `${mess}`,
      }
    );
    console.log(response.status);
    if (response.status === 200) {
      setResponse(true);
    }
  };

  return (
    <div className="global-contact-div">
      <Modal
        setSkills={setSkills}
        setCV={setCV}
        setCarousel={setCarousel}
        setForm={setForm}
      >
        <h1>CONTACTS</h1>
        <div className="form-box">
          <div className="others-contacts">
            <div className="icone-contact">
              <img
                src="https://res.cloudinary.com/dyj84szrx/image/upload/v1641806509/Mon%20site/PORTFOLIO/LinkedIn_logo_initials_e5oqtn.png"
                alt="linkedIn icon"
              />
              <a href="https://www.linkedin.com/in/marinecorbel/">
                <p>/marinecorbel</p>
              </a>
            </div>
            <div className="icone-contact">
              <img
                src="https://res.cloudinary.com/dyj84szrx/image/upload/v1641571917/Mon%20site/PORTFOLIO/Ico-discord_s5i8c9.png"
                alt="discord"
              />{" "}
              <div className="discord">
                <p>hemkass (marine)</p>
                <legend>#8091</legend>
              </div>
            </div>
            <div>
              <div className="legend-git">
                <legend>Pour regarder mon code :</legend>
              </div>

              <div className="icone-contact">
                <img
                  src="https://res.cloudinary.com/dyj84szrx/image/upload/v1641808263/Mon%20site/PORTFOLIO/GitHub-Mark-Light-120px-plus_s13j9v.png"
                  alt="Github"
                />{" "}
                <a href="https://github.com/hemkass?tab=repositories">
                  <p>/hemkass</p>
                </a>
              </div>
            </div>
          </div>
          <div className="form-div">
            {response ? (
              <div className="form-response">
                <p>Votre message a bien été envoyé</p>
                <p>Merci de votre intérêt </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
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
            )}
            <h4>mon mail : marinecorbel@yahoo.fr </h4>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Form;
