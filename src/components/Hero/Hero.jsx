import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Taluba Aron Hopson</h1>
        <p className={styles.description}>
  
Proactive Software Engineer specializing in web application development and user experience enhancement. Experienced in Python, JavaScript (including TypeScript), React.js, Node.js, Git/GitHub, Redux, SQL, and AWS. Holds a Master's in Computer Science with a focus on advanced programming and data analysis.

        </p>
        <a href="mailto: hopsont1@udayton.edu" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
