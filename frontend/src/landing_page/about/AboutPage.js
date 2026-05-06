import React from 'react';
import Hero from './Hero';
import Team from './Team';

import '../style/about.css';
import ChatBot from '../chatbot';

function AboutPage() {
    return ( 
        <>
        <Hero/>
        <Team/>
        <ChatBot/>
        </>
     );
}

export default AboutPage;