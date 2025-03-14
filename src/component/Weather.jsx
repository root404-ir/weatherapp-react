import { useState } from "react"
import Date from "./Date"

const Weather = () => {
    const [changeBg, setChangeBg] = useState('warm')
    return (
        <>
            <div className={`app-container bg_${changeBg} flex flex-col items-center justify-center gap-20`}>
                <div className="flex flex-col justify-center items-center gap-20 bg-amber-200 rounded-2xl p-10">
                    <div>
                        <div>
                            <form>
                                <input type="text" className="border-b font-bold text-blue-900 text-4xl py-2 px-4 rounded-xl" placeholder="نام شهر یا کشور" />
                            </form>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col items-center gap-2">
                            <Date />
                        </div>
                    </div>
                    <div className="bg-cyan-300 rounded-2xl py-5 px-10">
                        <div>
                            <span>۱۵</span>°C
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3>Cloudy</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Weather