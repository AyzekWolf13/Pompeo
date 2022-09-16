import React from 'react'
import styles from './index.module.scss'
import prewiev_img from '../../assets/image/prewiev_img.png'

const Previev = () => {
    return (
        <div className={styles.previev}>
            <div className='wrapper'>
                <div className={styles.container}>
                    <div className={styles.previev__content}>
                        <span>Pompeo POttery</span>
                        <h1>Unique Porcelain <sup>&</sup><br />Stone Collection</h1>
                        <p>Unique & modern pottery made by our master in porcelain & stones</p>
                        <a href="#category" className={styles.button}>Shop Collection</a>
                    </div>
                    <div className={styles.previev__image}>
                        <img src={prewiev_img} alt="prewiev" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Previev