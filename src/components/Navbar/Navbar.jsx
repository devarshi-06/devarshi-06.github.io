import React, {useState} from "react";

import styles from "./Navbar.module.css"
import { get_image_url } from "../../utils";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    return <nav className={styles.navbar}>
        <a href="/" className={styles.title}>Portfolio</a>
        <div className={styles.menu}>
            <img 
            src={
                menuOpen 
                ? get_image_url("nav/closeIcon.png") 
                : get_image_url("nav/menuIcon.png")
                }
            alt="menu-button" 
            className={styles.menuBtn}
            onClick={() => setMenuOpen(!menuOpen)}/>
            <ul className={`${styles.menuitems} ${menuOpen && styles.menuOpen}`}
            onClick={() => setMenuOpen(false)}>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>
}