import React from 'react';

function Hero() {
    const handleSignupRedirect = () => {
        // Redirects to the Dashboard app where your Auth logic lives
        window.location.href = "https://tradeflow-dashboard.onrender.com";
    };

    return (
        <div className='container p-5'>
            <div className='row text-center'>
                <img src='media/images/homeHero.png' alt='Hero Image' className='mb-2' />
                <h1 className='mt-5'>Invest in Everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds & more... </p>
                <button
                    onClick={handleSignupRedirect}
                    type='button'
                    style={{ width: '20%', margin: '0 auto' }}
                    className="btn btn-primary rounded-md p-2 fs-5 rounded-5"
                >
                    Signup Now
                </button>
            </div>
        </div>
    );
}

export default Hero;