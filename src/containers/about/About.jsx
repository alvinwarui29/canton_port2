import Header from "../../components/pageHeader/Header";
import "./About.scss";
import { BsFillInfoCircleFill } from "react-icons/bs";
import React from "react";

const About = () => {
  return (
    <div className="about" id="about">
      <Header headerText="About" 
      icon={<BsFillInfoCircleFill  size={40}/>} />
    </div>
  );
};

export default About;
