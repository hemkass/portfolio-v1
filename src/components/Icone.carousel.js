const IconeCarousel = ({ elem }) => {
  return (
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
  );
};

export default IconeCarousel;
