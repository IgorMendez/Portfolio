import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Styles from '../styles/welcome.module.css';

export default function Welcome() {
  const [attribute, setAttribute] = useState(Styles.mainContainer);
  const [intro, setIntro] = useState('Bem vindo');

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setTimeout(() => setIntro('Welcome'), 2000);
      setTimeout(() => setIntro('Bienvenido'), 3000);
      setTimeout(() => setIntro('Bienvenue'), 3500);
      setTimeout(() => setIntro('Willkommen'), 4300);
      setTimeout(() => setIntro('いらっしゃいませ'), 5100);
    }, 1000);
  }, []);

  useEffect(() => {
    setTimeout(() => setAttribute(Styles.mainContainerOut), 5500);
  }, []);

  useEffect(() => {
    setTimeout(() => navigate('/portfolio'), 7000);
  }, []);

  const fadeIn = () => (
    <>
      <hr className={Styles.hrStyle} />
      <h1>{intro}</h1>
      <hr className={Styles.hrStyle} />
    </>
  );

  return (
    <div className={attribute}>
      {
        fadeIn()
      }
    </div>
  );
}
