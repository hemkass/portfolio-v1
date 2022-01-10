const Loader = ({ setProfil }) => {
  return (
    <div
      className="loader-div"
      onClick={() => {
        setProfil(true);
      }}
    >
      <div className="loader">
        {" "}
        <img src="https://res.cloudinary.com/dyj84szrx/image/upload/v1641677511/Mon%20site/PORTFOLIO/maphoto2_th0lmt.png"></img>
      </div>
      <div className="loader3"></div>
      <div className="loader2"> </div>
    </div>
  );
};

export default Loader;
