import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Styles from '../styles/welcome.module.css';

export default function MainButtonsNav({ hiddenPort, hiddenBack }) {
  const navigate = useNavigate();

  return (
    <div>
      <button hidden={hiddenPort} onClick={() => navigate('/portfolio')} className={Styles.buttonNavMain} type="button">
        <span>Portfolio</span>
      </button>
      <button hidden={hiddenBack} onClick={() => navigate('/')} className={Styles.buttonNavMain} type="button">
        <span>Home</span>
      </button>
      <button onClick={() => navigate('/curriculo')} className={Styles.buttonNavMain} type="button">
        <span>Curriculo</span>
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

MainButtonsNav.propTypes = {
  hiddenPort: PropTypes.bool.isRequired,
  hiddenBack: PropTypes.bool.isRequired,
};
