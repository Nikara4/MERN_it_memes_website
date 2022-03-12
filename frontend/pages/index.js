import Head from "next/head";
// import Image from 'next/image'
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          IT Memes Base for Stressed out Developers | Meme Generator
        </title>
        <meta name="description" content="IT Memes Base" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <h1>IT Memes Base for Stressed out Developers</h1>
      <p>
        Yeah, but your scientists were so preoccupied with whether or not they
        could, they didn't stop to think if they should. We gotta burn the rain
        forest, dump toxic waste, pollute the air, and rip up the OZONE! 'Cause
        maybe if we screw up this planet enough, they won't want it anymore!
      </p>
      <button class="btn">Button</button>
    </div>
  );
}
