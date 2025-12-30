import React from 'react';

function OpenAccount() {
    const handleSignupRedirect = () => {
        window.location.href = "http://localhost:3001";
    };

    return (
        <div className='container p-5'>
            <div className='row text-center'>
                <h1 className='mt-5'>Open a TradeFlow Account</h1>
                <p className='mt-3'>Modern platforms and apps, ₹0 investments, and ₹20 intraday and F&O trade.</p>
                <button onClick={handleSignupRedirect} type='button' style={{ width: '20%', margin: '0 auto' }} class="btn btn-primary rounded-md p-2 fs-5 rounded-5 mt-4">Sign up Now</button>
            </div>
        </div>
    );
}

export default OpenAccount;