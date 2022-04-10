import React from "react";
import styles from "./Footer.module.css";
import {faCcMastercard, faCcVisa} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

type FooterPropsType = {
    section: string
}

const Footer: React.FC<FooterPropsType> = (props) => {
    if (props.section === "sectionLogout") {
        return null;
    }

    return (
        <div className={styles.footer}>
            <div className={styles.footerInfo}>
                <div>
                    <p>33 new montgomery st.750 san francisco, CA USA 94105.</p>
                    <p>+1-56-346 345</p>
                </div>
                <div>
                    <p>Follow</p>
                    <ul>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                        <li>Google+</li>
                        <li>Pintrest</li>
                    </ul>
                </div>
                <div>
                    <p>Navigate</p>
                    <ul>
                        <li>About</li>
                        <li>Us Contact</li>
                        <li>Us Terms & Conditions</li>
                        <li>RSS Syndication</li>
                        <li>Sitemap</li>
                    </ul>
                </div>
                <div>
                    <p>Useful Links</p>
                    <ul>
                        <li>Leasing</li>
                        <li>Submit Route</li>
                        <li>How Does It Work?</li>
                        <li>Agent Listings</li>
                        <li>View All</li>
                    </ul>

                </div>
                <div>
                    <p>Download Apps</p>
                    <ul>
                        <li>Android</li>
                        <li>IPhone</li>
                        <li>Windows</li>
                    </ul>
                </div>

            </div>
            <div className={styles.reserved}>
                <p> © Dizzi_by 2022. All rights reserved.
                    <FontAwesomeIcon icon={faCcVisa} size="2x" pull="right"/>
                    <FontAwesomeIcon icon={faCcMastercard} size="2x" pull="right"/>
                </p>
            </div>
        </div>
    )
}

export default Footer;