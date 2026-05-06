import React from 'react';
import Hero from './Hero';
import Brokerage from './Brokerage';

import '../style/pricing.css';
import ChatBot from '../chatbot';

function PricingPage() {
    return ( 
        <>
        <Hero />
        <Brokerage />
        <ChatBot/>
        </>
     );
}

export default PricingPage;