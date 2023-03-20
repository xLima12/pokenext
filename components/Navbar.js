import Image from "next/image";
import Link from "next/link";
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div>
                <Image src="/images/pokenext.png" width={72} height={50} alt="Pokenext"/>
            </div>
            <ul className={styles.links_items}>
                <li>
                    <Link className="link" href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">Sobre</Link>
                </li>
            </ul>
        </nav>
    )
}