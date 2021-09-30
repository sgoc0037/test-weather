import React from 'react';
import style from './weatherCard.module.css';

const WeatherCard = (props)=> {
    return <div className={style.weatherCard}>
        <h3>{props.day}</h3>
        <span>{props.month}</span>
        <imr/>
        <span></span>
        <span></span>
    </div>
}

export default WeatherCard;