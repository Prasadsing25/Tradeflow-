import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
    const [selectedMenu, setSelectedMenu] = useState(0);
    const [isProfileDropDownOpen, setIsProfileDropDownOpen] = useState(false);
    const [user, setUser] = useState({ username: "User", email: "" });

    //Fetch user data from localstorage when component mounts
    useEffect(() => {
        const savedUser = localStorage.getItem("user");
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);

    const handlMenueClick = (index) => {
        setSelectedMenu(index);
    }
    const handlProfileClick = () => {
        setIsProfileDropDownOpen(!isProfileDropDownOpen);
    }

    const handleLogout = () => {
        localStorage.removeItem("user");
        // Redirect or refresh to trigger the Login gate in Home.js
        window.location.reload();
    }

    const menuClass = "menu";
    const activeMenuClass = "menu selected";

    return (
        <div className="menu-container">
            <img src="logo.jpg" alt="tradeflow" style={{ width: '50px' }} />
            <div className="menus">
                <ul>
                    <Link to="/" style={{ textDecoration: 'none' }} onClick={() => handlMenueClick(0)}>
                        <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p>
                    </Link>
                    <Link to="/orders" style={{ textDecoration: 'none' }} onClick={() => handlMenueClick(1)}>
                        <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>Orders</p>
                    </Link>
                    <Link to="/holdings" style={{ textDecoration: 'none' }} onClick={() => handlMenueClick(2)}>
                        <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>Holdings</p>
                    </Link>
                    <Link to="/positions" style={{ textDecoration: 'none' }} onClick={() => handlMenueClick(3)}>
                        <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>Positions</p>
                    </Link>
                    <Link to="/funds" style={{ textDecoration: 'none' }} onClick={() => handlMenueClick(4)}>
                        <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>Funds</p>
                    </Link>
                    <Link to="/apps" style={{ textDecoration: 'none' }} onClick={() => handlMenueClick(5)}>
                        <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>Apps</p>
                    </Link>
                </ul>
                <hr />

                {/* Profile Section with Dropdown flowing DOWN */}
                <div className="profile-section" style={{ position: 'relative' }}>
                    <div className="profile" onClick={handlProfileClick} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div className="avatar">
                            {user.username.charAt(0).toUpperCase()}
                        </div>
                        <p className="username">{user.username}</p>
                    </div>

                    {/* Dropdown positioned BELOW the profile */}
                    {isProfileDropDownOpen && (
                        <div className="dropdown" style={{
                            position: 'absolute',
                            top: '100%',     // Position directly below the profile div
                            right: '0',
                            marginTop: '10px',
                            background: '#1a1a1a', // Dark theme to match your screenshot
                            border: '1px solid #444',
                            borderRadius: '4px',
                            boxShadow: '0 8px 16px rgba(0,0,0,0.4)',
                            padding: '12px',
                            minWidth: '200px',
                            zIndex: 1000,
                            color: 'white',
                            maxWidth: '90vw'
                        }}>
                            <div style={{ marginBottom: '10px' }}>
                                <p style={{ margin: '0', fontWeight: 'bold', fontSize: '14px', wordBreak: 'break-word' }}>{user.username}</p> <br/>
                                <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#d0cacaff', wordBreak: 'break-word' }}>{user.email}</p>
                            </div>
                            <hr style={{ border: '0', borderTop: '1px solid #444', margin: '7px 0' }} />
                            <button
                                onClick={handleLogout}
                                style={{
                                    width: '70%',
                                    padding: '8px',
                                    marginLeft: '30px',
                                    background: '#e74c3c',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '3px',
                                    cursor: 'pointer',
                                    fontWeight: 'bold'
                                }}
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Menu;