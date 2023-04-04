import "./Skills.scss";
import "./utils";
import {Line} from 'rc-progress'
import { Animate , AnimateKeyframes} from "react-simple-animate";
import Header from "../../components/pageHeader/Header";
import { BsFillInfoCircleFill } from "react-icons/bs";
import React from "react";
import { skillData } from "./utils";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <Header headerText="skills" icon={<BsFillInfoCircleFill size={40} />} />
      <div className="skills__content-wrapper">
        {skillData.map((item, i) => (
          <div key={i} className="skills__content-wrapper__inner">
            <Animate
              play
              duration={1}
              delay={0.3}
              start={{
                transform: "translateX(-200px)",
              }}
              end={{
                transform: "translateX(0px)",
              }}
              key={i}
            >
              <h3 key={i} className="skills__content-wrapper__inner__category-text">
                {item.label}
              </h3>
              <div className="skills__content-wrapper__inner__progress-container" >
                {item.data.map((skillitem,j)=>(
                  <AnimateKeyframes
                  play
                  duration={1}
                  keyframes={["opacity: 1 " , "opacity : 9"]}
                  iterationCount = "1"
                  key={j}
                  >
                  <div className="progressbar-wrapper" key={j}>
                    <p>{skillitem.skillName}</p>
                    <Line
                    percent={skillitem.percentage}
                    strokeWidth = "2"
                    strokeColor = "var(--yellow-theme-main-color)"
                    trailWidth = "2"
                    strokeLinecap = "square"
                    />
                  </div>

                  </AnimateKeyframes>
                ))}
              </div>
            </Animate>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
