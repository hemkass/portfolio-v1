const LinkPortfolio = ({ elem }) => {
  return (
    <>
      <a href={elem.FRONT} target="_blank" rel="noreferrer noopener">
        <div className="link carousel-link-div">
          <h4>{Object.keys(elem)[3]}: </h4>

          <p>{elem.FRONT}</p>
        </div>
      </a>
      {elem.BACK !== "" && (
        <a href={elem.BACK} target="_blank" rel="noreferrer noopener">
          <div className="link">
            <h4>{Object.keys(elem)[4]}: </h4>

            <p>{elem.BACK}</p>
          </div>
        </a>
      )}
    </>
  );
};

export default LinkPortfolio;
