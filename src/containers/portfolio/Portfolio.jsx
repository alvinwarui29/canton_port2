import "./Porfolio.scss";
import Header from "../../components/pageHeader/Header";
import { BsFillInfoCircleFill } from "react-icons/bs";
import React from "react";

const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <Header
        headerText="portfolio"
        icon={<BsFillInfoCircleFill size={40} />}
      />
    </div>
  );
};

export default Portfolio;
