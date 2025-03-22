import { useContext, useEffect, useState } from "react"
import Date from "./Date"
import { useDispatch, useSelector } from "react-redux"
import { getWeatherInfo } from "../redux/weather/weatherActions"
import MainMenu from "./MainMenu"
import { QueryContext } from "../context/queryContext"
const Weather = () => {
    const { loading, data, error } = useSelector(state => state.weather)

    const dispatch = useDispatch()

    const [changeBg, setChangeBg] = useState('warm')
    const { query, setQuery } = useContext(QueryContext)
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
    }, [data])

    return (
        <>
            <div className={`app-container bg_${changeBg} number flex flex-col items-center justify-center gap-20`}>
                <div className="absolute right-5 top-5">
                    <MainMenu />
                </div>
                <div className="flex md:w-xl w-[300px] flex-col justify-center items-center gap-20 bg-gray-300 rounded-2xl p-10">
                    <div>
                        <div>
                            <form onSubmit={handleGetWeather}>
                                <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} className="border-b md:w-xl w-[300px] font-bold text-blue-900 md:text-4xl text-xl py-2 px-4 rounded-xl" placeholder={"نام شهر یا کشور"} />
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
                                    <h3>{data.weather[0].description}</h3>
                                    <span>|</span>
                                    <h3>{data.weather[0].main}</h3>
                                </div>
                            </div></>
                    ) : error ? (
                        <h3 className="md:text-2xl text-lg">نام شهر یا را به درستی وارد کنید!</h3>
                    ) : (
                        <h3 className="md:text-2xl text-lg">لطفا نام شهر مورد نظر را وارد کنید</h3>
                    )}

                </div>
            </div>
        </>
    )
}

export default Weather