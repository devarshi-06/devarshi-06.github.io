import React from "react";
import { get_image_url } from "../../utils";
import styles from "./Hero.module.css"


export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Devarshi</h1>
            <p className={styles.description}>I am a full stack developer with 1.6 years of experience. Reach out if you'd like to learn more!</p>
            <a className={styles.contactBtn} href="mailto:trivedidevarshi02@gmail.com">Contact Me</a>
        </div>
        <img className={styles.heroImg} src={get_image_url("hero/heroImage.png")} alt="Avatar Image" />
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
}