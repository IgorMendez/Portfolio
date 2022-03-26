import React from 'react';
import { useNavigate } from 'react-router-dom';
import Styles from '../styles/welcome.module.css';

export default function MainButtonsNav() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate('/portfolio')} className={Styles.buttonNavMain} type="button">
        <span>Portfolio</span>
      </button>
      <button onClick={() => window.open('https://www.linkedin.com/in/igormm/', '_blank')} className={Styles.buttonNavMain} type="button">
        <span>LinkedIn</span>
      </button>
      <button onClick={() => window.open('https://github.com/IgorMendez', '_blank')} className={Styles.buttonNavMain} type="button">
        <span>GitHub</span>
      </button>
      <button onClick={() => window.open('https://api.whatsapp.com/send?phone=5514996671135&text=Aguardo%20seu%20contato%20%3A)', '_blank')} className={Styles.buttonNavMain} type="button">
        <span>WhatsApp</span>
      </button>
    </div>
  );
}
