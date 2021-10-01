import React from 'react';
import style from './weatherCard.module.css';

const WeatherCard = (props) => {

    return <div className={style.weatherCard}>
        <b className={style.changePosition}>{props.date[0]}</b>
        <span className={style.lightGray+ ' ' + style.midValue}>{props.date[1]}</span>
        <img src={props.icon} alt='icon' />
        <div>
            <b>{props.minTemp}&deg;</b>
            <span className={style.lightGray}>{props.maxTemp}&deg;</span>
        </div>
        <span className={style.lightGray+ ' ' + style.midValue}>{props.condition}</span>
    </div>
}

export default WeatherCard;