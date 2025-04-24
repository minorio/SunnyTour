import React from 'react';
import styles from './Footer.module.scss';
import logo from "../../assets/sun-logo.svg";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__content}>
                <div className={styles.footer__content_social}>
                    <a href="#instagram">Instagram</a>
                    <a href="#telegram">Telegram</a>
                    <a href="#youtube">Youtube</a>
                </div>
                <div className={styles.footer__content_descr}>
                    <div className={styles.footer__content_logo}><img src={logo} alt="logo"/>SunnyTour</div>
                    <div className={styles.footer__content_title}>
                        Любители приключений, которые готовы поделиться с вами красотой мира
                    </div>
                </div>
                <div className={styles.footer__content_links}>
                    <a href="#home">Главная</a>
                    <a href="#about">О нас</a>
                    <a href="#tours">Туры</a>
                    <a href="#contact">Контакты</a>
                    <a href="#tourism">Туризм</a>
                </div>
            </div>
            <div className={styles.footer__copyright}>
                <p>Политика обработки персональных данных</p>
            </div>
        </footer>
    );
};

export default Footer;