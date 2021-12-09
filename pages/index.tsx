import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Josoe Santos</title>
        <meta name="description" content="Web developer an technology lover" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to what will be my own site.
        </h1>
        <dl>
          <dt className={styles.descriptionTitle}>Github: </dt>
          <dd><a href="https://github.com/JosoeSantos">@JosoeSantos</a></dd>
          <dt className={styles.descriptionTitle}>Discord: </dt>
          <dd>JosOe#9705</dd>
        </dl>
      </main>
    </div>
  )
}

export default Home
