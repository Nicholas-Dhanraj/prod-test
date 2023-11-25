import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

const Program = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a program</h1>
      <div className={styles.items}>
        
        <Link href="/program/program1" className={styles.item}>
          <span className={styles.title}>Program #1</span>
        </Link>
        <Link href="/program/program2" className={styles.item}>
          <span className={styles.title}>Program #2</span>
        </Link>
        <Link href="/program/program3" className={styles.item}>
          <span className={styles.title}>Program #3</span>
        </Link>
        <Link href="/program/program1" className={styles.item}>
          <span className={styles.title}>Program #4</span>
        </Link>
        <Link href="/program/program2" className={styles.item}>
          <span className={styles.title}>Program #5</span>
        </Link>
    
      </div>
    </div>
  );
};

export default Program;
