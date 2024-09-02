import React from 'react';
import CPU from '../../assets/CPU.png';
import atm from '../../assets/ATM.png';
import hms from '../../assets/HMS.png';
import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import portfolio from '../../assets/portfolio.png';
import ims from '../../assets/inven.png'
import blog from '../../assets/blog.png'
import task from '../../assets/task.png'
import scoop from '../../assets/scoop.png'

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
          <ProjectCard src={blog} link="https://github.com/maryaminam/BLOG" h3="Blog Website"/>
          <ProjectCard src={task} link="https://github.com/maryaminam/NLC-Task-Register" h3="Task Registration System"/>
          <ProjectCard src={scoop} link="https://github.com/maryaminam/IceCreamParlor" h3="IceCream Delivery Website"/>
        </div>
    </section>    
  )
}

export default Projects
