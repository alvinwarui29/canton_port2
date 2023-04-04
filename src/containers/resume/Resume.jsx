import "./Resume.scss";
import Header from "../../components/pageHeader/Header";
import { BsFillInfoCircleFill } from "react-icons/bs";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { data } from "./utils";

const Resume = () => {
  return (
    <section className="resume" id="resume">
      <Header headerText="resume" icon={<BsFillInfoCircleFill size={40} />} />

      <div className="timeline">
        <div className="timeline__experience">
          <h3>My Works</h3>
          <VerticalTimeline
            layout={"1-column"}
            lineColor="var(--yellow-theme-main-color)"
          >
            {data.experience.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline__experience__vertical-timeline-element"
              >
                <div>
                  <h3>{item.title}</h3>
                  <h4>{item.subtitle}</h4>
                </div>
                <p>{item.description}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Resume;
