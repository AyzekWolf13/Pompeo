import React from 'react'
import styles from './index.module.scss'
import images from '../../assets/svg/post.svg'

const LatestNews = () => {
    return (
        <div className={styles.latestNews}>
            <div className='wrapper'>
                <div className={styles.container}>
                    <img src={images} alt="images" />
                    <span>Latest news</span>
                    <h2>Latest news<sup>&</sup>New updates</h2>
                    <div className={styles.form}>
                        <div className={styles.form_input}>
                            <input type="email" placeholder='Enter your email' />
                            <button>SUBSCRIBE</button>
                        </div>
                        <div className={styles.form_chb}>
                            <input type="checkbox" className={styles.checkbox} id='checkbox' name='checkbox' value='now'/>
                            <label for="checkbox">Sign up for our newsletter</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestNews