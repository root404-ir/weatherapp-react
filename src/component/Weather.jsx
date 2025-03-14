import { useEffect, useState } from "react"
import Date from "./Date"
import { useDispatch, useSelector } from "react-redux"
import { getWeatherInfo } from "../redux/weather/weatherActions"

const Weather = () => {
    const { loading, data, error } = useSelector(state => state)
    const dispatch = useDispatch()
    console.log([loading, data, error]);

    const [changeBg, setChangeBg] = useState('warm')
    const [weather, setWeather] = useState('')
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
        } else if (weather === 'Clouds') {
            setWeather('ابری')
        } else if (weather === 'Rain') {
            setWeather('بارانی')
        }
    }, [data])

    return (
        <>
            <div className={`app-container bg_${changeBg} flex flex-col items-center justify-center gap-20`}>
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
                            <span>در حال بارگزاری...</span>
                        </div>
                    ) : data.main ? (
                        <>
                            <div className="bg-cyan-300 rounded-2xl py-5 px-10">
                                <div>
                                    <span>{Math.round(data.main.temp)}</span>°C
                                </div>
                            </div>
                            <div>
                                <div className="flex gap-2">
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