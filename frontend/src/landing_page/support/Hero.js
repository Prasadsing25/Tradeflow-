import React from 'react';

function Hero() {
    return (
        <section className='container-fluid' id='supportHero'>
            <div className='p-5' id='supportWrapper'>
                <h4>Support Portal</h4>
                <button type="button" class="btn btn-outline-light"><a href='' style={{color: 'black', fontSize: 'large', fontWeight: '400', textDecoration: 'none'}}>Track Tickets</a></button>
            </div>
            <div className='row p-5 ' id='supportInput'>
                <div className='col-6' >
                    <h3 className='fs-4'>Search for an answer or <br/>browse help topics to create a ticket</h3>
                    <input type='text' placeholder='Eg. how do I activate F&O, why is my order getting rejected.' /><br />
                    <a href=''><s>Trace Account opening</s></a>&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href=''><s>Trace Segment Activation</s></a>&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href=''><s>Intraday</s></a><br />
                    <a href=''><s>margins</s></a>&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href=''><s>Tradefly User manual</s></a>
                </div>
                <div className='col-6' id='supportFeature'>
                    <h3 className='text-white'>Featured</h3>
                    <ol style={{lineHeight: '2.5'}}>
                        <li><a href=''>Current Takeovers and Delistings - January 2025</a></li>
                        <li><a href=''>Latest Intraday Leverages - MSI & CO</a></li>
                    </ol>
                </div>
            </div>
        </section>
    );
}

export default Hero;