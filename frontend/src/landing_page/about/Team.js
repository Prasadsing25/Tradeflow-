import React from 'react';

function Team() {
    return (
        <div className='container'>
            <div className='row p-3 mt-5 border-top'>
                <h1 className='text-center fs-3 mt-4'>Our Team</h1>
            </div>
            <div className='row p-3 text-muted' style={{ lineHeight: '1.8', fontSize: '1.2em' }}>
                <div className='col-6 p-3 text-center'>
                    <img src='media/images/prasadsolanki.jpg' alt='prasadsing' style={{ borderRadius: '100%', width: '50%' }} />
                    <h4 className='mt-5' >Prasadsing Solanki</h4>
                    <h6 className='text-muted'>Founder, CEO</h6>
                </div>
                <div className='col-6 p-3'>
                    <p>Prasad bootstrapped and founded TradeFlow in 2025 to overcome the
                        hurdles he faced during his decade long stint as a trader. Today,
                        TradeFlow has changed the landscape of the Indian broking industry.</p>
                    <p>Prasadsing is passionate about technology and building products.</p>
                    <p>Playing volleyball is his zen.</p>
                    <p>
                        Connect on &nbsp;&nbsp;&nbsp;<a href="https://www.facebook.com/share/178FcLXefh/" style={{textDecoration: 'none', color: 'blue'}}><i class="fa fa-facebook" aria-hidden="true"></i> Facebook</a>&nbsp;&nbsp; / <a href="https://www.instagram.com/prasad_rajput1111?igsh=MXBsbXIwdjZpa280OQ==" style={{textDecoration: 'none', color: 'red'}}><i class="fa fa-instagram" aria-hidden="true"></i> Instagram</a> /&nbsp;&nbsp;{" "}
                        <a href="https://x.com/Prasadsing111?t=K88UuNAm9r7QVmvnmQfG8g&s=09" target="_blank" style={{textDecoration: 'none', color: 'black'}}><i class="fa fa-twitter" aria-hidden="true"></i> Twitter</a>
                    </p>
                </div>
            </div>

            <div className='row mt-5 p-3'>
                <div className='col-4 text-center'>
                    <img src='media/images/prasadsolanki.jpg' alt='prasadsing' style={{ borderRadius: '100%', width: '60%' }} />
                    <h4 className='mt-5' style={{ fontSize: '18px', color: '#424242' }}>Pawan Patil</h4>
                    <h6 className='text-muted' style={{ fontSize: '14.4px' }}>Director Strategy</h6>
                </div>
                <div className='col-4 text-center'>
                    <img src='media/images/prasadsolanki.jpg' alt='prasadsing' style={{ borderRadius: '100%', width: '60%' }} />
                    <h4 className='mt-5' style={{ fontSize: '18px', color: '#424242' }}>Gaurav Sonawane</h4>
                    <h6 className='text-muted' style={{ fontSize: '14.4px' }}>CTO</h6>
                </div>
                <div className='col-4 text-center'>
                    <img src='media/images/prasadsolanki.jpg' alt='prasadsing' style={{ borderRadius: '100%', width: '60%' }} />
                    <h4 className='mt-5' style={{ fontSize: '18px', color: '#424242' }}>Prasad Shinde</h4>
                    <h6 className='text-muted' style={{ fontSize: '14.4px' }}>Director</h6>
                </div>
            </div>
        </div>
    );
}

export default Team;