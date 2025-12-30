import React from 'react';

function RightSection({ imageURL, productName, productDescription, learnMoreLink}) {
    const LinkWithIcon = ({ href, text }) => {
        if (!text) return null;
        return (
            <a href={href} className='ml-1' style={{textDecoration: 'none'}}>
                {text} &nbsp;
                {text && <i class="fa fa-long-arrow-right" aria-hidden="true"></i>}
            </a>
        )
    }
    return ( 
        <div className='container mt-5'>
            <div className='row align-items-center'>
                <div className='col-4 p-5 text-right'>
                    <h1 className='fs-2' style={{ color: '#424242' }}>{productName}</h1>
                    <p className='mt-4 text-muted'>{productDescription}</p>
                    <div className='d-flex gap-5'>
                        <LinkWithIcon href={learnMoreLink} text= {learnMoreLink} />
                    </div>
                </div>
                <div className='col-7 p-3 text-center'>
                    <img src={imageURL} style={{ maxWidth: '100%' }} />
                </div>
            </div>
        </div>
     );
}

export default RightSection;