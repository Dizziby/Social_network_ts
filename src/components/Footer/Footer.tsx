import React from "react";
import styles from "./Footer.module.css";

type FooterPropsType = {
    section: string
}

const Footer: React.FC<FooterPropsType> = (props) => {
    if(props.section === "sectionLogout") {
        return null;
    }

    return (
        <div className={styles.footer}>
            Footer
        </div>
    )
}

export default Footer;