import styles from '../styles/Home.module.css';
import Footer from './components/Footer';
import Navbar from './components/NavBar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className={styles.title}> Start editing!</div>
      <Footer />
    </div>
  );
}
