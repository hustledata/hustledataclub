
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FlowField from './components/FlowField';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <FlowField />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
