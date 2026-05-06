import React, { useState, useEffect, useRef } from 'react';

function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [userInput, setUserInput] = useState("");
    const [messages, setMessages] = useState([
        { text: "👋 Hi! Welcome to TradeFlow. How can we help you today?", sender: "bot" }
    ]);
    
    const messageEndRef = useRef(null);

    // Auto-scroll to bottom when new messages arrive
    useEffect(() => {
        messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isOpen]);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!userInput.trim()) return;

        const newMessages = [...messages, { text: userInput, sender: "user" }];
        setMessages(newMessages);
        setUserInput("");

        setTimeout(() => {
            setMessages(prev => [...prev, { 
                text: "Our team is currently offline, but leave your email and we'll get back to you!", 
                sender: "bot" 
            }]);
        }, 1000);
    };

    return (
        <div style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: '9999', fontFamily: 'sans-serif' }}>
            {/* Chat Window */}
            {isOpen && (
                <div style={{
                    width: '350px', height: '500px', backgroundColor: '#fff', borderRadius: '20px',
                    boxShadow: '0 12px 28px rgba(0,0,0,0.2)', display: 'flex', flexDirection: 'column',
                    overflow: 'hidden', marginBottom: '20px', animation: 'slideIn 0.3s ease'
                }}>
                    {/* Header */}
                    <div style={{ backgroundColor: '#000', color: '#fff', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div>
                            <h4 style={{ margin: 0, fontSize: '18px' }}>TradeFlow Support</h4>
                            <span style={{ fontSize: '12px', opacity: 0.8 }}>● Online</span>
                        </div>
                        <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '20px', cursor: 'pointer' }}>✕</button>
                    </div>

                    {/* Messages */}
                    <div style={{ flex: 1, padding: '20px', overflowY: 'auto', backgroundColor: '#f9f9f9', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {messages.map((msg, i) => (
                            <div key={i} style={{ 
                                alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                                maxWidth: '80%',
                                padding: '12px 16px',
                                borderRadius: msg.sender === 'user' ? '18px 18px 2px 18px' : '18px 18px 18px 2px',
                                backgroundColor: msg.sender === 'user' ? '#000' : '#fff',
                                color: msg.sender === 'user' ? '#fff' : '#000',
                                fontSize: '14px',
                                boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                                lineHeight: '1.4'
                            }}>
                                {msg.text}
                            </div>
                        ))}
                        <div ref={messageEndRef} />
                    </div>

                    {/* Input */}
                    <form onSubmit={handleSendMessage} style={{ padding: '15px', borderTop: '1px solid #eee', display: 'flex' }}>
                        <input 
                            type="text" 
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            placeholder="Type your message..." 
                            style={{ flex: 1, border: 'none', outline: 'none', fontSize: '14px' }}
                        />
                        <button type="submit" style={{ background: 'none', border: 'none', color: '#000', fontWeight: 'bold', cursor: 'pointer' }}>Send</button>
                    </form>
                </div>
            )}

            {/* Floating Toggle Button */}
            <button 
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    width: '60px', height: '60px', borderRadius: '30px', backgroundColor: '#000',
                    color: '#fff', border: 'none', cursor: 'pointer', fontSize: '24px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.3)', transition: 'transform 0.2s',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
                {isOpen ? '✕' : '💬'}
            </button>

            {/* Animation CSS */}
            <style>{`
                @keyframes slideIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
}

export default ChatBot;