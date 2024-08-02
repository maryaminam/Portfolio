import React from 'react';
import CPU from '../../assets/CPU.png';
import atm from '../../assets/ATM.png';
import hms from '../../assets/HMS.png';
import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
          <ProjectCard src={CPU} link="https://github.com/maryaminam/CPU-Scheduler" h3="CPU Scheduler"/>
          <ProjectCard src={hms} link="https://github.com/maryaminam/Hospital-Management-System-in-JAVA" h3="Hospital Management System"/>
          <ProjectCard src={atm} link="https://github.com/maryaminam/ATM-" h3="ATM System"/>
          
        </div>
    </section>    
  )
}

export default Projects
