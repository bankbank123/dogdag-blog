import { useState } from "react";
import Trend from '../assets/top-trend-logo.png'
import arUp from '../assets/arrow_up.png'
import '../css/TopTrend.css'

export default function TopTrend() {

    const headText = [
        'แฟนบ่นทำไงดีครับ',
        'แฟนชอบใช้ทำไงดีครับ',
        'Header 3',
        'Header 4',
        'Header 5',
    ]

    const textData = [
        'แฟนขี้บ่นมาก บ่นได้ทุกเรื่อง ฟังหูชา',
        'Lorem ipsum dolor sit amet 2',
        'Lorem ipsum dolor sit amet 3',
        'Lorem ipsum dolor sit amet 4',
        'Lorem ipsum dolor sit amet 5',
    ];


    const [activePage, setActivePage] = useState(0);

    const handlePageChange = (page) => {
        setActivePage(page);
    };

    const prevButton = () => {
        const fade_object = document.getElementById("fade")
        setActivePage(activePage - 1)
        if (activePage <= 0) return setActivePage(4)
        fade_object.classList.add("animate-left")

        fade_object.addEventListener("animationend", () => {
            fade_object.classList.remove("animate-left")
        })
    }

    const nextButton = () => {
        setActivePage(activePage + 1)
        if (activePage >= 4) return setActivePage(0)
    }
    return (
        <div className="top-trend-container">
            <img src={Trend} alt="" className='top-trend-logo' />
            <div className="top-trend-header">
                <p>{headText[activePage]}</p>
            </div>
            <div className="top-trend-content">
                <p id="fade">{textData[activePage]}</p>
                
                <div className="selector-slide">
                    <ul className='selector-ul'>
                        {textData.map((text, index) => (
                            <li
                                key={`page-${index}`}
                                className={`selector-li ${index === activePage ? 'active' : ''}`}
                                onClick={() => handlePageChange(index)}
                            ></li>
                        ))}
                    </ul>
                </div>
            </div>
            <img src={arUp} alt="" className='arrow-left arrow' onClick={prevButton} />
            <img src={arUp} alt="" className='arrow-right arrow' onClick={nextButton} />
        </div>
    )
}
