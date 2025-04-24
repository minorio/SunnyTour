import React from 'react';
import styles from './AboutSection.module.scss';
import sun from '../../assets/sun.png';
import moon from '../../assets/moon.png';

const AboutSection = () => {
    return (
        <section>
            <div className={styles.about}>
                <div className={styles.about__icons}>
                    <img className={styles.about__icons_moon} src={moon} alt={moon}/>
                    <img className={styles.about__icons_sun} src={sun} alt={sun}/>
                </div>
                <div className={styles.about__container}>
                    <h6 className={styles.about__subtitle}>О нас</h6>
                    <h2 className={styles.about__title}>Принципы работы</h2>
                    <div className={styles.about__content}>
                        <div className={styles.about__content_box}>
                            <h3>Удобство</h3>
                            <p>
                                Забудьте о бронировании
                                билетов, отелей и экскурсий.
                                Берём эти вопросы на себя,
                                а вам остаётся только
                                расслабиться и отдыхать.
                            </p>
                        </div>
                        <div className={styles.about__content_box}>
                            <h3>Персональный подход</h3>
                            <p>
                                Мы позаботимся о каждой
                                детали, чтобы отпуск стал
                                незабываемым приключением,
                                полным ярких впечатлений
                                и тёплых воспоминаний.
                            </p>
                        </div>
                        <div className={styles.about__content_box}>
                            <h3>Профессионализм</h3>
                            <p>
                                Учитываем потребности
                                клиента и предлагаем тур,
                                который соответствует
                                пожеланиям и бюджету,
                                честно рассказываем
                                о деталях тура.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.about__background}></div>
        </section>
    );
};

export default AboutSection;