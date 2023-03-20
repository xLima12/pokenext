import styles from '../../styles/About.module.css'
import Image from 'next/image'

export default function About() {
    return (
        <div className={styles.about}>
            <h1>Sobre o projeto</h1>
            <p>Projetado feito com NextJS com consumo da PokeAPI e estilizado com css module.</p>
            <Image src="/images/Ativo 1.png" width={217} height={178} alt="Imagem"/>
        </div>
    )
}