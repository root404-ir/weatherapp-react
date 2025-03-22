import { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDailyWeather } from '../redux/dailyForecast/dailyActions'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import cloudGif from '../assets/icons/gif/Animation - 1742205598510.gif'
import calendarGif from '../assets/icons/gif/Animation - 1742213343191.gif'
import tempGif from '../assets/icons/gif/Animation - 1742220601938.gif'
import windGif from '../assets/icons/gif/Animation - 1742222892071.gif'
import humidityGif from '../assets/icons/gif/Animation - 1742222547924.gif'
import nightGif from '../assets/icons/gif/Animation - 1742222727754.gif'
import { QueryContext } from '../context/queryContext';

const DailyForecast = () => {
    const { dailyData } = useSelector(state => state.dailyWeather)

    const dispatch = useDispatch()
    const { query, setQuery } = useContext(QueryContext)
    useEffect(() => {
        dispatch(getDailyWeather())
        const interval = setInterval(() => {
            dispatch(getDailyWeather())
        }, 5 * 60 * 1000)

        return () => clearInterval(interval)
    }, [dispatch])

    const handleSendCity = (e) => {
        e.preventDefault()
        dispatch(getDailyWeather(query))
        setQuery('')
    }

    return (
        <>
            <div className='bg-daily min-h-screen flex flex-col'>
                <div className='container my-0 mx-auto'>
                    <div className='flex justify-between mt-10'>
                        <h3 className='text-white font-bold text-2xl'>پیش بینی روزانه هوا</h3>
                        <form onSubmit={handleSendCity}>
                            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder={'نام شهر مورد نظر را وارد کنید...'} className='bg-white border-b border-b-gray-600 rounded-lg py-1 px-2 w-64 transition-all focus:outline-0 focus:w-80' />
                        </form>
                    </div>
                    <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 text-white gap-3'>
                        {dailyData?.list?.map((day, index) => (
                            <div key={index} className='border backdrop-blur-3xl  rounded flex flex-col items-center justify-center gap-2 p-4 mt-5'>
                                <div className='flex items-center'>
                                    <img src={calendarGif} alt="" width={50} height={50} />
                                    <p> تاریخ: {new Date(day.dt * 1000).toLocaleDateString("fa-IR")}</p>
                                </div>
                                <div className='flex items-center'>
                                    <img src={cloudGif} alt="" width={50} height={50} />
                                    <p> وضعیت: {day.weather[0].description}</p>
                                </div>
                                <img
                                    src={`https://one-api.ir/weather/?token=634793:67961f262e957&action=icon&id=${day.weather[0].icon}`}
                                    alt="آیکون هواشناسی"
                                    width={200}
                                    height={300}
                                />
                                <div className='flex items-center'>
                                    <img src={tempGif} alt="" width={50} height={50} />
                                    <p>دمای روز: {day.temp.day}°C</p>
                                </div>
                                <div className='flex items-center'>
                                    <img src={nightGif} alt="" width={40} height={40} />
                                    <p>دمای شب: {day.temp.night}°C</p>
                                </div>
                                <div className='flex items-center'>
                                    <img src={humidityGif} alt="" width={50} height={50} />
                                    <p>رطوبت: {day.humidity}%</p>
                                </div>
                                <div className='flex items-center'>
                                    <img src={windGif} alt="" width={70} height={70} />
                                    <p>سرعت باد: {day.speed} m/s</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div >
            </div>
        </>
    )
}

export default DailyForecast