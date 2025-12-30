import React from 'react';

function Hero() {
    return ( 
        <div className='container mt-5 mb-5'>
            <div className='row mt-5 text-center border-bottom pb-5 mb-5'>
                <h1 className='mt-5' style={{fontSize: '28px'}}>TradeFlow Products</h1>
                <h4 className='mt-3 text-muted' style={{fontSize: '20px'}}>Your one-stop shop for all your trading needs</h4>
                <p className='mt-2 mb-5' style={{fontSize: '16px'}}>Check out our <a href='#' style={{textDecoration: 'none'}}>Investement offering <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></p>
            </div>
        </div>
     );
}

export default Hero;