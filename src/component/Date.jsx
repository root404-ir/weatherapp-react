import moment from "moment-jalaali"
import { useEffect, useState } from "react"

const weekDays = [
    'یکشنبه',
    'دوشنبه',
    'سه شنبه',
    'چهارشنبه',
    'پنجشنبه',
    'جمعه',
    'شنبه',
]
const yearMonth = [
    'فروردین',
    'اردیبهشت',
    'خرداد',
    'تیر',
    'مرداد',
    'شهریور',
    'مهر',
    'آبان',
    'آذر',
    'دی',
    'بهمن',
    'اسفند',
]
const Date = () => {
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')

    useEffect(() => {
        let m = moment()
        let finalDate = `${weekDays[m.day()]} ${m.jDate()} ${yearMonth[m.jMonth()]} ${m.jYear()}`
        setDate(finalDate)
        setTime(m.format("jYYYY/jM/jD HH:mm"))
    }, [])
    return (
        <div className="flex flex-col items-center gap-3">
            <h3 className="text-3xl">{date}</h3>
            <span className="text-md">{time}</span>
        </div>
    )
}

export default Date