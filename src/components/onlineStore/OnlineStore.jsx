import React from 'react'
import { Link } from 'react-router-dom'
import Cart from '../cart/Cart'
import styles from './index.module.scss'
import { PotteryCollection } from '../../data/PotteryCollection'

const OnlineStore = () => {
    window.scroll(0, 0)
    return (
        <div id='shop' className={styles.onlineStore}>
            <div className='wrapper'>
                <div className={styles.container}>
                    <div className={styles.sectionTitle}>
                        <span>Our online store</span>
                        <h2>Pottery Collection</h2>
                    </div>
                    <div className={styles.carts}>
                        {PotteryCollection.map((cart, i) => (
                            <Cart cartImg={cart.image} title={cart.name} price={cart.price} key={i} />
                        ))}
                    </div>
                    {window.location.pathname !== '/store' ? <Link to="/store" className={styles.button}>View All Products</Link> : ''}
                    {/* <Link to="store" className={styles.button}>View All Products</Link> */}
                </div>
            </div>
        </div>
    )
}

export default OnlineStore