import React, { useRef } from "react";
import "./Home.css";
import { FaMapMarkerAlt } from "react-icons/fa";

const Home: React.FC = () => {
    const pricesRef = useRef<HTMLDivElement>(null);

    const scrollToPrices = () => {
        if (pricesRef.current) {
            pricesRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    };

    return (
        <div className="home-container">
            {/* Левая колонка с видео */}
            <div className="video-section">
                <video autoPlay loop muted playsInline className="background-video">
                    <source src="/mango-bg.mp4" type="video/mp4" />
                    Ваш браузер не поддерживает видео.
                </video>
                <div className="content">
                    <h1>Свежие египетские манго Кейт</h1>
                    <h2>Попробуй вкус настоящего тропического лета</h2>

                    {/* Блок местоположения */}
                    <div className="location-info">
                        <FaMapMarkerAlt className="location-icon" />
                        <span>Москва и Московская область</span>
                    </div>

                    {/* Кнопка Подробнее */}
                    <button className="details-btn" onClick={scrollToPrices}>
                        Подробнее
                    </button>
                </div>
            </div>

            {/* Правая колонка с ценами */}
            <div className="prices-section" ref={pricesRef}>
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
                    onClick={() => window.open("https://t.me/yourusername", "_blank")}
                >
                    Связаться с продавцом
                </button>

                {/* Новая кнопка */}
                <button
                    className="details-btn"
                    onClick={() => window.open("https://t.me/yourcatalog", "_blank")}
                >
                    Перейти в каталог
                </button>

                {/* Инструкция */}
                <div className="mango-instruction">
                    <h3>Как добиться максимальной сочности:</h3>
                    <p>
                        Кладите манго в плотный целлофановый пакет,
                        завяжите его герметично и оставьте при комнатной температуре
                        на 4–5 дней. После этого манго станет мягким, ароматным и
                        максимально сочным.
                    </p>
                </div>

                {/* Футер */}
                <footer className="footer">
                    ИП Гитинов Имам Исраилович<br />
                    ИНН: 051708256250<br />
                    ОГРН: 324050000185503
                </footer>
            </div>
        </div>
    );
};

export default Home;
