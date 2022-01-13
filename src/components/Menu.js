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
      <a
        href="https://res.cloudinary.com/dyj84szrx/image/upload/v1642068251/Mon%20site/marineCorbel-CV_wj9o2l.png"
        target="_blank"
        rel="noreferrer noopener"
      >
        <div
          className="title2"
          /*   onClick={() => {
          setCV(true);
        }} */
        >
          <h1>Curriculum Vitae</h1>
        </div>
      </a>
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
