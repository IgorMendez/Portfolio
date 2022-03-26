import React from 'react';
import PortfolioContainer from '../components/portfolioContainer';
import Styles from '../styles/portfolio.module.css';
import Header from '../components/header';

export default function Portfolio() {
  return (
    <section className="animation-container">
      <Header />
      <main className={Styles.mainPortContainer}>
        <PortfolioContainer />
      </main>
    </section>
  );
}
