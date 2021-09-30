import React from 'react';
import style from './topBlock.module.css';

const topBlock = (props) => {
    
    return <div className={style.topBlock}>
        <div className={style.headerInfo}>
            <h2>{props.city}</h2>
            <span>{props.day}</span>
            <span>{props.condition}</span>
            <form className={style.changeCity}>
                <input />
            </form>
        </div>
        <div className={style.additionalInfo}>
            <span>{props.temp}</span>
            <img src={props.icon} alt='icon' />
            <span>Вероятность осадков: {props.chanceOf}%</span>
            <span>Влажность: {props.humidity}%</span>
            <span>Ветер{props.windPerSecond}м/c</span>
        </div>
    </div>
}

export default topBlock;