import "./Home.scss";

import React from "react";
import me from "../../assets/me.jpg"
const Home = () => {
  return (
    

    <section className="home" id="home">
    <div className="home__left">
      <img src={me} alt="" />
    </div>
      <div className="home__textwrapper">
        <h1>
          Hello, I'm warui
          <br />
          Front end developer and 
          <br />
          database enthusiast
        </h1>
      </div>
    </section>
  );
};

export default Home;
