import React from 'react';
import CPU from '../../assets/CPU.png';
import atm from '../../assets/ATM.png';
import hms from '../../assets/HMS.png';
import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import portfolio from '../../assets/portfolio.png';
import ims from '../../assets/inven.png'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
          <ProjectCard src={CPU} link="https://github.com/maryaminam/CPU-Scheduler" h3="CPU Scheduler"/>
          <ProjectCard src={hms} link="https://github.com/maryaminam/Hospital-Management-System-in-JAVA" h3="Hospital Management System"/>
          <ProjectCard src={atm} link="https://github.com/maryaminam/ATM-" h3="ATM System"/>
          <ProjectCard src={portfolio} link="https://github.com/maryaminam/Portfolio/tree/main" h3="Portfolio"/>
          <ProjectCard src={ims} link="https://github.com/maryaminam/Inventory-Management-System" h3="Inventory Management System"/>
        </div>
    </section>    
  )
}

export default Projects
