/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext, useEffect, useState } from 'react';
import Styles from '../styles/portfolio.module.css';
import cmiContext from '../context/cmiContext';

export default function PortfolioContainer() {
  const context = useContext(cmiContext);
  const [front, setFront] = useState(true);
  const [back, setBack] = useState();
  const [cs, setCs] = useState();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (context.projects) {
      setProjects(context.projects);
    }
  }, [context]);

  function frontProjectsRender() {
    return projects.map((project, index) => {
      if (project.module === 'Front-End') {
        return (
          <div
            className={Styles.projectRow}
            key={`${index + 1}`}
            tabIndex="0"
            role="button"
            onClick={() => { window.open(project.url, '_blank'); }}
          >
            {project.name}

          </div>
        );
      }
      return '';
    });
  }

  function backProjectsRender() {
    return projects.map((project, index) => {
      if (project.module === 'Back-End') {
        return (
          <div
            className={Styles.projectRow}
            key={`${index + 1}`}
            tabIndex="0"
            role="button"
            onClick={() => { window.open(project.url, '_blank'); }}
          >
            {project.name}

          </div>
        );
      }
      return '';
    });
  }

  const csProjectsRender = () => projects.map((project, index) => {
    if (project.module === 'Ciência da Computação') {
      return (
        <div
          className={Styles.projectRow}
          key={`${index + 1}`}
          tabIndex="0"
          role="button"
          onClick={() => { window.open(project.url, '_blank'); }}
        >
          {project.name}

        </div>
      );
    }
    return '';
  });

  return (
    <section className={Styles.midContainer}>
      <div className={Styles.ProjectContainer}>
        <p className={Styles.pClass}>Trybe Projects</p>
        <nav>
          <ul className={Styles.ulNav}>
            <li>
              <button
                className={Styles.cta}
                type="button"
                onClick={() => {
                  setFront(true);
                  setBack(false);
                  setCs(false);
                }}
              >
                <span>FrontEnd</span>
              </button>

            </li>
            <li>
              <button
                className={Styles.cta}
                type="button"
                onClick={() => {
                  setFront(false);
                  setBack(true);
                  setCs(false);
                }}
              >
                <span>BackEnd</span>
              </button>

            </li>
            <li>
              <button
                className={Styles.cta}
                name="cs"
                type="button"
                onClick={() => {
                  setFront(false);
                  setBack(false);
                  setCs(true);
                }}
              >
                <span>CiênciaDaComputação</span>
              </button>
            </li>
          </ul>
        </nav>
        <hr />
        <div className={Styles.projectsContainer}>
          {front && frontProjectsRender()}
          {back && backProjectsRender()}
          {cs && csProjectsRender()}
        </div>
      </div>
      <div className={Styles.ProjectContainer}>
        <p className={Styles.pClass}>Projetos Pessoais</p>
      </div>
    </section>
  );
}
