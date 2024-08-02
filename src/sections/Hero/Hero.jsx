import styles from './HeroStyles.module.css';
import prof from '../../assets/profp.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import gmailLight from '../../assets/gmail-light.svg';
import gmailDark from '../../assets/gmail-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon =theme=== 'light'? sun: moon;
  const gmailIcon =theme=== 'light'? gmailLight: gmailDark;
  const linkIcon =theme=== 'light'? linkedinLight: linkedinDark;
  const gitIcon =theme=== 'light'? githubLight: githubDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={prof} alt="Profile picture of Maryam" />
        <img className={styles.colorMode} src={themeIcon} alt="color mode icon" onClick={toggleTheme} />
      </div>
      <div className={styles.info}>
        <h1>Maryam Inam</h1>
        <h2>Software Engineering Student</h2>
        <span>
          <a href="mailto:maryaminam4113@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={gmailIcon} alt="Gmail logo" />
          </a>
          <a href="https://linkedin.com/in/maryaminam" target="_blank" rel="noopener noreferrer">
            <img src={linkIcon} alt="LinkedIn logo" />
          </a>
          <a href="https://github.com/MaryamInam" target="_blank" rel="noopener noreferrer">
            <img src={gitIcon} alt="GitHub logo" />
          </a>
        </span>
        <p className={styles.description} >
          As a passionate software engineering student, I am eager to dive into complex problems and continuously expand my knowledge. My enthusiasm for technology drives me to innovate and create impactful solutions, always seeking new challenges and opportunities to grow.
        </p>
        <a href={CV} download>
          <button className="hover">
            Resume
          </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
