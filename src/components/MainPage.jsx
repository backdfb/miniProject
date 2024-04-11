import React, {useState} from 'react'
import Modal from './Modal'

const MainPage = () => {

    const [modal, setModal] = useState(false);
    const [fade, setFade] = useState(false);
    const [textVisible, setTextVisible] = useState(true);

    const handleMoreClick = () => {
        if (textVisible) {
            // 텍스트가 보이는 상태에서 클릭 시, 페이드 아웃 후 사라짐
            setFade(true);
            setTimeout(() => {
                setTextVisible(false);
                setFade(false); // fade 상태 초기화
            }, 500);
        } else {
            // 텍스트가 사라진 상태에서 클릭 시, 바로 페이드 인으로 나타남
            setTextVisible(true);
        }
        setModal(!modal);
    }

    return (
        <div className='main'>
            <div className='col col1'>
            {textVisible && <h2 className={fade ? 'fade-out' : ''}>Festivals</h2>}
                {textVisible && <p className={fade ? 'fade-out' : ''}>In Here. <br />If U wanna select more, Click the button!!</p>}
                <button onClick={handleMoreClick}>More</button>
                {modal === true ? <Modal /> : null}
            </div>
            <div className='col'>
                {[1, 2, 3, 4, 5, 6].map((card) => (
                    <div className={`card card${card}`} key={card}>
                        <div className="overlay">
                            <div className="arrow-right"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default MainPage