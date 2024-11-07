
import Hero from "@/components/Hero/Hero";
import styles from"../About/About.module.css";
import Header from '@/components/Header/Header';
import Footer from "@/components/Footer/Footer";
const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>THIS IS ABOUT PAGE.</h1>
      <Header/>
      <Hero/>
      <Footer/>
      </div>
  )
}

export default About