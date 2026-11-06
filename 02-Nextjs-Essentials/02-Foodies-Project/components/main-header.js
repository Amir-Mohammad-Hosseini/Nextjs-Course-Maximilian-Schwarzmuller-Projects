import Link from 'next/link'
import React from 'react'
import headerLogo from "@/assets/logo.png"

import styles from "./main-header.module.css"

const MainHeader = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/">
        <img src={headerLogo.src} alt="A plate with food on it." />
        NextLevel Food
      </Link>

      <nav className={styles.nav}>
        <ul>
          <li><Link href="/meals">Browse Meals</Link></li>
          <li><Link href="/community">Foodies Community</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default MainHeader
