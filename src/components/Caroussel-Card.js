import carousel from "../Media/carousel.json";

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
        console.log("hello", elem.FRONT);
        return (
          <div key={index} id={`card${elem.ID}`} className="carousel__cell">
            <div className="carousel-title">
              <h1>{elem.TITLE}</h1>
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
            <div className="icone-caroussel">
              {elem.TECHNOLOGIES.map((tech, index) => {
                return (
                  <span key={index}>
                    {tech.name === "NodeJS" ? (
                      <div>
                        <img
                          alt="icone de NodeJS"
                          src="https://res.cloudinary.com/dyj84szrx/image/upload/v1641572925/Mon%20site/PORTFOLIO/Ico-Node_xgthvm.png"
                        />
                      </div>
                    ) : tech.name === "MongoDB" ? (
                      <div>
                        <img
                          alt="icone de MongoDB"
                          src="https://res.cloudinary.com/dyj84szrx/image/upload/v1641572922/Mon%20site/PORTFOLIO/Ico-MONGO_up9wgp.png"
                        />
                      </div>
                    ) : tech.name === "JSX" ? (
                      <div>
                        <img
                          alt="icone de JSX"
                          src="https://res.cloudinary.com/dyj84szrx/image/upload/v1641572922/Mon%20site/PORTFOLIO/Ico-MONGO_up9wgp.png"
                        />
                      </div>
                    ) : (
                      tech.name === "REACT" && (
                        <div className="icone-caroussel2">
                          <img
                            alt="icone de REACT"
                            src="https://res.cloudinary.com/dyj84szrx/image/upload/v1641572917/Mon%20site/PORTFOLIO/REACT_c9krvk.png"
                          />
                        </div>
                      )
                    )}
                  </span>
                );
              })}
            </div>
            <a href={elem.FRONT} target="_blank" rel="noreferrer noopener">
              <div className="link carousel-link-div">
                <h4>{Object.keys(elem)[2]}: </h4>

                <p>{elem.FRONT}</p>
              </div>
            </a>
            {elem.BACK !== "" && (
              <a href={elem.BACK} target="_blank" rel="noreferrer noopener">
                <div className="link">
                  <h4>{Object.keys(elem)[3]}: </h4>

                  <p>{elem.BACK}</p>
                </div>
              </a>
            )}
          </div>
        );
      })}
    </>
  );
};

export default CarousselCard;
