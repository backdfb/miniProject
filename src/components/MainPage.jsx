import React, {useState} from 'react'
import {useSpring, animated} from '@react-spring/web'
import styles from '../styles.module.css'

const MainPage = () => {

    const [flipped, set] = useState(false)
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 },
        delay: 250,
    })
    return (
        <div className='main'>
            <div className='col col1'>
                <h2>Festivals</h2>
                <p>In Here. <br />If U wanna select more, Click the Image!!</p>               
            </div>
            <div className={styles.container} onClick={() => set(state => !state)}>
                <animated.div
                    className={`${styles.c} ${styles.card1}`}
                    style={{ opacity: opacity.to(o => 1 - o), transform }}
                />
                <animated.div
                    className={`${styles.c} ${styles.card2}`}
                    style={{
                    opacity,
                    transform,
                    rotateX: '180deg',
                    }}
                />
            </div>
        </div>
    )
}


export default MainPage