import React from 'react';
import TopBlock from './topBlock';
import BottomBlock from '../bottomBlock/bottomBlock';
import { connect } from 'react-redux';
import { acceptSetCity, acceptSetForecast } from '../../other/weatherReducer';
import Preloader from '../../Common/Preloader/Preloader.js';
import WeatherCard from '../bottomBlock/weather';

const TopBlockWrapper = (props) => {

    React.useEffect(() => {
        props.acceptSetCity()
        props.acceptSetForecast()
    }, [])

    const getWeekDay = (num = 0) => {

        let date = new Date();
        const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

        return days[date.getDay()+num];
    }

    let windPerSecond = (num) => (num / 60).toFixed(1);

    return <>
        {
            props.current && props.forecast.length > 0
                ? <>
                    <TopBlock
                        city={props.location.name}
                        condition={props.current.condition.text}
                        day={getWeekDay()}
                        temp={props.current.temp_c}
                        icon={props.current.condition.icon}
                        chanceOf={props.chanceOf.rain}
                        humidity={props.current.humidity}
                        windPerSecond={windPerSecond(props.current.wind_kph)}
                    />
                    <BottomBlock>
                    <h2>прогноз на 10 дней</h2>
                        {
                            props.forecast.map(item => {
                                return <WeatherCard
                                    
                                />
                            })
                        }
                    </BottomBlock>
                </>
                : <Preloader />
        }
    </>
}

let mapStateToProps = (state) => {
    return {
        current: state.weather.current,
        location: state.weather.location,
        chanceOf: state.weather.chanceOf,
        forecast: state.weather.forecast
    }
}

export default connect(mapStateToProps, { acceptSetCity, acceptSetForecast })(TopBlockWrapper)