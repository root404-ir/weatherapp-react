import { useState } from "react"
import { Link } from "react-router"
import { IoIosArrowBack } from "react-icons/io";

const MainMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <>
            <div>
                <div className="bg-white flex items-center justify-between rounded-xl py-1 px-3 cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <p>منوی اصلی</p>
                    <IoIosArrowBack className={`${isMenuOpen && '-rotate-90'} transition-all`} />
                </div>
                {isMenuOpen && (
                    <>
                        <div className="bg-white rounded-xl py-1 px-3 mt-2">
                            <Link to={'/weathermaps'}>
                                <span>نقشه های هواشناسی</span>
                            </Link>
                        </div>
                        <div className="bg-white rounded-xl py-1 px-3 mt-2">
                            <span>پیش بینی روزانه</span>
                        </div>
                        <div className="bg-white rounded-xl py-1 px-3 mt-2">
                            <span>پیش بینی ساعتی</span>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}

export default MainMenu