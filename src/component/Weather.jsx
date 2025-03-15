import { useEffect, useState } from "react"
import Date from "./Date"
import { useDispatch, useSelector } from "react-redux"
import { getWeatherInfo } from "../redux/weather/weatherActions"
import sunnyImage from '../assets/icons/sunny.png'
import cloudyImage from '../assets/icons/cloudy.png'
import rainImage from '../assets/icons/rain.png'
import MainMenu from "./MainMenu"
const sunny = sunnyImage
const cloudy = cloudyImage
const rainy = rainImage
const Weather = () => {
    const { loading, data, error } = useSelector(state => state.weather)

    const dispatch = useDispatch()

    const [changeBg, setChangeBg] = useState('warm')
    const [weather, setWeather] = useState('')
    const [weatherIcon, setWeatherIcon] = useState('')
    const [query, setQuery] = useState('')
    const handleGetWeather = (e) => {
        e.preventDefault()
        dispatch(getWeatherInfo(query))
        setQuery('')
    }

    useEffect(() => {
        if (!data.main) {
            return
        }

        const temp = data.main.temp
        if (temp < 12) {
            setChangeBg('cold')
        } else if (temp < 23) {
            setChangeBg('usual')
        } else {
            setChangeBg('warm')
        }

        const weather = data.weather[0].main

        if (weather === 'Clear') {
            setWeather('آفتابی')
            setWeatherIcon(sunny)
        } else if (weather === 'Clouds') {
            setWeather('ابری')
            setWeatherIcon(cloudy)
        } else if (weather === 'Rain') {
            setWeather('بارانی')
            setWeatherIcon(rainy)
        }
    }, [data])

    return (
        <>
            <div className={`app-container bg_${changeBg} number flex flex-col items-center justify-center gap-20`}>
                <div className="absolute right-5 top-5">
                    <MainMenu />
                </div>
                <div className="flex flex-col justify-center items-center gap-20 bg-gray-300 rounded-2xl p-10">
                    <div>
                        <div>
                            <form onSubmit={handleGetWeather}>
                                <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} className="border-b font-bold text-blue-900 text-4xl py-2 px-4 rounded-xl" placeholder={data.name || "نام شهر یا کشور"} />
                            </form>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col items-center gap-2">
                            <Date />
                        </div>
                    </div>
                    {loading ? (
                        <div>
                            <div className="loader"></div>
                        </div>
                    ) : data.main ? (
                        <>
                            <div className="bg-cyan-300 text-2xl font-bold rounded-2xl py-5 px-10">
                                <div>
                                    <span>{Math.round(data.main.temp)}</span>°C
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="flex items-center justify-between">
                                    <img src={weatherIcon} width={100} />
                                    <span>{weather}</span>
                                    <span>|</span>
                                    <h3>{data.weather[0].main}</h3>
                                </div>
                            </div></>
                    ) : error ? (
                        <h3>نام شهر یا کشور را به درستی وارد کنید!</h3>
                    ) : (
                        <h3>لطفا نام شهر یا کشور مورد نظر را وارد کنید</h3>
                    )}

                </div>
            </div>
        </>
    )
}

export default Weather