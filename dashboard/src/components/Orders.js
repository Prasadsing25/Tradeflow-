import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

const Orders = () => {
    const [allOrders, setAllOrders] = useState([]);

    //fetch orders from dashboard
    useEffect(() => {
        const fetchOrders = async () => {
            const user = JSON.parse(localStorage.getItem("user"));
            if (user && user.id) {
                try {
                    // Ensure the URL matches your backend port (usually 3000 or 3001)
                    const res = await axios.get(`https://tradeflowvista.onrender.com/addOrders?userId=${user.id}`);
                    setAllOrders(res.data);
                } catch (err) {
                    console.error("Fetch error:", err);
                }
            }
        };
        fetchOrders();
    }, []); // This runs every time you click the "Orders" tab

    return (
        <div className="orders">
            {allOrders.length === 0 ? (
                <div className="no-orders">
                    <p>You haven't placed any orders today.</p>
                    <Link to={"/"} className="btn">
                        Get Started
                    </Link>
                </div>

            ) : (
                <div className="order-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Instruments</th>
                                <th>Qty.</th>
                                <th>Price</th>
                                <th>Mode</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allOrders.map((order, index) => {
                                const isBuy = order.mode === "BUY";
                                return (
                                    <tr key={index}>
                                        <td>{order.name}</td>
                                        <td>{order.qty}</td>
                                        <td className={isBuy ? "order-buy" : "order-sell"}>{order.price.toFixed(2)}</td>
                                        <td className={isBuy ? "buy" : "sell"}>{order.mode}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            )}

        </div>
    );
}

export default Orders;