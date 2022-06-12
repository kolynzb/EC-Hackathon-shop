import React from "react";
import styles from "../styles/components/Footer.module.css";
import Image from "next/image";
import Socialsbar from "./Socialsbar";
import logo from "../public/Images/logo.png";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>COMPANY</h3>
          <li className={styles.sectItem}>About Us</li>
          <li className={styles.sectItem}>Contact</li>
          <li className={styles.sectItem}>Career</li>
          <li className={styles.sectItem}>Store Location</li>
        </div>
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>HELP</h3>
          <li className={styles.sectItem}>Order Tracking</li>
          <li className={styles.sectItem}>FAQs</li>
          <li className={styles.sectItem}>Privacy Policy</li>
          <li className={styles.sectItem}>Terms & Conditions</li>
        </div>
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>STORE</h3>
          <li className={styles.sectItem}>Accessories</li>
          <li className={styles.sectItem}>Women</li>
          <li className={styles.sectItem}>Men</li>
        </div>
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>FOLLOW US</h3>
          <li className={styles.sectItem}>
            Be the first to know about our latest products
          </li>
          <Socialsbar />
        </div>
      </div>
      <div className={styles.bottom}>
        <div className="logo">
          <Image src={logo} alt="native logo" width="100px" height="100px" />
        </div>
        <p>2021 ©Native Clothing. All rights resevered</p>
      </div>
    </footer>
  );
};

export default Footer;
