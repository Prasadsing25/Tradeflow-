import React from 'react';

function LeftSection({ imageURL, productName, productDescription, tryDemoLink, learnMoreLink, coinDemoLink, googlePlay, appStore }) {
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
                <div className='col-7 p-3 text-center'>
                    <img src={imageURL} style={{ maxWidth: '100%' }} />
                </div>
                <div className='col-4 p-5 text-left'>
                    <h1 className='fs-2' style={{ color: '#424242' }}>{productName}</h1>
                    <p className='mt-4 text-muted'>{productDescription}</p>
                    <div className='d-flex gap-5'>
                        <LinkWithIcon href={tryDemoLink} text={tryDemoLink} />
                        <LinkWithIcon href={learnMoreLink} text= {learnMoreLink} />
                        <LinkWithIcon href={coinDemoLink} text= {coinDemoLink} />
                    </div>
                    <div className='mt-5'>
                        <a href={googlePlay}><img src='media/images/googlePlayBadge.svg' /></a>
                        <a href={appStore}><img src='media/images/appstoreBadge.svg' /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftSection;