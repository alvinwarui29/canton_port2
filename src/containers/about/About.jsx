import Header from "../../components/pageHeader/Header";
import { BsFillInfoCircleFill } from "react-icons/bs";
import React from "react";
import {DiNodejs} from 'react-icons/di';
import { FaDev, FaDatabase, FaReact, FaLaravel,FaNodeJs } from "react-icons/fa";
import "./About.scss";
import { Animate } from "react-simple-animate";

const personalInfo = [
  {
    label: "Name",
    value: "Alvin Warui",
  },
  {
    label: "Age",
    value: "22",
  },
  {
    label: "Country",
    value: "Kenya",
  },
  {
    label: "Email",
    value: "alvincanton29@gmail.com",
  },
  {
    label: "Phone number",
    value: "+254743170028",
  },
];

const About = () => {
  return (
    <section className="about" id="about">
      <Header headerText="About" icon={<BsFillInfoCircleFill size={40} />} />
      <div className="about__content">
        <div className="about__content__personal">
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
            <h3>Front end developer</h3>
            <p>
              I'm able to offer top-notch, creative solutions to clients in a
              variety of industries thanks to my keen attention to detail and
              comprehensive understanding of front-end development and database
              management.
            </p>
          </Animate>
          <Animate
            play
            duration={2}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalInfomation">Personal info</h3>
            <ul>
              {personalInfo.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label} </span>
                  <span className="value">{item.value} </span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__services">
        <Animate
            play
            duration={2}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <div className="about__content__services__innercontent">
                <div>
                  <FaReact size={60} color="var(--yellow-theme-main-color)"/>

                </div>
                <div>
                <FaNodeJs size={60} color="var(--yellow-theme-main-color)"/>
                </div>
                <div>
                <FaLaravel size={60} color="var(--yellow-theme-main-color)"/>
                </div>
                <div>
                <FaDatabase size={60} color="var(--yellow-theme-main-color)"/>
                </div>
            </div>
            </Animate>

        </div>
      </div>
    </section>
  );
};

export default About;
