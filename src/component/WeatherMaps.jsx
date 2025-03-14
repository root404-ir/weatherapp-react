import axios from "axios"
import { useEffect, useState } from "react"

const WeatherMaps = () => {
    const [weatherMap, setWeatherMap] = useState('')
    useEffect(() => {
        axios.get('https://one-api.ir/weather/?token=634793:67961f262e957&action=weathermaps&type=temp', {
            headers: {
                "Content-Type": "image/png"
            },
            responseType: "blob"
        }).then(res => {
            const image = URL.createObjectURL(res.data)
            setWeatherMap(image)
        })
        return () => {
            URL.revokeObjectURL(weatherMap)
        }
    }, [weatherMap])

    return (
        <>
            {weatherMap ? (
                <img src={weatherMap} alt="" />
            ) : (
                <h3>در حال دریافت تصویر...</h3>
            )}
        </>
    )
}

export default WeatherMaps