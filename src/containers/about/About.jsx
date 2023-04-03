import Header from "../../components/pageHeader/Header";
import { BsFillInfoCircleFill } from "react-icons/bs";
import React from "react";
import "./About.scss";
import { Animate } from "react-simple-animate";
const About = () => {
  return (
    <section className="about" id="about">
      <Header headerText="About" 
      icon={<BsFillInfoCircleFill size={40} />} />
    <Animate
        play
        duration={2}
        delay={1}
        start={{
          transform: "translateX(-1300px)",
        }}
        end={{
          transform: "translatex(0px)",
        }}
      >
      <div className="about__content">
        <h3>Front end developer</h3>
        <p>
          I'm able to offer top-notch, creative solutions to clients in a
          variety of industries thanks to my keen attention to detail and
          comprehensive understanding of front-end development and database
          management.
        </p>
      </div>
      </Animate>
    </section>
  );
};

export default About;
