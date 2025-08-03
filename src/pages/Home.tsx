import React, { useRef, useEffect } from "react";
import "./Home.css";
import { FaMapMarkerAlt } from "react-icons/fa";

const Home: React.FC = () => {
    const pricesRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    const scrollToPrices = () => {
        if (pricesRef.current) {
            pricesRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            const playPromise = video.play();
            if (playPromise !== undefined) {
                playPromise.catch(() => {
                    video.muted = true;
                    video.play().catch(() => {});
                });
            }
        }
    }, []);

    return (
        <div className="home-container">
            {/* Фоновое видео */}
            <video
                ref={videoRef}
                autoPlay
                loop
                muted={true}
                playsInline
                webkit-playsinline="true"
                className="background-video"
            >
                <source src="/mango-bg.mp4" type="video/mp4" />
                Ваш браузер не поддерживает видео.
            </video>

            {/* Секция контента */}
            <section className="hero-section">
                <div className="content">
                    <h1>Свежее манго</h1>
                    <h2>
                        Египетский сорт "Кейт" <br />
                        Попробуй вкус настоящего тропического лета
                        <br />
                    </h2>
                    <h2></h2>

                    <div className="location-info">
                        <FaMapMarkerAlt className="location-icon" />
                        <span>Москва и Московская область</span>
                    </div>

                    <button className="details-btn" onClick={scrollToPrices}>
                        Подробнее
                    </button>
                </div>
            </section>

            {/* Секция с ценами */}
            <section className="prices-section" ref={pricesRef}>
                <h2>Цены</h2>
                <table>
                    <tbody>
                    <tr>
                        <td>Менее 100 кг</td>
                        <td>330 ₽/кг</td>
                    </tr>
                    <tr>
                        <td>От 100 кг (опт)</td>
                        <td>300 ₽/кг</td>
                    </tr>
                    </tbody>
                </table>

                <button
                    className="contact-btn"
                    onClick={() => window.open("https://t.me/islamgitinov", "_blank")}
                >
                    Связаться с продавцом
                </button>

                <button
                    className="details-btn catalog-btn"
                    onClick={() => window.open("https://t.me/mangomsk1", "_blank")}
                >
                    Перейти в каталог
                </button>

                <div className="mango-instruction">
                    <h3>Как добиться максимальной сочности:</h3>
                    <p>
                        Кладите манго в плотный целлофановый пакет, завяжите его
                        герметично и оставьте при комнатной температуре на 4–5
                        дней. После этого манго станет мягким, ароматным и
                        максимально сочным.
                    </p>
                </div>

                <footer className="footer">
                    <a
                        href="https://www.rusprofile.ru/ip/324050000185503"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                    >
                        ИП Гитинов Имам Исраилович
                        <br />
                        ИНН: 051708256250
                        <br />
                        ОГРН: 324050000185503
                    </a>
                </footer>
            </section>
        </div>
    );
};

export default Home;
