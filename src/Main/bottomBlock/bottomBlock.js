import React from 'react';
import style from './bottomBlock.module.css';

const BottomBlock = ({ children }) => {
    return <div className={style.bottomBlock}>
        {children}
    </div>
}

export default BottomBlock;