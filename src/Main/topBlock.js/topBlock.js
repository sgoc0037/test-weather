import React from 'react';
import style from './topBlock.module.css';
import { getTemp } from '../../Common/Addition/AdditonFunction';

const topBlock = (props) => {

    return <div className={style.topBlock}>
        <div className={style.headerInfo}>
            <h2>Тольятти</h2>
            <span>{props.day}</span>
            <span>{props.condition}</span>
        </div>
        <div className={style.additionalInfo}>
            <span className={style.temp}>{getTemp(props.temp)}</span>
            <img src={props.icon} alt='icon' />
            <div className={style.info}>
                <span>Вероятность осадков: <b>{props.chanceOf}%</b></span>
                <span>Влажность: <b>{props.humidity}%</b></span>
                <span>Ветер: <b>{props.windPerSecond} м/c</b></span>
            </div>
        </div>
    </div>
}

export default topBlock;