const apiKey = '';
const baseURL = 'https://api.weatherapi.com/v1'

export const weatherAPI = {
    gettingWeather() {
        return fetch(`${baseURL}/current.json?key=${apiKey}&q=togliatti&lang=ru`)
            .then(response => {
                if (response.status === 200) {
                    return response.json()
                }
            })
    },
    gettingForecastWeather() {
        return fetch(`${baseURL}/forecast.json?key=${apiKey}&q=togliatti&lang=ru&days=10`)
            .then(response => {
                if (response.status === 200) {
                    return response.json()
                }
            })
    }
}
