import React from "react";

import styles from "./Contact.module.css";
import { get_image_url } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={get_image_url("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:trivedidevarshi02@gmail.com">trivedidevarshi02@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={get_image_url("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/devarshi1/">linkedin.com/in/devarshi1</a>
        </li>
        <li className={styles.link}>
          <img src={get_image_url("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/devarshi-007">github.com/devarshi-007</a>
        </li>
      </ul>
    </footer>
  );
};
