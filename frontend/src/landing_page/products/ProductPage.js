import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';

function ProductPage() {
    return (
        <>
            <Hero />
            <LeftSection
                imageURL="media/images/kite.png"
                productName="TradeFly"
                productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the TradeFly experience seamlessly on your Android and iOS devices."
                tryDemoLink= "Try Demo"
                learnMoreLink="Learn More"
                googlePlay=""
                appStore="" />
            <RightSection
                imageURL="media/images/products-console.png"
                productName="Console"
                productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
                learnMoreLink="Learn More" />
            <LeftSection
                imageURL="media/images/coin.png"
                productName="Coin"
                productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
                coinDemoLink="Coin" />
            <RightSection
                imageURL="media/images/landing.svg"
                productName="TradeFly Connect API"
                productDescription="The central dashboard for your TradeFlow account. Gain insights into your trades and investments with in-depth reports and visualisations."
                learnMoreLink="TradeFly Connect" />
            <LeftSection
                imageURL="media/images/varsity-products.svg"
                productName="Varsity mobile"
                productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
            />
            <p className='mt-5 mb-5 text-center' style={{fontSize: '20px', fontWeight: '400'}}>
                 Want to know more about our technology stack? Check out the <a href='www.tradeflow.co'>TradeFlow.co</a> blog.
            </p>
            <Universe />
        </>
    );
}

export default ProductPage;