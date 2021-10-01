import React from 'react';
import TopBlock from './topBlock';
import BottomBlock from '../bottomBlock/bottomBlock';
import { connect } from 'react-redux';
import { acceptSetCity, acceptSetForecast } from '../../other/weatherReducer';
import Preloader from '../../Common/Preloader/Preloader.js';
import WeatherCard from '../bottomBlock/weatherCard';

const TopBlockWrapper = (props) => {

    React.useEffect(() => {
        props.acceptSetCity()
        props.acceptSetForecast()
    }, [])

    // const [editMode,setEditMode] = React.useState(false);

    const getForecastDay = (num) => {

        let date = !num ? new Date() : new Date(num);
        let options = {
            weekday: 'short',
            month: 'long',
            day: 'numeric'
        };

        return new Intl.DateTimeFormat('ru-RU', options).format(date).split(',')
    }
    const getDay = () => {

        let options = {
            weekday: 'long'
        }
        return new Intl.DateTimeFormat('ru-RU', options).format(new Date())
    }

    let windPerSecond = (num) => (num / 60).toFixed(1);

    return <>
        {
            props.current && props.forecast.length > 0
                ? <>
                    <TopBlock
                        city={props.location.name}
                        condition={props.current.condition.text}
                        day={getDay()}
                        temp={props.current.temp_c}
                        icon={props.current.condition.icon}
                        chanceOf={props.chanceOf.rain}
                        humidity={props.current.humidity}
                        windPerSecond={windPerSecond(props.current.wind_kph)}
                        // editMode={editMode}
                        // setEditMode={setEditMode}
                    />
                    <BottomBlock>
                        {
                            props.forecast.map(item => {

                                return <WeatherCard
                                    key={item.date_epoch}
                                    date={getForecastDay(item.date)}
                                    condition={item.day.condition.text}
                                    icon={item.day.condition.icon}
                                    minTemp={item.day.mintemp_c}
                                    maxTemp={item.day.maxtemp_c}
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