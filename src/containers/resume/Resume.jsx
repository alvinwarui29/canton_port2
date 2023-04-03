import "./Resume.scss";
import Header from "../../components/pageHeader/Header";
import { BsFillInfoCircleFill } from "react-icons/bs";
import React from "react";

const Resume = () => {
  return (
    <div className="resume" id="resume">
      <Header headerText="resume" icon={<BsFillInfoCircleFill size={40} />} />
    </div>
  );
};

export default Resume;
