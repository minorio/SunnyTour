import React from 'react';
import styles from './HeroSection.module.scss';
import SearchForm from "../SearchForm/SearchForm"; 

const HeroSection = () => {
    return (
        <div className={styles.heroSection}>
        <div className={styles.upperText}>
            <h1>Никогда не прекращай</h1>
            </div>
            <div className={styles.upperText}>
            <h1>исследовать мир </h1>
        </div>
        <div className={styles.searchFormContainer}>
            <SearchForm/>
        </div>
          <div className={styles.travelBanner}></div>
          <div className={styles.social}></div>
        </div>
    );
};

export default HeroSection;