import Image from 'next/image'

import styles from '@/styles/About.module.css'

export default function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre a PokeNext</h1>
      <p>A aplicação PokeNext permite você visualizar todos os pokémons e seus dados.</p>
      <Image src='/images/charizard.png' width={300} height={300} alt='Charizard'/>
    </div>
  )
}
