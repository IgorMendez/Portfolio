import React, { useEffect, useState } from 'react';
import Styles from '../styles/welcome.module.css';
import Header from './header';
import MainButtonsNav from './mainButtonsNav';

export default function Welcome() {
  const [attribute, setAttribute] = useState(Styles.mainContainer);
  const [attribute2, setAttribute2] = useState(Styles.hrStyle);
  const [renderButtons, setRenderButtons] = useState(false);
  const [intro, setIntro] = useState('Bem vindo');

  useEffect(() => {
    setTimeout(() => setIntro('Welcome'), 2500);
    setTimeout(() => setIntro('Bienvenido'), 3500);
    setTimeout(() => setIntro('Bienvenue'), 4000);
    setTimeout(() => setIntro('Willkommen'), 4500);
    setTimeout(() => setIntro('いらっしゃいませ'), 5000);
    setTimeout(() => setIntro(<Header />), 5500);
    setTimeout(() => setAttribute(Styles.openHeader), 5400);
    setTimeout(() => setAttribute2(Styles.hiddenH1), 5400);
    setTimeout(() => setRenderButtons(true), 10000);
  }, []);

  const fadeIn = () => (
    <div className={Styles.sizeFont}>
      <hr className={attribute2} />
      {intro}
      <hr className={attribute2} />
    </div>
  );

  return (
    <div className={attribute}>
      {
        fadeIn()
      }
      <div className={Styles.mainButtonsNav}>
        {
        // eslint-disable-next-line react/jsx-boolean-value
        renderButtons && <MainButtonsNav hiddenBack />
        }
      </div>
    </div>
  );
}
