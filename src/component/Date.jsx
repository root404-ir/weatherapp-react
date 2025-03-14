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
        setTime(m.format("jYYYY/jM/jD HH:mm:ss"))
    }, [])
    return (
        <>
            <h3>{date}</h3>
            <span>{time}</span>
        </>
    )
}

export default Date