import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from './components/Header';
import Footer from './components/Footer';

const Home = () => {
  return (
    <div /* className={styles.container} */>
      <Head>
        <title>CAO</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
        <main className={styles.main} >
          <h1>Hi</h1>

        </main>
      <Footer />
    </div>
  )
}

export default Home;
