import React from 'react';

function Brokerage() {
    return (
        <div className='container mt-4 p-2'>
            <div className='row border-top '>
                <div className='col-8 p-5'>
                    <a href='' style={{ textDecoration: 'none' }}><h3 className='fs-5 text-center mb-4'>Brokerage Calculator</h3></a>
                    <ul className='text-muted' style={{ lineHeight: '2.5', fontSize: '16px' }}>
                        <li>Call & Trade and RMS auto-squareoff: Additional charges of ₹ 50 + GST per order.</li>
                        <li>Digital contract notes will be sent via email.</li>
                        <li>Physical copies of contract notes, if requested, shall be charged ₹ 20 per contract note. Courier charges apply.</li>
                        <li>For NRI account (non-PIS), 0.5% or ₹ 200 per executed order for equity (whichever is lower).</li>
                        <li>For NRI account (PIS), 0.5% or ₹ 200 per executed order for equity (whichever is lower).</li>
                        <li>If the account is in debit balance, any order placed will be charged ₹ 40 per executed order instead of ₹ 20 per executed order.</li>
                        <li>If the account is in debit balance, any order placed will be charged ₹ 40 per executed order instead of ₹ 20 per executed order.</li>
                    </ul>
                </div>
                <div className='col-4 p-5'>
                    <a href='' style={{ textDecoration: 'none' }}><h3 className='fs-5'>List of Charges</h3></a>

                </div>
            </div>
        </div>
    );
}

export default Brokerage;