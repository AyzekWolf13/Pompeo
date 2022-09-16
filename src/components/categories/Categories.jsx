import React from 'react'
import styles from './index.module.scss'
import vases from '../../assets/image/vases.png'
import mugs from '../../assets/image/mugs.png'
import plates from '../../assets/image/plates.png'

const Categories = () => {
    return (
        <div id="category" className={styles.categories}>
            <div className='wrapper'>
                <div className={styles.container}>
                    <div className={styles.categories_title}>
                        <span>Product Categories</span>
                        <h2>Porcelain <sup>&</sup>Pottery</h2>
                    </div>
                    <ul className={styles.categories_list}>
                        <li className={styles.categories_item} >
                            <a href="/" className={styles.categories_link} style={{
                                background: '#E4B366',
                                border: `30px solid rgba(0, 0, 0, 0.05)`
                            }}>
                                <img src={vases} alt="vases" />
                                <span>vases</span>
                            </a>
                        </li>
                        <li className={styles.categories_item}>
                            <a href="/" className={styles.categories_link} style={{
                                background: '#F05B10',
                                border: `30px solid rgba(0, 0, 0, 0.05)`
                            }}>
                                <img src={mugs} alt="mugs" />
                                <span>mugs</span>
                            </a>
                        </li>
                        <li className={styles.categories_item}>
                            <a href="/" className={styles.categories_link} style={{
                                background: '#A21010',
                                border: `30px solid rgba(0, 0, 0, 0.05)`
                            }}>
                                <img src={plates} alt="plates" />
                                <span>plates</span>
                            </a>
                        </li>
                    </ul>
                    <div className={styles.categories_content}>
                        <div className={styles.content_item}>
                            <h3>Hand Grafted<br />Pottery since 1990</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere.</p>
                        </div>
                        <div className={styles.content_item}>
                            <h3>We Provide Premium<br />Pottery Produts</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories