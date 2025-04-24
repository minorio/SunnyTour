import React from 'react';
import styles from './Overview.module.scss';

const Overview = () => {
    return (
        <div className={styles.overview}>
            <h1 className={styles.overview__title}><span>SunnyTour</span> —
                команда <span>путешественников</span>,<br/> которые готовы открыть для вас чудеса мира.<br/> Вот
                уже <span>больше чем 7 лет</span> стремимся подарить клиентам незабываемые и насыщенные впечатления.
            </h1>
            <div className={styles.overview__tags}>
                <span className={`${styles.overview__tags_tag} ${styles.tag1}`}>Путешествия</span>
                <span
                    className={`${styles.overview__tags_tag} ${styles.overview__tags_tagEffect} ${styles.tag2}`}>Горы</span>
                <span className={`${styles.overview__tags_tag} ${styles.tag3}`}>Отпуск</span>
                <span className={`${styles.overview__tags_tag} ${styles.tag4}`}>Авиабилеты</span>
                <span
                    className={`${styles.overview__tags_tag} ${styles.overview__tags_tagEffect} ${styles.tag5}`}>Визы</span>
                <span
                    className={`${styles.overview__tags_tag} ${styles.overview__tags_tagEffect} ${styles.tag6}`}>Отдых</span>
                <span className={`${styles.overview__tags_tag} ${styles.tag7}`}>Семья</span>
                <span className={`${styles.overview__tags_tag} ${styles.tag8}`}>Туры</span>
                <span className={`${styles.overview__tags_tag} ${styles.tag9}`}>Экскурсии</span>
                <span className={`${styles.overview__tags_tag} ${styles.tag10}`}>Море</span>
                <span className={`${styles.overview__tags_tag} ${styles.tag11}`}>✈️ ☀️</span>
                <span
                    className={`${styles.overview__tags_tag} ${styles.overview__tags_tagEffect} ${styles.tag12}`}>Друзья</span>
            </div>
        </div>
    );
};

export default Overview;