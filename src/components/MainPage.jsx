import React, {useState} from 'react'
import Modal from './Modal'

const MainPage = () => {

    const [modal, setModal] = useState(false);
    return (
        <div className='main'>
            <div className='col col1'>
                <h2>Festivals</h2>
                <p>In Here. <br />If U wanna select more, Click the button!!</p>
                <button onClick={() => { setModal(!modal) }}>More</button>
                {modal === true ? <Modal /> : null}
            </div>
            <div className='col'>
                <div className="card card1"></div>
                <div className="card card2"></div>
                <div className="card card3"></div>
                <div className="card card4"></div>
                <div className="card card5"></div>
                <div className="card card6"></div>
            </div>
        </div>
    )
}


export default MainPage