import React from 'react';
import styles from './Locations.module.scss';
import bergen from "../../assets/bergen.png";
import kotor from "../../assets/kotor.png";
import brayes from "../../assets/brayes.png";
import plitvice from "../../assets/plitvice.png";
import arrow from "../../assets/arrow.svg";

const Locations = () => {
    return (
        <div className={styles.locations}>
            <h6 className={styles.locations__subtitle}>Популярные локации</h6>
            <h3 className={styles.locations__title}>Европа</h3>
            <div className={styles.locations__grid}>
                <div className={styles.locations__row1}>
                    <div className={styles.locations__card}>
                        <img src={bergen} alt={bergen} className={styles.locations__card_img}/>
                        <div className={styles.locations__card_content}>
                            <h4>Берген, Норвегия</h4>
                            <img src={arrow} alt="arrow"/>
                        </div>
                    </div>
                    <div className={styles.locations__card}>
                        <img src={kotor} alt={kotor} className={styles.locations__card_img}/>
                        <div className={styles.locations__card_content}>
                            <h4>Залив Котор, Черногория</h4>
                            <img src={arrow} alt="arrow"/>
                        </div>
                    </div>
                </div>
                <div className={styles.locations__row2}>
                    <div className={styles.locations__card}>
                        <img src={brayes} alt={brayes} className={styles.locations__card_img}/>
                        <div className={styles.locations__card_content}>
                            <h4>Озеро Браеск, Италия</h4>
                            <img src={arrow} alt="arrow"/>
                        </div>
                    </div>
                    <div className={styles.locations__card}>
                        <img src={plitvice} alt={plitvice} className={styles.locations__card_img}/>
                        <div className={styles.locations__card_content}>
                            <h4>Плитвицкие озера, Хорватия</h4>
                            <img src={arrow} alt="arrow"/>
                        </div>
                    </div>
                </div>
                </div>
            </div>
    );
};

export default Locations;