import React from 'react';
import Hero from './Hero';
import CreateTicket from './CreateTicket';

import '../style/support.css';
import ChatBot from '../chatbot';

function SupportPage() {
    return ( 
        <>
        <Hero />
        <CreateTicket />
        <ChatBot/>
        </>
     );
}

export default SupportPage;