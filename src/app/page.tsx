import Image from "next/image";
import styles from "./page.module.css";
// import Rose from "public/rose.png";
// import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.titleCon}>
        <h1 className={styles.title}>
        The first wealth is health.
        </h1>
        </div>
        <p className={styles.desc}>
        Your journrey is unique and beautful, we would like to be part of that.
        </p>
        {/* <Button url="/program" text="Take our test"/> */}
      </div>
      <div className={styles.item}>
        {/* <Image src={Rose} alt="" className={styles.img} /> */}
      </div>
      
    </div>
  );
}
