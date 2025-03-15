import { useEffect, useState, useTransition } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getWeatherMap } from "../redux/weatherMap/mapActions"

const WeatherMaps = () => {

    const { loading, mapData, error } = useSelector(state => state.weatherMap)
    console.log([loading, mapData, error]);

    const dispatch = useDispatch()
    const [tab, setTab] = useState('pressure')
    const [isPending, startTransition] = useTransition()
    const handleSwitchTab = (thisTab) => {
        startTransition(() => {
            setTab(thisTab)
        })
    }
    useEffect(() => {
        dispatch(getWeatherMap(tab, mapData))
    }, [dispatch, tab])

    return (
        <div>
            {loading ? (
                <h3>درحال بارگیری داده ها...</h3>
            ) : mapData ? (
                <div>
                    <div className="flex justify-around my-5">
                        <button className={`border border-gray-500 py-1 px-2 rounded-xl cursor-pointer ${tab === 'pressure' && 'bg-black text-white'}`} onClick={() => handleSwitchTab('pressure')}>فشار جوی</button>
                        <button className={`border border-gray-500 py-1 px-2 rounded-xl cursor-pointer ${tab === 'precipitation' && 'bg-black text-white'}`} onClick={() => handleSwitchTab('precipitation')}>بارش</button>
                        <button className={`border border-gray-500 py-1 px-2 rounded-xl cursor-pointer ${tab === 'clouds' && 'bg-black text-white'}`} onClick={() => handleSwitchTab('clouds')}>پراکندگی ابرها</button>
                        <button className={`border border-gray-500 py-1 px-2 rounded-xl cursor-pointer ${tab === 'winds' && 'bg-black text-white'}`} onClick={() => handleSwitchTab('winds')}>پراکندگی و شدت وزش بادها</button>
                        <button className={`border border-gray-500 py-1 px-2 rounded-xl cursor-pointer ${tab === 'winds_dir' && 'bg-black text-white'}`} onClick={() => handleSwitchTab('winds_dir')}>پراکندگی، شدت و جهت وزش بادها</button>
                        <button className={`border border-gray-500 py-1 px-2 rounded-xl cursor-pointer ${tab === 'temp' && 'bg-black text-white'}`} onClick={() => handleSwitchTab('temp')}>پراکندگی و شدت دما</button>
                    </div>
                    <img src={mapData} alt="" className="w-full" />
                </div >
            ) : error && (
                <h3>{error}</h3>
            )}
        </div>
    )
}

export default WeatherMaps