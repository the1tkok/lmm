import Head from 'next/head';
import Image from 'next/future/image'
import styles from './register.module.css'
import logo from '../../public/logo/laurafinallogo.svg'

export default function Register() {
  return (
    <div>
      <Head>
        <title>Laura Mac Method - Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.registrationFormContainer}>
        <div className={styles.registrationProductContainer}>
        </div>
        <div className={styles.formContainer}>
          <div className={styles.registrationLogoContainer}>
            <Image className={styles.logo} src={logo} alt="logo" width={200} height='100%'/>
          </div>
          <h1 className={styles.registrationGreeting}>Let&#39;s Get Started!</h1>
          <p className={styles.registrationText}>We just need some basic information to help <br></br> optimize your learning experience.</p>
          <form className={styles.registrationForm}>
            <input className={styles.firstNameInput} type="text" id="firstName" name="firstName" placeholder="First Name"></input>
            <input className={styles.lastNameInput} type="text" id="lastName" name="lastName" placeholder="Last Name"></input>
            <input className={styles.emailInput} type="email" id="email" name="email" placeholder="Email"></input>
            <input className={styles.emailInput} type="password" id="password" name="password" placeholder="Password"></input>
            <select className={styles.experienceLevelInput} id="experience" name="experience">
              <option disabled="true" className={styles.experienceLevelOptions} value="beginner" >Choose Acting Experience</option>
              <option className={styles.experienceLevelOptions} value="beginner" >Beginner</option>
              <option className={styles.experienceLevelOptions} value="intermediate" >Intermediate</option>
              <option className={styles.experienceLevelOptions} value="expert">Expert</option>
            </select>
            <button className={styles.registrationPageSubmitBtn} type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}