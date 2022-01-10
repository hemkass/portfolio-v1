import Modal from "./modal";
import softSkills from "../Media/softSkills.json";
import skills from "../Media/skills.json";

const Skills = ({ setCV, setCarousel, setForm, setSkills }) => {
  const key1 = Object.keys(skills[0]);

  const key2 = Object.keys(skills[1]);

  return (
    <div>
      <Modal
        setSkills={setSkills}
        setCV={setCV}
        setCarousel={setCarousel}
        setForm={setForm}
      >
        <div className="skills-box">
          <div className="soft-skills-box">
            <h2>SOFT SKILLS</h2>
            <div className="soft-skills-content">
              {softSkills.map((skill, index) => {
                return (
                  <div key={index} className="soft-skill-div">
                    <div className="softSkill-icon">
                      {<img src={`${skill.PICTURE}`} alt={`${skill.TITLE}`} />}
                    </div>
                    <div>
                      <h4>{skill.TITLE}</h4>
                    </div>
                    {skill?.description && (
                      <div>
                        <p>{skill.description}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h2>SKILLS</h2>

            <div className="hard-skills-box">
              <div className="web-skills">
                <h4>{key1}</h4>
                {skills[0][`${key1}`].map((tech, index) => {
                  return <p key={index}>{tech}</p>;
                })}
              </div>

              <div>
                <h4>{key2}</h4>
                {skills[1][`${key2}`].map((tech, index) => {
                  return <p key={index}>{tech}</p>;
                })}
              </div>
            </div>
          </div>{" "}
        </div>
      </Modal>
    </div>
  );
};

export default Skills;
