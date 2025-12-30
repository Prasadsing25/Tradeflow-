import React from 'react';

function Universe() {
    return (
        <div className='container mt-5'>
            <div className='row align-items-center text-center'>
                <h1 className='fs-3 text-muted mt-5'>The TradeFlow Universe</h1>
                <p className='mt-3'>Extend your trading and investment experience even further with our partner platforms</p>

                <div className="col-4 p-3 mt-5">
                    <img src="media/images/tfFundHouse.svg" style={{ width: '50%' }} />
                    <p className="mt-3" style={{ color: '#888282ff', fontSize: '12px' }}>Our asset management venture <br />that is creating simple and transparent index <br /> funds to help you save for your goals.</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media/images/sensibullLogo.svg" style={{ width: '50%' }} />
                    <p className="mt-4" style={{ color: '#888282ff', fontSize: '12px' }}>Options trading platform that lets you <br />create strategies, analyze positions, and examine <br /> data points like open interest, Fll/Dll, and more.</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media/images/tijori.svg" style={{ width: '40%' }} />
                    <p className="mt-2" style={{ color: '#888282ff', fontSize: '12px' }}>Investment research platform <br />that offers detailed insights on stocks, <br /> sectors, supply chain and more</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media/images/streakLogo.png" style={{ width: '50%' }} />
                    <p className="mt-4" style={{ color: '#888282ff', fontSize: '12px' }}>Systematic trading platform <br />that allows you to create and backtest <br />stratergies without coding.</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media/images/smallcaseLogo.png" style={{ width: '50%' }} />
                    <p className="mt-4" style={{ color: '#888282ff', fontSize: '12px' }}>Thematic investment platform <br />that helps you invest in diversified <br />baskets of stocks on ETF's.</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media/images/dittoLogo.png" style={{ width: '35%' }} />
                    <p className="mt-4" style={{ color: '#888282ff', fontSize: '12px' }}>Personalized advice on life <br /> and health insurance. No spam <br />and no mis-selling.</p>
                </div>
                <button
                    className="p-2 btn btn-primary fs-5 mt-4 mb-5"
                    style={{ width: "16%", margin: "0 auto", borderRadius: '0', backgroundColor: '#387ED1', fontWeight: '500' }}
                >
                    Sign up for Free
                </button>


            </div>
        </div>
    );
}

export default Universe;