import Hero from "@/components/Hero/Hero"
import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"
import styles from "./Contact.module.css"

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>THIS IS OUR CONTACT PAGE.</h1>
      <Header/>
      <Hero/>
      <Footer/>
      
      
      </div>
  )
}

export default Contact