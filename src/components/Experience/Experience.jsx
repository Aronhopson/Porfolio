import React, { useEffect } from "react";
import styles from "./Experience.module.css";
import history from "../../data/history.json";

const Experience = () => {
  useEffect(() => {
    const handleScroll = () => {
      const experienceSection = document.querySelector(`.${styles.experienceSection}`);
      if (experienceSection) {
        const experienceSectionPosition = experienceSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (experienceSectionPosition < windowHeight) {
          experienceSection.classList.add(styles.slideInRight);
          // Add class to animate each history item separately
          const historyItems = document.querySelectorAll(`.${styles.historyItem}`);
          historyItems.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add(styles.slideInRight);
            }, index * 200); // Adjust the delay as needed
          });
        }
      }
    };

    // Initial animation check on page load
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className={styles.container} id="experience">
      <div className={`${styles.experienceSection} ${styles.animated}`}>
        <h2 className={styles.title}>Experience</h2>
        <ul className={styles.history}>
          {history.map((historyItem, id) => (
            <li key={id} className={`${styles.historyItem}`}>
              <div className={styles.historyItemDetails}>
                <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                <ul>
                  {historyItem.experiences.map((experience, id) => (
                    <li key={id}>{experience}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
