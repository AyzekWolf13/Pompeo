import React from 'react'
import styles from './index.module.scss'

const Potery = () => {
    return (
        <div className={styles.potery}>
            <div className='wrapper'>
                <div className={styles.container}>
                    <span>Pompeo Pottery</span>
                    <h2>Ready to start shopping?</h2>
                    <p>Lorem ipsum dolor sit amet, <a href="#">consectetur adipiscing elit</a> . <br /> Suspendisse varius enim in eros elementum.</p>
                    <a href="#" className={styles.button}>New Collection</a>
                </div>
            </div>
        </div>
    )
}

export default Potery