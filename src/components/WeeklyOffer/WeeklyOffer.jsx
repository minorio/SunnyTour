import React from 'react';
import styles from './WeeklyOffer.module.scss';
import bg from "../../assets/weeklyOffer.png";
import avatar1 from "../../assets/avatar-1.png";
import avatar2 from "../../assets/avatar-2.png";
import avatar3 from "../../assets/avatar-3.png";
import avatar4 from "../../assets/avatar-4.png";
import arrow from "../../assets/arrow.svg";

const WeeklyOffer = () => {
    return (
        <div className={styles.offer}>
            <h6 className={styles.offer__subtitle}>Предложение недели</h6>
            <h2 className={styles.offer__title}>Тур по Хорватии</h2>
            <div className={styles.offer__box}>
                <div className={styles.offer__side}>
                    <p className={styles.offer__description}>
                        Это путешествие для тех,
                        кто хочет совместить отдых
                        на море, знакомство с природой,
                        историей и культурой Хорватии.
                    </p>
                    <div className={styles.offer__clients}>
                        <div className={styles.offer__clients_img}>
                            <img src={avatar1} alt={avatar1}/>
                            <img src={avatar2} alt={avatar2}/>
                            <img src={avatar3} alt={avatar3}/>
                            <img src={avatar4} alt={avatar4}/>
                        </div>
                        <h6 className={`${styles.offer__subtitle} ${styles.offer__clients_subtitle }`}>1,5 тыс. пользователей
                            посетили Хорватию</h6>
                    </div>
                    <h6 className={`${styles.offer__subtitle} ${styles.offer__details_subtitle }`}>Тур включает</h6>
                    <div className={styles.offer__details}>
                        <span className={styles.offer__detail}>Проживание</span>
                        <span className={styles.offer__detail}>Авиаперелёт</span>
                        <span className={styles.offer__detail}>Питание</span>
                        <span className={styles.offer__detail}>Трансфер</span>
                        <span className={styles.offer__detail}>Гид</span>
                    </div>
                    </div>
                <div className={styles.offer__route}>
                    <img className={styles.offer__route_bg} src={bg} alt={bg}/>
                    <div className={styles.offer__route_arrow}><img src={arrow} alt={arrow}/></div>
                </div>
            </div>
        </div>
    );
};

export default WeeklyOffer;