import React from 'react'
import styles from './herostyling.module.css';
import Heroimg from '../src/assets/profile.png';
import sun from '../src/assets/sun.svg';
import moon from '../src/assets/moon.svg';
import twitterlight from '../src/assets/twitter-light.svg'
import twitterdark from '../src/assets/twitter-dark.svg'
import githubdark from '../src/assets/github-dark.svg'
import linkedindark from '../src/assets/linkedin-dark.svg'
import githublight from '../src/assets/github-light.svg'
import linkedinlight from '../src/assets/linkedin-light.svg'
import CV from '../src/assets/Resume-Yogesh.pdf'
import { useTheme } from './common/themecontext';
function Hero() {
    const {theme,toggleTheme}=useTheme();
    const themeIcon=theme==='light'?sun:moon;
    const twittericon=theme==='light'?twitterlight:twitterdark;
    const githubicon=theme==='light'?githublight:githubdark;
    const linkedinicon=theme==='light'?linkedinlight:linkedindark;
  return (
  <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={Heroimg} alt="Hero Image"/>
     <img src={themeIcon} className={styles.colorMode} onClick={toggleTheme} alt="colormode"/>
      </div>
      <div className={styles.info}>
        <h1>Yogeshwaran</h1>
        <h2>Frontend developer</h2>
      <span>
        <a href="https://x.com/Yogesh_off_0925" alt="Twitter Icon" >
        <img src={twittericon}/></a>
        <a href="https://github.com/Yogesh0925" alt="Github Icon" >
        <img src={githubicon}/></a>
        <a href="https://www.linkedin.com/in/s-yogesh-waran-b25770290/" alt="Linkedin Icon" >
        <img src={linkedinicon}/></a>
      </span>
      <p className={styles.description}>
      Frontend Developer specializing in responsive HTML, CSS, and JavaScript frameworks like React. Skilled in creating accessible, visually appealing interfaces that enhance user experience.</p>
      <a href={CV} download><button className='hover'>Resume</button></a>
      </div>
    </section>
  )
}

export default Hero;
