import React from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/sun-logo.svg';
import plus from '../../assets/plus.svg';
import profile from '../../assets/profile.svg';
import network from '../../assets/network.svg';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <div className={styles.header__logo}><img src={logo} alt="logo"/>SunnyTour</div>

                <nav className={styles.header__nav}>
                    <ul>
                        <li><a href="#">О нас</a></li>
                        <li><a href="#">Туры</a></li>
                        <li><a href="#">Туристам</a></li>
                        <li><a href="#">Контакты</a></li>
                    </ul>
                </nav>

                <div className={styles.header__actions}>
                    <button className={styles.header__network}><img src={network} alt="network"/></button>
                    <div className={styles.header__toggle}>
                        <input id="language-toggle" type="checkbox" className={styles.header__toggleInput}/>
                        <label htmlFor="language-toggle" className={styles.header__toggleLabel}></label>
                        <span className={styles['header__toggleText--on']}>RU</span>
                        <span className={styles['header__toggleText--off']}>EN</span>
                    </div>
                    <button className={styles.header__plus}><img src={plus} alt="plus"/></button>
                    <button className={styles.header__login}>Войти<img src={profile} alt="profile"/></button>
                </div>
            </div>
        </header>
    );
};

export default Header;