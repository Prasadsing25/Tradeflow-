import React, { useState, useEffect } from "react";

import axios from "axios";

import Dashboard from './Dashboard';
import Topbar from './Topbar';
// import { Password } from "@mui/icons-material";
import './Auth.css';

function Home() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isSignup, setIsSignup] = useState(true);  //TRUE so new visitors see Signup by default
    const [formData, setFormData] = useState({ email: "", password: "", username: "" });

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) setIsLoggedIn(true);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const endpoint = isSignup ? "signup" : "login";
        try {
            const { data } = await axios.post(`https://tradeflowvista.onrender.com/${endpoint}`, formData);
            if (data.success) {
                localStorage.setItem("user", JSON.stringify(data.user));
                setIsLoggedIn(true);
            } else {
                alert(data.message);
            }
        } catch (err) {
            alert("Server Error. Make sure backend is running.");
        }
    }

    if (!isLoggedIn) {
        return (
            <div className="auth-container">
                <div className="auth-card">

                    {/* LEFT PANEL */}
                    <div className="auth-left">
                        <h2>Come join us!</h2>
                        <p>
                            Create an account to access exclusive offers,
                            rewards and discounts.
                        </p>
                        <button
                            className="switch-btn"
                            onClick={() => setIsSignup(!isSignup)}
                        >
                            {isSignup
                                ? "Already have an account? Login"
                                : "New user? Create Account"}
                        </button>
                    </div>

                    {/* RIGHT PANEL */}
                    <div className="auth-right">
                        {/* BRAND LOGO */}
                        <img
                            src="/tradeflowlogo.svg"
                            alt="tradeflow"
                            className="brand-logo"
                        />


                        <h2>{isSignup ? "Signup" : "Login"}</h2>

                        <form onSubmit={handleSubmit}>
                            {isSignup && (
                                <input
                                    type="text"
                                    placeholder="Username"
                                    required
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            username: e.target.value
                                        })
                                    }
                                />
                            )}

                            <input
                                type="email"
                                placeholder="Email"
                                required
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        email: e.target.value
                                    })
                                }
                            />

                            <input
                                type="password"
                                placeholder="Password"
                                required
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        password: e.target.value
                                    })
                                }
                            />

                            <button type="submit" className="submit-btn">
                                {isSignup ? "Signup" : "Login"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            <Topbar />
            <Dashboard />
        </>
    );
}

export default Home;