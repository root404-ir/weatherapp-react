import { Route, Routes } from 'react-router'
import Weather from '../component/Weather'
import WeatherMaps from '../component/WeatherMaps'

const MainRoute = () => {
    return (
        <Routes>
            <Route path='/' element={<Weather />} />
            <Route path='/weathermaps' element={<WeatherMaps />} />
        </Routes>
    )
}

export default MainRoute