import React from 'react';
import style from './bottomBlock.module.css';

const BottomBlock = ({ children }) => {
    return <div className={style.bottomBlock}>
        <h2 className={style.title}>Прогноз на 10 дней</h2>
        {children}
    </div>
}

export default BottomBlock;