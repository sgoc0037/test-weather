import React from 'react'
import TopBlockWrapper from './topBlock.js/topBlockWrapper';
import style from './main.module.css';

const Main = (props) => {
    return <div className={style.main}>
        <TopBlockWrapper />
    </div>
}

export default Main;