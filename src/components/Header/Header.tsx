import Link from "next/link"
import styles from './Header.module.css'
const Header = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.heading}>THIS IS HEADER SECTION. </h1>
     <nav>
       <ul className={styles.list}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/About">About</Link></li>
        <li><Link href="/Contact">Contact</Link></li>
        <li><Link href="/Services">Services</Link></li>
       </ul>
     </nav>
    </div>
  )
}

export default Header