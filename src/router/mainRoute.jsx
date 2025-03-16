import { Route, Routes } from 'react-router'
import Weather from '../component/Weather'
import WeatherMaps from '../component/WeatherMaps'
import DailyForecast from '../component/DailyForecast'

const MainRoute = () => {
    return (
        <Routes>
            <Route path='/' element={<Weather />} />
            <Route path='/weathermaps' element={<WeatherMaps />} />
            <Route path='/dailyforecast' element={<DailyForecast />} />
        </Routes>
    )
}

export default MainRoute