import React from 'react'
import styles from './index.module.scss'

const Cart = ({ cartImg, title, price }) => {
    return (
        <div className={styles.container}>
            <a href="#01">
                <div className={styles.image}>
                    <img src={cartImg} alt={title} />
                </div>
                <div className={styles.content}>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.price}>$ <span>{price}</span> USD</div>
                </div>
            </a>
        </div>
    )
}

export default Cart