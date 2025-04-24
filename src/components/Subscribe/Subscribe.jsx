import React from 'react';
import styles from './Subscribe.module.scss';
import arrow from "../../assets/arrow.svg";
import checkmark from "../../assets/checkmark.svg";
import logo from "../../assets/sun-logo.svg";

const Subscribe = () => {
    return (
        <div className={styles.subscribe}>
            <div className={styles.subscribe__logo}><img src={logo} alt="logo"/>SunnyTour</div>
            <div className={styles.subscribe__wave}>
                <span>П</span>
                <span>о</span>
                <span>д</span>
                <span>п</span>
                <span>и</span>
                <span>с</span>
                <span>к</span>
                <span>а</span>
                <span className={styles.space}></span>
                <span>н</span>
                <span>а</span>
                <span className={styles.space}></span>
                <span>н</span>
                <span>о</span>
                <span>в</span>
                <span>о</span>
                <span>с</span>
                <span>т</span>
                <span>н</span>
                <span>у</span>
                <span>ю</span>
                <span className={styles.space}></span>
                <span>р</span>
                <span>а</span>
                <span>с</span>
                <span>с</span>
                <span>ы</span>
                <span>л</span>
                <span>к</span>
                <span>у</span>
            </div>
            <h6 className={styles.subscribe__subtitle}>Лучшие приложения SunnyTour
                на вашей электронной почте</h6>
            <div className={styles.subscribe__mail}>
                <input
                    className={styles.subscribe__input}
                    type="email"
                    placeholder="Введите E-mail"
                />
                <img className={styles.subscribe__arrow} src={arrow} alt={arrow}/>
            </div>
            <div className={styles.subscribe__sub}>
                <img className={styles.subscribe__sub_checkmark} src={checkmark} alt={checkmark}/>
                <h5 className={styles.subscribe__sub_text}>Подписка оформлена!</h5>
            </div>
        </div>
    );
};

export default Subscribe;