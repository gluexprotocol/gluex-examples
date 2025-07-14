import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Widget } from '../components/Widget';
const Home: NextPage = () => {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <ConnectButton />
        <Widget />
      </main>
    </div>
  );
};

export default Home;
