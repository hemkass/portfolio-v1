import IconeCarousel from "./Icone.carousel";
import carousel from "../Media/carousel.json";
import LinkPortfolio from "./LinkPortfolio";

const Sliders = () => {
  return (
    <div className="slider-box">
      {" "}
      <h1>PORTOFOLIO :</h1>
      {carousel.map((elem, index) => {
        return (
          <div key={index} className="slider-div">
            <div className="carousel-title">
              <h1>{elem.TITLE}</h1>
              {elem.SUBTITLE && <p>({elem.SUBTITLE})</p>}
            </div>
            <div>
              <img
                className="sliderPicture"
                src={elem.PICTURE}
                alt="visualisation du rendu site"
              ></img>
            </div>
            <IconeCarousel elem={elem} />
            <LinkPortfolio elem={elem} />
          </div>
        );
      })}
    </div>
  );
};

export default Sliders;
