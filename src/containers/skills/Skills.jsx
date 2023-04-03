import "./Skills.scss";
import Header from "../../components/pageHeader/Header";
import { BsFillInfoCircleFill } from "react-icons/bs";
import React from "react";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <Header headerText="skills" icon={<BsFillInfoCircleFill size={40} />} />
    </div>
  );
};

export default Skills;
