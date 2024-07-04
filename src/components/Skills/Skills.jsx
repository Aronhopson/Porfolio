import React, { useEffect, useState } from "react";
import styles from "./Skills.module.css";
import skillsData from "../../data/skills.json";
import { getImageUrl } from "../../utils";

const Skills = () => {
  const [visibleSkills, setVisibleSkills] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.querySelector(`.${styles.skillsSection}`);
      if (skillsSection) {
        const skillsSectionPosition = skillsSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (skillsSectionPosition < windowHeight) {
          animateSkills();
        }
      }
    };

    const animateSkills = () => {
      setVisibleSkills((prevVisibleSkills) => {
        const remainingSkills = skillsData.filter(
          (skill) => !prevVisibleSkills.includes(skill)
        );
        const nextSkillToShow = remainingSkills.length > 0 ? remainingSkills[0] : null;
        return nextSkillToShow ? [...prevVisibleSkills, nextSkillToShow] : prevVisibleSkills;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSkillClick = (skill) => {
    console.log(`Clicked on skill: ${skill.title}`);
    // Add your action here, such as opening a modal or navigating to another page
  };

  return (
    <div className={`${styles.skillsSection} ${styles.animated}`} id="skills">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.skills}>
        {visibleSkills.map((skill, id) => (
          <div
            key={id}
            className={`${styles.skill} ${styles.slideInLeft}`}
            onClick={() => handleSkillClick(skill)}
            style={{ animationDelay: `${id * 0.1}s` }} // Adjust delay for sequential animation
          >
            <div className={styles.skillImageContainer}>
              <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
            </div>
            <p>{skill.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
