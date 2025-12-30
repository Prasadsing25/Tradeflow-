import React from 'react';

function Hero() {
    return (
        <div className='container'>
            <div className='row p-5 mt-5 mb-5'>
                <h1 className='fs-2 text-center'>We pioneered the discount broking model in India. <br /> Now, we are breaking ground with our technology.</h1>
            </div>
            <div className='row mt-5 p-5 text-muted border-top' style={{ lineHeight: '1.8', fontSize: '1 rem' }}>
                <div className='col-6 p-5'>
                    <p>We launched TradeFlow with a simple mission — to remove every barrier that traders and investors face when entering the world of markets. From high costs to complex platforms and limited guidance, the trading ecosystem needed a fresh, transparent, tech-driven approach. That’s where TradeFlow began.</p>
                    <p>The name TradeFlow reflects our vision: seamless, smooth, and uninterrupted trading experiences, where every user can let their investments “flow” with clarity and confidence.</p>
                    <p>Today, TradeFlow is evolving into a modern trading ecosystem powered by intuitive design, automation, and powerful analytics. Our platform is built to offer lightning-fast order execution, clear insights, and an environment where both beginners and experienced traders can thrive.</p>
                </div>
                <div className='col-6 p-5'>
                    <p>In addition, we drive several open online learning and community-driven initiatives designed to empower traders and investors across the country. Through courses, market explainers, and interactive sessions, TradeFlow aims to build financial awareness and confidence among retail participants.</p>
                    <p>FlowLabs, our innovation and incubation wing, actively supports emerging fintech ideas by partnering with startups that are shaping the future of trading and investment technologies. Our goal is to contribute to a stronger and more inclusive capital market ecosystem.</p>
                    <p>And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us or learn more about our business and product philosophies.</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;