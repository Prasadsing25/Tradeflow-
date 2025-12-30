import React from 'react';

function Hero() {
    return (
        <div className='container mt-4 p-2'>
            <div className='row text-center '>
                <h1 className='mt-5' style={{ color: '#424242', fontSize: '30px' }}>Charges</h1>
                <p className='mt-2 mb-5' style={{ color: '#9B9B9B', fontSize: '22px' }}>List of all Charges and Taxes</p>

                <div className='row mt-5 text-center'>
                    <div className='col-4 mt-5'>
                        <img src='media/images/pricing0.svg' style={{width: '70%'}}/>
                        <h1 className='fs-3 text-center' style={{color: '#424242'}}>Free equity Delivery</h1>
                        <p className='mt-4' style={{color: '#666666'}}>All equity delivery investments (NSE, BSE),<br/> are absolutely free — ₹ 0 brokerage.</p>
                    </div>
                    <div className='col-4 mt-5'>
                        <img src='media/images/pricingIntraday.svg' style={{width: '70%'}}/>
                        <h1 className='fs-3 text-center' style={{color: '#424242'}}>Intraday and F&O trades</h1>
                        <p className='mt-4' style={{color: '#666666'}}>Flat ₹ 20 or 0.03% (whichever is lower) <br/> per executed order on intraday trades across<br/> equity, currency, and commodity trades. Flat <br/>₹20 on all option trades.</p>
                    </div>
                    <div className='col-4 mt-5 mb-5'>
                        <img src='media/images/pricing0.svg' style={{width: '70%'}}/>
                        <h1 className='fs-3 text-center' style={{color: '#424242'}}>Free direct MF</h1>
                        <p className='mt-4' style={{color: '#666666'}}>All direct mutual fund investments are<br/> absolutely free — ₹ 0 commissions & DP <br/>charges.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;