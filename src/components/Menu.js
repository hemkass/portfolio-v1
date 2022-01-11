const Menu = ({ setCV, setCarousel, setForm, setSkills }) => {
  return (
    <>
      <div
        className="title1"
        onClick={() => {
          setCarousel(true);
        }}
      >
        <h1>My PORTFOLIO</h1>
      </div>
      <div
        className="title2"
        onClick={() => {
          setCV(true);
        }}
      >
        <h1>Curriculum Vitae</h1>
      </div>
      <div
        className="title2"
        onClick={() => {
          setSkills(true);
        }}
      >
        <h3>My SKILLS</h3>
      </div>
      <div
        className="title4"
        onClick={() => {
          setForm(true);
        }}
      >
        <h1>Contact Me</h1>
      </div>
    </>
  );
};

export default Menu;
