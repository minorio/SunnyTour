import React, { useEffect, useRef, useState } from 'react';
import styles from './Reviews.module.scss';
import bg from '../../assets/subtract.png';
import quotes from '../../assets/quotes.png';
import avatar1 from '../../assets/reviews-avatar-1.png';
import avatar2 from '../../assets/reviews-avatar-2.png';
import avatar3 from '../../assets/reviews-avatar-3.png';

const Reviews = () => {
    const reviews = [
        {
            name: "Ксения",
            username: "@ksulun",
            avatar: avatar1,
            quotes: quotes,
            fullText: "Впечатлена профессионализмом \n" +
                "менеджера, а так же вниманием\n" +
                "к деталям. Путешествие превзошло \n" +
                "все ожидания, получила незабываемые\n" +
                "впечатления и много позитивных эмоций.  ",
            text: "",
        },
        {
            name: "Виктор",
            username: "@VictorSt",
            avatar: avatar2,
            quotes: quotes,
            fullText: "Прекрасный опыт организации \n" +
                "отпуска от начала и до конца.  \n" +
                "Рекомендую всем, кто ищет \n" +
                "надежное турагентство.",
            text: "",
        },
        {
            name: "Андрей",
            username: "@AndreiSim",
            avatar: avatar3,
            quotes: quotes,
            fullText: "Спасибо SunnyTour за незабываемое \n" +
                "путешествие в Испанию! Все было \n" +
                "отлично: от бронирования билетов \n" +
                "до подбора экскурсий. Рекомендую!",
            text: "",
        },
    ];

    const sectionRef = useRef(null);
    const observer = useRef(null);
    const [animatedReviews, setAnimatedReviews] = useState([...reviews]);

    useEffect(() => {
        observer.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        reviews.forEach((review, index) => {
                            let i = 0;
                            const intervalId = setInterval(() => {
                                setAnimatedReviews((prevReviews) => {
                                    const updatedReviews = [...prevReviews];
                                    updatedReviews[index].text = review.fullText.substring(0, i);
                                    return updatedReviews;
                                });
                                i++;
                                if (i > review.fullText.length) {
                                    clearInterval(intervalId);
                                }
                            }, 50);
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

        return () => {
            if (observer.current) {
                observer.current.disconnect();
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className={styles.reviews}>
            <h6 className={styles.reviews__subtitle}>То, что говорят о нас клиенты</h6>
            <h2 className={styles.reviews__title}>Отзывы</h2>
            <div className={styles.reviews__cards}>
                {animatedReviews.map((review, index) => (
                    <div key={index} className={styles.review__card}>
                        <img className={styles.reviews__card_bg} src={bg} alt={bg}/>
                        <img className={styles.reviews__card_quotes} src={review.quotes} alt={review.quotes}/>
                        <p className={styles.reviews__card_text}>{review.text}</p>
                        <div className={styles.reviews__card_author}>
                            <img className={styles.reviews__card_authorAvatar} src={review.avatar} alt={review.avatar}/>
                            <div className={styles.reviews__card_authorBox}>
                                <span className={styles.reviews__card_authorName}>{review.name}</span>
                                <span className={styles.reviews__card_authorUsername}>{review.username}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Reviews;