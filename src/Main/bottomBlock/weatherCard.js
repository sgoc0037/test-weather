import React from 'react';
import style from './weatherCard.module.css';
import { getTemp } from '../../Common/Addition/AdditonFunction';

const WeatherCard = (props) => {

    return <div className={style.weatherCard}>
        <b className={style.changePosition}>{props.date[0]}</b>
        <span className={style.lightGray + ' ' + style.midValue}>{props.date[1]}</span>
        <img src={props.icon} alt='icon' />
        <div>
            <b>{getTemp(props.minTemp)}&deg;</b>
            <span className={style.lightGray}>{getTemp(props.maxTemp)}&deg;</span>
        </div>
        <span className={style.lightGray + ' ' + style.midValue}>{props.condition}</span>
    </div>
}

export default WeatherCard;