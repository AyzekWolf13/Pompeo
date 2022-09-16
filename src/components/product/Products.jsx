import React from 'react'
import styles from './index.module.scss'
import goldVaze from '../../assets/image/IMAGE (5).png'
import orangeVaze from '../../assets/image/IMAGE (6).png'

const Products = () => {
    return (
        <div id='about' className={styles.products}>
            <div className='wrapper'>
                <div className={styles.container}>
                    <div className={styles.product}>
                        <div className={styles.image}>
                            <img src={goldVaze} alt="Gold & Black Vaze" />
                        </div>
                        <div className={styles.content}>
                            <h3>Gold & Black Pottery</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore dolore aua. Ut enim ad minim veniam, quis nostrud exercitationulco laboris nisi ut aliquip ex ea commodo consequatuisaute.</p>
                            <a href="#">View Details</a>
                        </div>
                    </div>
                    <div className={styles.product} style={{ flexDirection: 'row-reverse', justifyContent: 'flex-end' }}>
                        <div className={styles.image}>
                            <img src={orangeVaze} alt="Gold & Black Vaze" />
                        </div>
                        <div className={styles.content}>
                            <h3>Gold & Black Pottery</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore dolore aua. Ut enim ad minim veniam, quis nostrud exercitationulco laboris nisi ut aliquip ex ea commodo consequatuisaute.</p>
                            <a href="#">View Details</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products