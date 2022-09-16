import React from 'react'
import Categories from '../components/categories/Categories'
// import Footer from '../components/footer/Footer'
import LatestNews from '../components/latest_news/LatestNews'
import OnlineStore from '../components/onlineStore/OnlineStore'
import Potery from '../components/potery/Potery'
import Previev from '../components/prewiev/Previev'
import Products from '../components/product/Products'

const Home = () => {
    return (
        <>
            <Previev />
            <Categories />
            <Products />
            <OnlineStore />
            <Potery />
            <LatestNews />
            {/* <Footer /> */}
        </>
    )
}

export default Home