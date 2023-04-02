import "./Home.scss";
import { useNavigate } from "react-router-dom";
import React from "react";
import canton from "../../assets/canton.jpg";
const Home = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/contact');
  };

  return (
    <section className="home" id="home">
      {/* will add my image here */}
      {/* <div className="home__left">
      <img src={canton} alt="" />
    </div> */}
      <div className="home__textwrapper">
        <h1>
          Hello, I'm warui
          <br />
          Front end developer and
          <br />
          database enthusiast
        </h1>
      </div>
      <div className="home__contactme">
        <button onClick={handleNavigate}>Contact me</button>
      </div>
    </section>
  );
};

export default Home;
