import React from "react";
import styles from "./footer.module.css";
// import Button from "@/components/Button/Button";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 OKC WM. All rights reserved.</div>
      {/* <div className={styles.social}>
        <Image src="/1.svg" width={15} height={15} className={styles.icon} alt="Lama Dev Facebook Account" />
        <Image src="/2.svg" width={15} height={15} className={styles.icon} alt="Lama Dev" />
        <Image src="/3.svg" width={15} height={15} className={styles.icon} alt="Lama Dev" />
        <Image src="/4.svg" width={15} height={15} className={styles.icon} alt="Lama Dev" />
      </div> */}
      <a href="https://wa.me/116475096429"><Image src="/WhatsAppButtonGreenLarge.png" width={250} height={50} className={styles.waIcon} alt="FB" /></a>
        {/* <a aria-label="Chat on WhatsApp" href="https://wa.me/116475096429"> <img alt="Chat on WhatsApp" src="WhatsAppButtonGreenLarge.png" /><a/> */}
    </div>
  );
};

export default Footer;
