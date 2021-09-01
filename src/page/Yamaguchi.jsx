import React from 'react';
import "./Yamaguchi.scss";

const Yamaguchi = () => {

    return (
        <div className="Yamaguchi-content">
            <div className="Yamaguchi-text">
                <h2 className="Yamaguchi__title">Yamaguchi<br/>
                    Voice Control </h2>
                <p className="Yamaguchi__desc">Вы&nbsp;можете управлять программами массажа
                    или самим креслом с&nbsp;помощью голосовых команд,
                    приведённых ниже. Коснитесь
                    кратковременно кнопки голосового управления,
                    расположенной на&nbsp;левом подлокотнике,
                    для запуска сеанса голосового управления.
                    <br/><br/>
                    Произнесите одну из&nbsp;доступных команд.
                    Если произнесённая команда распознана,
                    вы&nbsp;услышите ответ и&nbsp;кресло приступит
                    к&nbsp;выполнению запроса.</p>
                <span className="Yamaguchi__say">СКАЖИ:</span>
                <span className="Yamaguchi__say-ok">«ОКЕЙ,ЯМАГУЧИ»</span>
            </div>
            <div className="Yamaguchi-img">
                <div className="Yamaguchi-animate">
                    <div className="anima">
                        <img className="Yamaguchi__img-women" src="/women.png" alt="women"/>
                    </div>
                    <div className="Yamaguchi__ellipse"></div>
                </div>
            </div>
            <div className="Yamaguchi-interface">
                <img className="Yamaguchi-interface__img" src="/interface.png" alt="interface"/>
            </div>
            <div className="Yamaguchi-text-media">
                <span className="Yamaguchi__say">СКАЖИ:</span>
                <span className="Yamaguchi__say-ok">&laquo;ОКЕЙ,&nbsp; ЯМАГУЧИ&raquo;</span>
            </div>
        </div>
    );
};

export default Yamaguchi;