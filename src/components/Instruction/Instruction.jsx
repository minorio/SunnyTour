import React, { useEffect, useRef } from 'react';
import styles from './Instruction.module.scss';

const Instruction = () => {
    const sectionRef = useRef(null);
    const stepsRef = useRef([]);
    const observer = useRef(null);

    useEffect(() => {
        observer.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        stepsRef.current.forEach((step, index) => {
                            setTimeout(() => {
                                step?.classList.add(styles.visible);
                            }, index * 400);
                        });
                        observer.current.unobserve(entry.target);
                    }
                });
            },
            {
                rootMargin: '0px',
                threshold: 0.5,
            }
        );

        if (sectionRef.current) {
            observer.current.observe(sectionRef.current);
        }

        stepsRef.current.forEach((step) => {
            step?.classList.remove(styles.visible);
        });

        return () => {
            if (observer.current) {
                observer.current.disconnect();
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className={styles.instruction}>
            <h6 className={styles.instruction__subtitle}>Как это работает</h6>
            <h2 className={styles.instruction__title}>Четыре основных шага к путешествию мечты</h2>
            <div className={styles.instruction__steps}>
                <div ref={(el) => (stepsRef.current[0] = el)} className={styles.instruction__step}>
                    <span className={styles.instruction__step_number}>.01</span>
                    <h3 className={styles.instruction__step_title}>Выбор направления</h3>
                    <p className={styles.instruction__step_description}>
                        Изучите наши предложения
                        в разделе "Туры" или создайте
                        свой маршрут.
                    </p>
                </div>
                <div ref={(el) => (stepsRef.current[1] = el)} className={styles.instruction__step}>
                    <span className={styles.instruction__step_number}>.02</span>
                    <h3 className={styles.instruction__step_title}>Уточнение деталей</h3>
                    <p className={styles.instruction__step_description}>
                        Менеджер свяжется с вами
                        для уточнения деталей
                        и подтверждения заказа.
                    </p>
                </div>
                <div ref={(el) => (stepsRef.current[2] = el)} className={styles.instruction__step}>
                    <span className={styles.instruction__step_number}>.03</span>
                    <h3 className={styles.instruction__step_title}>Оплата</h3>
                    <p className={styles.instruction__step_description}>
                        Заполните форму бронирования,
                        указав необходимую информацию,
                        и произведите оплату.
                    </p>
                </div>
                <div ref={(el) => (stepsRef.current[3] = el)} className={styles.instruction__step}>
                    <span className={styles.instruction__step_number}>.04</span>
                    <h3 className={styles.instruction__step_title}>Получение билетов</h3>
                    <p className={styles.instruction__step_description}>
                        После успешной оплаты
                        мы вышлем информацию
                        о туре и билеты на ваш E-mail.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Instruction;