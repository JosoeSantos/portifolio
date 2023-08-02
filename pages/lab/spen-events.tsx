import type { NextPage } from "next";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { useEffect } from "react";

const SpenEventsPage: NextPage = () => {
  function pointerHandler(e: PointerEvent) {
    console.log(e);
  }

  useEffect(() => {
    console.log("Start logging pointer events");
    window.addEventListener("pointerdown", pointerHandler);
    window.addEventListener("pointermove", pointerHandler);
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Josoe Santos</title>
        <meta name="description" content="Web developer an technology lover" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Beware! I&apos;m logging locally all your pointer events!
        </h1>
      </main>
    </div>
  );
};

export default SpenEventsPage;
