import { useEffect, useRef, useState } from "react"
import { Link } from "react-router"
import { IoIosArrowBack } from "react-icons/io";

const MainMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const menuRef = useRef(null)
    const buttonRef = useRef(null)

    useEffect(() => {
        const handleClickOutSide = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target) && buttonRef.current && !buttonRef.current.contains(e.target)) {
                setIsMenuOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutSide)

        return () => {
            document.removeEventListener('mousedown', handleClickOutSide)
        }
    }, [])

    return (
        <>
            <div ref={menuRef}>
                <div ref={buttonRef} className="bg-white flex items-center justify-between rounded-xl py-1 px-3 cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <p>منوی اصلی</p>
                    <IoIosArrowBack className={`${isMenuOpen && '-rotate-90'} transition-all`} />
                </div>
                {isMenuOpen && (
                    <div>
                        <div className="bg-white rounded-xl py-1 px-3 mt-2">
                            <Link to={'/weathermaps'}>
                                <span>نقشه های هواشناسی</span>
                            </Link>
                        </div>
                        <div className="bg-white rounded-xl py-1 px-3 mt-2">
                            <Link to={'/dailyforecast'}>
                                <span>پیش بینی روزانه</span>
                            </Link>
                        </div>
                        <div className="bg-white rounded-xl py-1 px-3 mt-2">
                            <span>پیش بینی ساعتی</span>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default MainMenu