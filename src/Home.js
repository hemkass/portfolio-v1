import AnimLetter from "./components/AnimLetter";
import Loader from "./components/Loader";

const Home = () => {
  return (
    <div className="loader-box">
      <div>
        <Loader />
      </div>
      <div>
        <AnimLetter />
      </div>
    </div>
  );
};

export default Home;
