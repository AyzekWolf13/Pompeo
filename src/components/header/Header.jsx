import React from 'react'
import styles from './Header.module.scss'
import logo from '../../assets/image/logo.png'
import basket_icon from '../../assets/svg/basket.svg'
import { Link } from 'react-router-dom'


const Header = () => {

    return (
        <header className={styles.header}>
            <div className='wrapper'>
                <div className={styles.container}>
                    <div>
                        <img src={logo} alt="logo" className={styles.logo} />
                    </div>
                    <nav className={styles.menu}>
                        <ul>
                            <li><Link to="/home" style={{ color: '#AC1313' }}>Home</Link></li>
                            <li>{window.location.pathname !== '/store' ? <Link to="/home#about">About</Link> : <a href="#about">About</a>}</li>
                            <li><a href="#shop">Shop</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li><a href="#basket"><img src={basket_icon} alt="basket" style={{ marginRight: '6px' }} />Cart</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header