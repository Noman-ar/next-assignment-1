import styles from "./Hero.module.css"

const Hero = () => {
  return (
  <section className={styles.hero}>
    <div>
      <h1 className={styles.heading}> WELCOME TO OUR ONLINE GROCERY SHOP</h1>
      <p>learn more about our services and features.</p>
      <button className={styles.button}>get started</button>
    </div>
  </section>
  )
}

export default Hero