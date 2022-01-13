import IconeCarousel from "./Icone.carousel";
import carousel from "../Media/carousel.json";
import LinkPortfolio from "./LinkPortfolio";

const CarousselCard = () => {
  const handleZoomIn = (elem) => {
    document.getElementById(`card${elem.ID}`).className = "carousel__cell-zoom";
  };

  const handleZoomOut = (elem) => {
    document.getElementById(`card${elem.ID}`).className = "carousel__cell";
  };

  return (
    <>
      {carousel.map((elem, index) => {
        return (
          <div key={index} id={`card${elem.ID}`} className="carousel__cell">
            <div className="carousel-title">
              <h1>{elem.TITLE}</h1>
              {elem.SUBTITLE && <p>({elem.SUBTITLE})</p>}
            </div>
            <div
              id={`img${elem.id}`}
              onMouseEnter={() => {
                handleZoomIn(elem);
              }}
              onMouseLeave={() => {
                handleZoomOut(elem);
              }}
            >
              <img src={elem.PICTURE} alt="visualisation du rendu site"></img>
            </div>
            <IconeCarousel elem={elem} />
            <LinkPortfolio elem={elem} />
          </div>
        );
      })}
    </>
  );
};

export default CarousselCard;
