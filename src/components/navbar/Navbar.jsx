"use client";

import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
// import { signOut, useSession } from "next-auth/react";
import Logo from "public/Logo.png";
import Image from "next/image";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Program",
    url: "/program",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Admin login",
    url: "/dashboard",
  },
];

const Navbar = () => {
//   const session = useSession();

  return (
    <div className={styles.container}>
      <div>
        
      <Link href="/" className={styles.logo}>
      <Image src={Logo} alt="" className={styles.img} />
      </Link></div>
        
      <div className={styles.links}>
        <DarkModeToggle />
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        {/* {session.status === "authenticated" && (
          <button className={styles.logout} onClick={signOut}>
            Logout
          </button>
        )} */}
           <div className={styles.social}>
        <Image src="/1.svg" width={20} height={20} className={styles.icon} alt="FB" />
        <Image src="/2.svg" width={20} height={20} className={styles.icon} alt="IG" />
        {/* <Image src="/3.svg" width={20} height={20} className={styles.icon} alt="Twitter" /> */}
        <Image src="/4.svg" width={20} height={20} className={styles.icon} alt="YT" />
      </div>
      </div>
    </div>
  );
};

export default Navbar;
