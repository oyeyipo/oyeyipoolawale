import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Oyeyipo Olawale - Software Engineer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1 className={styles.title}>Oyeyipo Olawale</h1>
        <span>Software programmer | Loves open source</span>
      </header>

      <main className={styles.main}>
        <section id="blog-posts">
          <h2>Blog posts</h2>
        </section>
      </main>
    </div>
  );
}
