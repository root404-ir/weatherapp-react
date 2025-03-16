import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDailyWeather } from '../redux/dailyForecast/dailyActions'
const DailyForecast = () => {
    const { loading, dailyData } = useSelector(state => state.dailyWeather)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDailyWeather())
    }, [dispatch])


    const weatherItem = dailyData?.list?.map((day, index) => (
        <div key={index} className='border flex flex-col items-center rounded p-4 mt-5'>
            <p>📅 تاریخ: {new Date(day.dt * 1000).toLocaleDateString("fa-IR")}</p>
            <p>🌡 دمای روز: {day.temp.day}°C</p>
            <p>🌙 دمای شب: {day.temp.night}°C</p>
            <p>💧 رطوبت: {day.humidity}%</p>
            <p>🌬 سرعت باد: {day.speed} m/s</p>
            <p>☁️ وضعیت: {day.weather[0].description}</p>
            <img
                key={index}
                src={`https://one-api.ir/weather/?token=634793:67961f262e957&action=icon&id=${day.weather[0].icon}`}
                alt="آیکون هواشناسی"
                width={50}
                height={50}
            />
        </div>
    ))

    return (
        <div>
            <div className='bg-daily'>
                <h3>پیش بینی روزانه هوا</h3>
                {loading ? (
                    <div className="flex justify-center items-center h-screen">
                        <div className="loader"></div>
                    </div>
                ) : (
                    <>
                        <div className='flex'>{weatherItem}</div>
                    </>
                )}
            </div>
        </div>
    )
}

export default DailyForecast