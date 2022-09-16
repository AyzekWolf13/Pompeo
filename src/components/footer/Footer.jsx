import React from 'react'
import styles from './index.module.scss'
import logo from '../../assets/image/logo.png'
import emailIcon from '../../assets/svg/email.svg'
import localIcon from '../../assets/svg/location.svg'
import foneIcon from '../../assets/svg/tel.svg'

const Footer = () => {
    return (
        <footer>
            <div className={styles.content}>
                <div className='wrapper'>
                    <div className={styles.container}>
                        <div className={styles.prewiev}>
                            <img src={logo} alt="logo" />
                            <p>I have always striven to fix beauty in wood, stone,<br />glass or pottery, that has been my creed.</p>
                        </div>
                        <div className={styles.list}>
                            <div className={styles.item}>
                                <a href="mailto:pompeopotery@gmail.com">
                                    <img src={emailIcon} alt="email" />
                                </a>
                                <h4>EMAIL</h4>
                                <p>pompeopotery@gmail.com</p>
                            </div>
                            <div id='contact' className={styles.item}>
                                <a href="mailto:pompeopotery@gmail.com">
                                    <img src={localIcon} alt="location" />
                                </a>
                                <h4>FIND</h4>
                                <p>Central Park, Manhattan<br />New York, 1101</p>
                            </div>
                            <div className={styles.item}>
                                <a href="tel:+1 292 345 678">
                                    <img src={foneIcon} alt="fone" />
                                </a>
                                <h4>CALL</h4>
                                <p>+1 292 345 678</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                <div className='wrapper'>
                    <div>
                        <p>Template design by <span> Dorian Hoxha </span> - <span> Image License Info </span> Image License Info <span> Webflow </span></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer