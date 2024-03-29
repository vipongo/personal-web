import React, {useContext} from "react";
import "./ProjectExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {projectExperiences} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function ProjectExperience() {
  const {isDark} = useContext(StyleContext);
  if (projectExperiences.display) {
    return (
      <div id="projectExperience">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="projectExperience">
            <div>
              <h1 className="experience-heading">Projects realized</h1>
              <div className="experience-cards-div">
                {projectExperiences.experience.map((card, i) => {
                  return (
                    <ExperienceCard
                      key={i}
                      isDark={isDark}
                      cardInfo={{
                        company: card.company,
                        desc: card.desc,
                        date: card.date,
                        companylogo: card.companylogo,
                        role: card.role,
                        descBullets: card.descBullets
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}
